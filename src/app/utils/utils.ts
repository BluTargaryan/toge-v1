export const pages: Array<{name: string, href: string}> = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
]

export const socialLinks: Array<{name: string, href: string}> = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/toge.co',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/toge.co',
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com/toge.co',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/toge.co',
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/toge.co',
  },
] 

export const contactLinks: Array<{name: string, href: string}> = [
  {
    name: 'Email',
    href: 'mailto:contact@toge.co',
  },
  {
    name: 'Phone',
    href: 'tel:+447506699090',
  },
]

export const introVideoURL: string = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

export interface Shop {
  id: string;
  title: string;
  url: string;
  description: string;
  locationLong: number;
  locationLat: number;
  locationTitle: string;
  contacts: any[];
  ocTimes: any[];
}

export interface Ingredient {
  id: string;
  title: string;
  shops: string[];
}

