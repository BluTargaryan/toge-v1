import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation';

const FeedItem = ({shopId, shopTitle, shopLocation, shopImage}: {shopId: string, shopTitle: string, shopLocation: string, shopImage: string}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop/${shopId}`);
  }

  return (
    <div className='w-full flex flex-col bg-primary rounded-lg overflow-hidden'>
      <div className='relative w-full h-40'>
        <Image 
          src={shopImage} 
          alt={`${shopTitle} store`}
          fill
          className='object-cover object-center hover:scale-105 transition-all duration-300'
        />
      </div>
      <div className='p-4 flex justify-between items-center
      md:flex-col md:gap-5 md:items-start
      xl:flex-row xl:items-center
      '>
        <div className='flex flex-col gap-1 text-background w-1/2
        md:w-full
        '>
          <span className='font-semibold text-xl'>{shopTitle}</span>
          <span className='text-xs'>{shopLocation}</span>
        </div>

        <button className='bg-accent text-text p-2.5 rounded-lg flex items-center gap-6 group cursor-pointer xl:shrink-0'
        onClick={() => handleClick()}
        >
          <span className='text-xs'>Learn more</span>
          <FaLongArrowAltRight className='group-hover:translate-x-1 transition-all duration-300'/>
        </button>
      </div>
    </div>
  )
}

export default FeedItem