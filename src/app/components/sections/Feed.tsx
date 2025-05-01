import React from 'react'
import FeedItem from '../atoms/FeedItem'
import { Shop } from '@/app/utils/utils'

const Feed = ({feedData, location, ingredient}: {feedData: Shop[], location: string, ingredient: string}) => {
  return (
    <section className='w-full flex flex-col gap-14'>
        <div className='flex gap-5 items-end'>
            <span className='text-4xl font-bold font-manrope text-primary uppercase w-3/5
            md:text-5xl
            xl:text-6xl
            '>
                {ingredient}
            </span>
            <span className='font-semibold text-primary uppercase w-2/5 xl:text-xl'>
            location: {location}
            </span>
        </div>

        <div className='grid grid-cols-1 gap-8
        md:grid-cols-3 md:gap-5
        xl:gap-y-12
        '>
          {feedData.map((shop) => (
            <FeedItem key={shop.id} shopId={shop.id} shopTitle={shop.title} shopLocation={shop.locationTitle} shopImage={shop.url} />
          ))}
        </div>

    </section>
  )
}

export default Feed
