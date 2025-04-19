import React from 'react'
import FeedItem from '../atoms/FeedItem'
const Feed = () => {
  return (
    <section className='w-full flex flex-col gap-14'>
        <div className='flex gap-5 items-end'>
            <span className='text-4xl font-bold font-manrope text-primary uppercase w-3/5
            md:text-5xl
            '>
                POomo
            </span>
            <span className='font-semibold text-primary uppercase w-2/5'>
            LOCATION: ALL
            </span>
        </div>

        <div className='grid grid-cols-1 gap-8
        md:grid-cols-3 md:gap-5
        '>
          <FeedItem />
         <FeedItem />
         <FeedItem />
         <FeedItem />
         <FeedItem />
         <FeedItem />
        </div>

    </section>
  )
}

export default Feed
