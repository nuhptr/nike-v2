import facebook from '/icons/facebook.svg'
import instagram from '/icons/instagram.svg'
import twitter from '/icons/twitter.svg'
import support from '/icons/support.svg'
import shieldTick from '/icons/shield-tick.svg'
import truckFast from '/icons/truck-fast.svg'

import bigShoe1 from '/images/big-shoe1.png'
import bigShoe2 from '/images/big-shoe2.png'
import bigShoe3 from '/images/big-shoe3.png'
import shoe4 from '/images/shoe4.svg'
import shoe5 from '/images/shoe5.svg'
import shoe6 from '/images/shoe6.svg'
import shoe7 from '/images/shoe7.svg'
import customer1 from '/images/customer1.jpeg'
import customer2 from '/images/customer2.svg'
import thumbnailShoe1 from '/images/thumbnail-shoe1.svg'
import thumbnailShoe2 from '/images/thumbnail-shoe2.svg'
import thumbnailShoe3 from '/images/thumbnail-shoe3.svg'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
]

export const shoes = [
  { id: 1, thumbnail: thumbnailShoe1, bigShoe: bigShoe1 },
  { id: 2, thumbnail: thumbnailShoe2, bigShoe: bigShoe2 },
  { id: 3, thumbnail: thumbnailShoe3, bigShoe: bigShoe3 },
]

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
]

export const products = [
  { id: 1, imgURL: shoe4, name: 'Nike Air Jordan-01', price: '$200.20' },
  { id: 2, imgURL: shoe5, name: 'Nike Air Jordan-10', price: '$210.20' },
  { id: 3, imgURL: shoe6, name: 'Nike Air Jordan-100', price: '$220.20' },
  { id: 4, imgURL: shoe7, name: 'Nike Air Jordan-001', price: '$230.20' },
]

export const services = [
  {
    id: 1,
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    id: 2,
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext: 'Experience worry-free transactions with our secure payment options.',
  },
  {
    id: 3,
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
]

export const reviews = [
  {
    id: 1,
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    id: 2,
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
]

export const footerLinks = [
  {
    id: 1,
    title: 'Products',
    links: [
      { id: 1, name: 'Air Force 1', link: '/' },
      { id: 2, name: 'Air Max 1', link: '/' },
      { id: 3, name: 'Air Jordan 1', link: '/' },
      { id: 4, name: 'Air Force 2', link: '/' },
      { id: 5, name: 'Nike Waffle Racer', link: '/' },
      { id: 6, name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    id: 2,
    title: 'Help',
    links: [
      { id: 1, name: 'About us', link: '/' },
      { id: 2, name: 'FAQs', link: '/' },
      { id: 3, name: 'How it works', link: '/' },
      { id: 4, name: 'Privacy policy', link: '/' },
      { id: 5, name: 'Payment policy', link: '/' },
    ],
  },
  {
    id: 3,
    title: 'Get in touch',
    links: [
      { id: 1, name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { id: 2, name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
]

export const socialMedia = [
  { id: 1, src: facebook, alt: 'facebook logo' },
  { id: 2, src: twitter, alt: 'twitter logo' },
  { id: 3, src: instagram, alt: 'instagram logo' },
]
