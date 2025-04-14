'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { pages } from '@/app/utils/utils'
import Logo from '../atoms/Logo'

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background flex ${scrollY > 0 ? 'flex-row justify-between' : 'flex-col'} gap-4 items-center py-4 px-5
    transition-all duration-300
    `}>

      <Logo />

      <nav className='flex gap-8 items-center'>
        {pages.map((page) => (
          <Link key={page.href} href={page.href} className='text-xs hover:text-accent transition-colors duration-300 font-medium'>
            {page.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header