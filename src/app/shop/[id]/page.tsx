'use client'

import Link from 'next/link';
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import ShopHero from '@/app/components/sections/ShopHero';
import Location from '@/app/components/sections/Location';
import OCTimes from '@/app/components/sections/OCTimes';
import Contacts from '@/app/components/sections/Contacts';
import { useParams } from 'next/navigation';
import {useAppContext} from '@/app/context/AppContext';

const ShopPage = () => {
  const {id} = useParams();
  const {shops} = useAppContext();
  const shop = shops.find((shop) => shop.id === id);
  if (!shop) {
    return <div>Shop not found</div>;
  }
  return (
    <main className="section-container edge-padding">
      
      <Link href='/' className='flex gap-5 text-primary group cursor-pointer'>
       <FaLongArrowAltLeft className='translate-x-1 group-hover:translate-x-0 transition-all duration-300'/>
       <span className='text-xs'>
        Back to shops' list
       </span>
      </Link>

      <ShopHero shop={shop}/>
      <Location locationLong={shop.locationLong} locationLat={shop.locationLat} locationTitle={shop.locationTitle} />
      <section className='flex flex-col gap-16 md:flex-row'>
       
      <OCTimes ocTimes={shop.ocTimes} />
      <Contacts contacts={shop.contacts} />
      </section>
    </main>
  );
}

export default ShopPage