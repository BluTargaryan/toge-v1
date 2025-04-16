import React from 'react'
import LocationInput from '../atoms/LocationInput'
const Hero = () => {
  return (
    <section className='w-full h-full flex flex-col gap-8'>
<div className='flex flex-col gap-2 items-center text-center'>
<h1 className='text-3xl font-bold font-manrope text-primary'>
    Toge
</h1>
<p className='w-full'>
The one stop search portal for all those hard-to-find African ingredients in the UK
</p>
</div>

<div className='flex flex-col gap-4'>
<input type="text" placeholder='Search for ingredients' className='w-full h-12 rounded-sm bg-secondary p-4' />
<LocationInput />
</div>

<button className='w-full h-12 rounded-sm bg-primary text-background hover:bg-accent transition-all duration-300 cursor-pointer'>
    Search
</button>
    </section>
  )
}

export default Hero