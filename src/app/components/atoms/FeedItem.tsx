import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
const FeedItem = () => {
  return (
    <div className='w-full flex flex-col bg-primary rounded-lg overflow-hidden'>
    <Image src={'https://images.unsplash.com/photo-1693013751189-8ae51b21351e?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
    alt='feed item' width={500} height={500} 
    className='w-full h-40 object-cover object-center hover:scale-105 transition-all duration-300'
    />
    <div className='p-4 flex justify-between items-center
    md:flex-col md:gap-5 md:items-start
    '>

        <div className='flex flex-col gap-1 text-background w-1/2
        md:w-full
        '>
            <span className='font-semibold text-xl'>Store name</span>
            <span className='text-xs'>Coventry, CV2 5JU</span>
        </div>


        <button className='bg-accent text-text p-2.5 rounded-lg flex items-center gap-6 hover:gap-8 transition-all duration-300'>
            <span className='text-xs '>Learn more</span>
            <FaLongArrowAltRight />
        </button>

    </div>
        
    </div>
  )
}

export default FeedItem