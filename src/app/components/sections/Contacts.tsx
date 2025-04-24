import React from 'react'
import Contact from '../atoms/Contact'
const Contacts = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h2 className='text-xl !font-inter font-semibold text-primary uppercase xl:text-2xl'>
            Contact Us
        </h2>
        <div className='flex flex-col gap-4'>
            {Array.from({length: 3}).map((_, index) => (
                <Contact key={index} />
            ))}
        </div>
    </div>
  )
}

export default Contacts