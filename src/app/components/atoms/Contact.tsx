import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Contact = ({platform, address}: {platform: string, address: string}) => {
  return (
    <div className='flex flex-col gap-1.5 cursor-pointer'
    onClick={() => {
      if (platform === 'Email') {
        window.open(`mailto:${address}`, '_blank');
      } else if (platform === 'Call') {
        window.open(`tel:${address}`, '_blank');
      }else{
        window.open(`https://${address}`, '_blank');
      }
    }}
    >
        <div className='flex items-center gap-1 group cursor-pointer'>
            <h3 className='font-bold'>{platform}</h3>
            <FaLongArrowAltRight className='group-hover:translate-x-1 transition-transform duration-300'/>
        </div>
        <span>{address}</span>
    </div>
  )
}

export default Contact