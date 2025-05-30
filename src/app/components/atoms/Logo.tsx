import React from 'react'
import Image from 'next/image'
import Icon from '@/app/icon.png'

const Logo = () => {
  return (
    <Image src={Icon} alt='logo' 
      width={100} height={100} 
      className='w-6 h-6
      md:w-7 md:h-7
      '
      />
  )
}

export default Logo