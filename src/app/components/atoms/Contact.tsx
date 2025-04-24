import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='flex flex-col gap-1.5'>
        <div className='flex items-center gap-1 group cursor-pointer'>
            <h3 className='font-bold'>E-mail</h3>
            <FaLongArrowAltRight className='group-hover:translate-x-1 transition-transform duration-300'/>
        </div>
        <span>opeywdw@gmail.com</span>
    </div>
  )
}

export default Contact