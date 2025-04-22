import React from 'react'
import Day from '../atoms/Day'
const OCTimes = () => {
  return (
    <section className='flex flex-col gap-6'>
        <h2 className='text-xl font-semibold text-primary uppercase'>
            Opening and Closing Times
        </h2>
        <div className='flex flex-col gap-4'>
          {Array.from({length: 7}).map((_, index) => (
            <Day key={index} />
          ))}
        </div>
    </section>
  )
}

export default OCTimes