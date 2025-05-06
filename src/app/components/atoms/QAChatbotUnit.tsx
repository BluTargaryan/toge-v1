import React from 'react'

const QAChatbotUnit = ({author, text}: {author: string,  text: string}) => {
  console.log(author)
  console.log(text)
  return (
    <>
    {author === "assistant" &&
    
    <p>
      {text}
        </p>
    }

{author=== "user" &&
    
    <div className='w-4/5 px-5 py-3.5 rounded-lg bg-primary text-background
    xl:w-1/2
    '>
    {text}
    </div>
    }
    
        
    </>
  )
}

export default QAChatbotUnit