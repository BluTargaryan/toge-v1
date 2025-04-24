import React from 'react'
import Day from '../atoms/Day'
const OCTimes = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h2 className='text-xl !font-inter font-semibold text-primary uppercase xl:text-2xl'>
            Opening and Closing Times
        </h2>
        <div className='flex flex-col gap-4'>
          {Array.from({length: 7}).map((_, index) => (
            <Day key={index} />
          ))}
        </div>
    </div>
  )
}

export default OCTimes