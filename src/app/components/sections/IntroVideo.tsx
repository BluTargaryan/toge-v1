import React from 'react'
import IntroVideoOverlay from '../atoms/IntroVideoOverlay'
const IntroVideo = () => {
  return (
    <section className='w-full h-[calc(100vh-100px)] flex items-center justify-center'>
       <div className='relative w-full h-4/5 overflow-hidden rounded-lg'>
         <video 
           src={'/TogeStockVideo.mp4'} 
           className='w-full h-full object-cover object-center' 
           autoPlay 
           muted 
           loop 
         />
         <IntroVideoOverlay />
       </div>
    </section>
  )
}

export default IntroVideo