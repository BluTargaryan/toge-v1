import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
const LocationInput = () => {
  return (
    <div className='w-full h-12 rounded-sm bg-secondary p-4 flex gap-2 items-center'>
        <input type="text" placeholder='Search location' className='w-full h-12 bg-transparent' />

        <div className='flex gap-2 shrink-0'>
            <span className='text-xs font-medium'>Use current location</span>
            <FaMapMarkerAlt />
        </div>
    </div>
  )
}

export default LocationInput