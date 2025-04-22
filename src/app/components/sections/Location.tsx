import React from 'react'
import LocationMap from '../atoms/LocationMap'
const Location = () => {
  return (
    <section className='w-full flex flex-col gap-4'>
        <h2 className='text-xl font-semibold text-primary uppercase'>
            Location
        </h2>
        <span>
        COVENTRY, CV2 46L
        </span>
        <LocationMap />
    </section>
  )
}

export default Location