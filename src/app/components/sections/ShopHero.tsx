import React from 'react'
import Image from 'next/image'
const ShopHero = () => {
  return (
    <section className='w-full flex flex-col gap-9'>

<div className='flex gap-5 items-end'>
            <h1 className='text-4xl font-bold text-primary uppercase w-3/5
            md:text-5xl
            xl:text-6xl
            '>
                POomo
            </h1>
            <span className='font-semibold text-primary uppercase w-2/5 xl:text-xl'>
            LOCATION: ALL
            </span>
        </div>

        <Image src={'https://images.unsplash.com/photo-1693013751189-8ae51b21351e?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
    alt='feed item' width={500} height={500} 
    className='w-full h-52 object-cover object-center rounded-lg
    md:h-72
    xl:h-[624px]
    '
    />
    <p>
    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
    </p>
    </section>
  )
}

export default ShopHero