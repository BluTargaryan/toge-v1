import React from 'react'
import LocationInput from '../atoms/LocationInput'
const Hero = () => {
  return (
    <section className='w-full h-full flex flex-col items-center gap-8
    md:gap-12
    '>
<div className='flex flex-col gap-2 items-center text-center
md:w-full
'>
<h1 className='text-3xl font-bold font-manrope text-primary'>
    Toge
</h1>
<p className='w-full md:w-1/2'>
The one stop search portal for all those hard-to-find African ingredients in the UK
</p>
</div>

<div className='flex flex-col gap-4
md:w-4/5
'>
<input type="text" placeholder='Search for ingredients' className='w-full h-12 rounded-sm bg-secondary p-4' />
<LocationInput />
</div>

<button className='w-full h-12 rounded-sm bg-primary text-background hover:bg-accent transition-all duration-300 cursor-pointer
md:w-1/2
'>
    Search
</button>
    </section>
  )
}

export default Hero