'use client'

import React, { useCallback, useEffect, useState, ChangeEvent } from 'react'
import QAChatbotUnit from '../components/atoms/QAChatbotUnit'
import { BedrockRuntimeClient, ConverseCommand, ConversationRole, Message, ContentBlock, ImageFormat, ConverseCommandOutput } from "@aws-sdk/client-bedrock-runtime";
import { toolsSchema } from '../tools';
import { convertFileToUint8Array } from '../utils/utils';
import { useAppContext } from '../context/AppContext';

const PROMPT = "Hi. In a short paragraph, explain what you can do.";
const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION!;
const MODEL_ID = process.env.NEXT_PUBLIC_MODEL_ID!;

const client = new BedrockRuntimeClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY!,
  },
});

const Chatbot = () => {
  const [history, setHistory] = useState<Message[]>([]);
  const [value, setValue] = useState<string>(PROMPT);
  const {shops, ingredients} = useAppContext();

  const tools = {
    findShops: async ({ ingredientName }: { ingredientName: string }) => {
      const ingredient = ingredients.find((ingredient) => ingredient.title.toLowerCase().includes(ingredientName.toLowerCase()));
      if (!ingredient) {
        return JSON.stringify({ status: "error", message: "Ingredient not found" });
      }
      const ingredientShops = ingredient.shops;
      const shopsData = shops.filter((shop) => ingredientShops.includes(shop.id));
      const finalData = JSON.stringify({
        status: "success",
        data: {
          ingredient: ingredient.title,
          shops: shopsData.map(shop => ({
            id: shop.id,
            title: shop.title,
            description: shop.description,
            locationTitle: shop.locationTitle,
            locationLat: shop.locationLat,
            locationLong: shop.locationLong,
            url: shop.url,
            ocTimes: shop.ocTimes,
            contacts: shop.contacts
          }))
        }
      });
      console.log(finalData);
      return finalData;
    }
  };

  const sendResponse = async (messages: Message[]) => {
    let retries = 3;
    let delay = 1000;

    while (retries > 0) {
      try {
        const apiResponse = await client.send(
          new ConverseCommand({
            modelId: MODEL_ID,
            messages: messages,
            inferenceConfig: {
              maxTokens: 512,
              temperature: 0.5,
              topP: 0.9,
            },
            toolConfig: {
              tools: toolsSchema,
            },
          })
        );
        return apiResponse;
      } catch (error: any) {
        if (error.name === 'ThrottlingException' && retries > 0) {
          retries--;
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        } else {
          throw error;
        }
      }
    }
    throw new Error('Max retries reached for ThrottlingException');
  };

  const parseResponse = useCallback(async (apiResponse: ConverseCommandOutput) => {
    const message = apiResponse?.output?.message;
    const tempHistory = [...history];

    if (message && apiResponse?.stopReason !== "tool_use") {
      setHistory((prev) => [...prev, message]);
    }

    if (message && apiResponse?.stopReason === "tool_use" && apiResponse?.output?.message) {
      tempHistory.push(apiResponse?.output?.message);
      const toolUse = apiResponse?.output?.message.content?.
        find(block => block.toolUse)?.toolUse;

      if (toolUse && typeof toolUse.input === 'object' && toolUse.input && 'ingredientName' in toolUse.input) {
        const toolResult = await tools[toolUse.name as keyof typeof tools]({
          ingredientName: toolUse.input.ingredientName as string
        });
        console.log({ toolResult });
        tempHistory.push({
          role: ConversationRole.USER,
          content: [{
            toolResult: {
              toolUseId: toolUse.toolUseId,
              content: [
                {
                  json: {
                    results: toolResult
                  }
                }
              ]
            }
          }]
        });

        const response = await sendResponse(tempHistory);
        await parseResponse(response);
      }
    }
  }, [history, tools]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  const onSubmit = async (prompt: string, file?: File | null) => {
    const content: ContentBlock[] = [
      {
        text: prompt,
      },
    ];

    if (file) {
      content.push({
        image: {
          format: file?.name.split(".").reverse()[0] as ImageFormat,
          source: {
            bytes: await convertFileToUint8Array(file),
          },
        },
      });
    }

    setHistory((prev) => [...prev, { content, role: ConversationRole.USER }]);
  };

  const submit = () => {
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    const lastMessage = history[history.length - 1];
    const callModel = async (messages: Message[]) => {
      const response = await sendResponse(messages);
      await parseResponse(response);
    };
    if (lastMessage?.role === ConversationRole.USER) {
      callModel(history);
    }
  }, [history, parseResponse]);

  return (
    <main className='section-container edge-padding h-full justify-end'>
      <section className='w-full h-[calc(100vh-200px)] overflow-y-scroll flex flex-col gap-6 items-end'>
        {history.map(({role, content}) => (
          <QAChatbotUnit 
            key={content?.[0]?.text || content?.[0]?.toolResult?.toolUseId}
            author={role || ""}
            text={content?.[0]?.text || ""}
          />
        ))}
      </section>
      <section className='flex flex-col gap-4 items-end'>
        <textarea 
          placeholder='Ask me anything...'
          className='w-full rounded-lg bg-secondary p-4'
          value={value}
          onChange={onChange}
        />
        <button 
          className='bg-primary text-background w-2/5 py-3.5 rounded-lg xl:w-1/5'
          onClick={submit}
        >
          Send
        </button>
      </section>
    </main>
  );
};

export default Chatbot;