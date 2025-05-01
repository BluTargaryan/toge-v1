import React from 'react'
import LocationMap from '../atoms/LocationMap'
const Location = ({locationLong, locationLat, locationTitle}: {locationLong: number, locationLat: number, locationTitle: string}) => {
  return (
    <section className='w-full flex flex-col gap-4'>
        <h2 className='text-xl !font-inter font-semibold text-primary uppercase'>
            Location
        </h2>
        <span>
        {locationTitle}
        </span>
        <LocationMap locationLong={locationLong} locationLat={locationLat} />
    </section>
  )
}

export default Location