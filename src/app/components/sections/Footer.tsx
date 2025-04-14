import React from 'react'
import FooterList from '../atoms/FooterList'
import { pages, socialLinks, contactLinks } from '@/app/utils/utils'
import Logo from '../atoms/Logo'
const Footer = () => {
  return (
    <footer className='bg-background py-4 px-4 flex justify-between'>  
    <div className='footer-list'>
        <Logo />
        <h2 className='text-primary font-bold'>Toge</h2>
    </div>
    <FooterList items={pages} title='Pages' />
    <FooterList items={socialLinks} title='Socials' />
    <FooterList items={contactLinks} title='Contact' />
    </footer>
  )
}

export default Footer