import React from 'react'
import Day from '../atoms/Day'
const OCTimes = ({ocTimes}: {ocTimes: any[]}) => {
  return (
    <div className='flex flex-col gap-6'>
        <h2 className='text-xl !font-inter font-semibold text-primary uppercase xl:text-2xl'>
            Opening and Closing Times
        </h2>
        <div className='flex flex-col gap-4'>
          {ocTimes.map((ocTime, index) => (
            <Day key={index} dayStatement={ocTime.dayStatement} times={ocTime.times} />
          ))}
        </div>
    </div>
  )
}

export default OCTimes