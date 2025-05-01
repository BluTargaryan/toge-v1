import React from 'react'
import QAChatbotUnit from '../components/atoms/QAChatbotUnit'
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