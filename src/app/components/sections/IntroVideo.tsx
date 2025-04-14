import React from 'react'
import { introVideoURL } from '@/app/utils/utils'
const IntroVideo = () => {
  return (
    <section className='w-full h-[calc(100vh-100px)] flex items-center justify-center'>
       <video src={introVideoURL} className='w-4/5 h-4/5' autoPlay muted loop />
    </section>
  )
}

export default IntroVideo