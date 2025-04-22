import Link from 'next/link'
import React from 'react'

const Day = () => {
  return (
    <Link href={`/`} className='uppercase'>
        <b>Mondays</b>: 10:00 - 18:00
    </Link>
  )
}

export default Day