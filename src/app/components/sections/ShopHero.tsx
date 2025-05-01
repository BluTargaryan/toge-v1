import React from 'react'
import Image from 'next/image'
import { Shop } from '@/app/utils/utils'
const ShopHero = ({shop}: {shop: Shop}) => {
  return (
    <section className='w-full flex flex-col gap-9'>

<div className='flex gap-5 items-end'>
            <h1 className='text-4xl font-bold text-primary uppercase w-3/5
            md:text-5xl
            xl:text-6xl
            '>
                {shop.title}  
            </h1>
            <span className='font-semibold text-primary uppercase w-2/5 xl:text-xl'>
            LOCATION: {shop.locationTitle}
            </span>
        </div>

        <Image src={shop.url} 
    alt='feed item' width={500} height={500} 
    className='w-full h-52 object-cover object-center rounded-lg
    md:h-72
    xl:h-[624px]
    '
    />
    <p>
    {shop.description}
    </p>
    </section>
  )
}

export default ShopHero