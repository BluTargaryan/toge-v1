import React from 'react'
import {FaLongArrowAltDown} from 'react-icons/fa'


const IntroVideoOverlay = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/70 flex flex-col items-center justify-end z-40  py-6'>
        <div className='flex flex-col gap-4 items-center'>
       <span className='text-background text-sm font-normal
       md:text-sm
       '>Scroll down</span>
       <FaLongArrowAltDown className='text-background animate-bounce cursor-pointer' />
        </div>
    </div>
  )
}

export default IntroVideoOverlay