
import Link from 'next/link'
import React from 'react'

const FooterList = ({items, title}:{items:Array<{name:string, href:string}>, title:string}) => {

  return (
    <div className='footer-list'>
        <h2 className='!font-inter font-medium text-sm text-primary'>{title}</h2>

        <ul className='flex flex-col gap-4'>
            {items.map((item) => (
                <li key={item.name} className='text-xs'>
                    <Link href={item.href}>{item.name}</Link>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default FooterList