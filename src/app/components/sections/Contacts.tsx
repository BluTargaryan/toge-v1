import React from 'react'
import Contact from '../atoms/Contact'
const Contacts = ({contacts}: {contacts: any[]}) => {
  return (
    <div className='flex flex-col gap-6'>
        <h2 className='text-xl !font-inter font-semibold text-primary uppercase xl:text-2xl'>
            Contact Us
        </h2>
        <div className='flex flex-col gap-4'>
            {contacts.map((contact, index) => (
                <Contact key={index} platform={contact.platform} address={contact.address} />
            ))}
        </div>
    </div>
  )
}

export default Contacts