import Link from 'next/link';
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import ShopHero from '@/app/components/sections/ShopHero';
import Location from '@/app/components/sections/Location';
import OCTimes from '@/app/components/sections/OCTimes';
import Contacts from '@/app/components/sections/Contacts';
const ShopPage = () => {
  return (
    <main className="section-container edge-padding">
      
      <Link href='/' className='flex gap-5 text-primary group cursor-pointer'>
       <FaLongArrowAltLeft className='translate-x-1 group-hover:translate-x-0 transition-all duration-300'/>
       <span className='text-xs'>
        Back to shops' list
       </span>
      </Link>

      <ShopHero />
      <Location />
      <section className='flex flex-col gap-16 md:flex-row'>
       
      <OCTimes />
      <Contacts />
      </section>
    </main>
  );
}

export default ShopPage