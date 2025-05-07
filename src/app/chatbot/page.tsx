'use client'

import React, { useCallback, useEffect, useState, ChangeEvent } from 'react'
import QAChatbotUnit from '../components/atoms/QAChatbotUnit'
import { BedrockRuntimeClient, ConverseCommand, ConversationRole, Message, ContentBlock, ImageFormat, ConverseCommandOutput } from "@aws-sdk/client-bedrock-runtime";
import { useRouter } from 'next/navigation';

import {
  BedrockAgentRuntimeClient,
  InvokeAgentCommand,
  InvokeAgentCommandOutput,
} from "@aws-sdk/client-bedrock-agent-runtime";

const PROMPT = "Hi. In a short paragraph, explain what you can do.";


const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION!;
const MODEL_NAME = process.env.NEXT_PUBLIC_MODEL_NAME!;
const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME!;

const client = new BedrockAgentRuntimeClient({
  region: AWS_REGION,
  credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY!,
  },
});

interface IMessage {
  role: ConversationRole;
  content: { text: string }[];
}


const Chatbot = () => {
  const [value, setValue] = useState<string>(PROMPT);
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value);

    const submit = () => {
        onSubmit(value);
        setValue("");
    };

  const [history, setHistory] = useState<IMessage[]>([]);

  const [stream, setStream] = useState<string | null>(null);
  const router = useRouter();

  const sendResponse = async (prompt: string) => {
    const content: string = prompt;
    let retries = 3;
    let delay = 1000;

    while (retries > 0) {
      try {
        const apiResponse = await client.send(
          new InvokeAgentCommand({
            inputText: content,
            agentId: "5MDMB9N8BH",
            agentAliasId: "3KENGHADBD",
            sessionId: "123",
          })
        );
        
        // Try to parse the response immediately
        try {
          const result = await parseResponse(apiResponse);
          return result; // If successful, return the parsed result
        } catch (streamError: any) {
          if (streamError.name === 'ThrottlingException' && retries > 0) {
            // If stream was throttled, throw to trigger retry of entire request
            throw streamError;
          }
          throw streamError; // If it's not throttling, throw the original error
        }
      } catch (error: any) {
        if (error.name === 'ThrottlingException' && retries > 0) {
          console.log(`Throttled. Retrying in ${delay}ms. Retries left: ${retries - 1}`);
          retries--;
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
          if (retries === 0) {
            router.push('/');
          }
        } else {
          throw error;
        }
      }
    }
    throw new Error('Max retries reached for ThrottlingException');
  };

  const parseResponse = async (apiResponse: InvokeAgentCommandOutput) => {
    if (!apiResponse.completion) return "";

    let completeMessage = "";

    try {
      for await (const item of apiResponse.completion) {
        if (item.chunk) {
          const text = item.chunk;
          const decoded = new TextDecoder("utf-8").decode(text.bytes);
          setStream(completeMessage + decoded);
          completeMessage = completeMessage + decoded;
        }
      }
      
      setStream(null);
      return completeMessage;
    } catch (error) {
      setStream(null); // Clean up stream state if there's an error
      throw error; // Propagate the error to be handled by sendResponse
    }
  };

const addToHistory = (text: string, role: ConversationRole) => {
  setHistory((prev) => [...prev, { content: [{ text }], role }]);
};

const onSubmit = async (prompt: string) => {
  try {
    addToHistory(prompt, USER_NAME as ConversationRole);
    const parsedResponse = await sendResponse(prompt);
    addToHistory(parsedResponse, MODEL_NAME as ConversationRole);
  } catch (error) {
    console.error('Error in chat submission:', error);
    addToHistory("Sorry, I encountered an error. Please try again.", MODEL_NAME as ConversationRole);
  }
};


  return (
    <main className='section-container edge-padding h-full justify-end'>
      <section className='w-full h-[calc(100vh-200px)] overflow-y-scroll flex flex-col gap-6 items-end'>
{history.map(({ role, content }, index) => (
          <QAChatbotUnit 
            key={content[0].text + role + index}
            author={role}
            text={content[0].text}
          />
        ))}

{/* {stream && (
                    <QAChatbotUnit 
                    key={stream}
                    author={MODEL_NAME as ConversationRole}
                    text={stream}
                  />
                )} */}
        

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