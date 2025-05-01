'use client'

import React, { useEffect, useState } from 'react'
import IntroVideoOverlay from '../atoms/IntroVideoOverlay'
const IntroVideo = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className={`w-full  flex items-center justify-center ${scrollY > 0 ? 'h-0' : 'h-[calc(100vh-100px)]'} transition-all duration-300`}>
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