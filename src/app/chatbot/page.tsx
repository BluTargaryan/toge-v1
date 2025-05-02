import React, { useCallback, useEffect, useState } from 'react'
import QAChatbotUnit from '../components/atoms/QAChatbotUnit'
import { useAppContext } from '../context/AppContext';
import {
  BedrockRuntimeClient,
  ContentBlock,
  ConversationRole,
  ConverseCommand,
  ConverseCommandOutput,
  ImageFormat,
  Message,
} from "@aws-sdk/client-bedrock-runtime";

const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION!;
const MODEL_ID = process.env.NEXT_PUBLIC_MODEL_ID!;
const USER_NAME = process.env.NEXT_PUBLIC_USER_NAME!;

if (!process.env.NEXT_PUBLIC_AWS_ACCESS_KEY || !process.env.NEXT_PUBLIC_AWS_SECRET_KEY) {
  throw new Error('AWS credentials are not configured');
}

const client = new BedrockRuntimeClient({
  region: AWS_REGION,
  credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
  },
});

const {shops, ingredients} = useAppContext();

const tools: Record<string, Function> = {
  findShops: async ({ ingredientName }: { ingredientName: string }) => {
      const ingredient = ingredients.find((ingredient) => ingredient.title.toLowerCase().includes(ingredientName.toLowerCase()));
      if (!ingredient) {
        return "Ingredient not found";
      }
      const ingredientShops = ingredient.shops;
      const shopsData = shops.filter((shop) => ingredientShops.includes(shop.id));
      return shopsData;
  },
};

const Chatbot = () => {
  return (
    <main className='section-container edge-padding h-full justify-end'>
       <section className='w-full h-[calc(100vh-200px)] overflow-y-scroll flex flex-col gap-6 items-end'>
        <QAChatbotUnit />
        <QAChatbotUnit />
        <QAChatbotUnit />
        <QAChatbotUnit />
        <QAChatbotUnit />
        <QAChatbotUnit />
       </section>
       <section className='flex flex-col gap-4 items-end'>
        <textarea placeholder='Ask me anything...' 
        className='w-full rounded-lg bg-secondary p-4
        xl:h-24
        '
        />
        <button className='bg-primary text-background w-2/5 py-3.5 rounded-lg xl:w-1/5'>
            Send
        </button>

       </section>
    </main>
  )
}

export default Chatbot