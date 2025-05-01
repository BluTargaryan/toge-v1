import Link from 'next/link'
import React from 'react'

const Day = ({dayStatement, times}: {dayStatement: string, times: string}) => {
  return (
    <Link href={`/`} className='uppercase'>
        <b>{dayStatement}</b>: {times}
    </Link>
  )
}

export default Day