import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constant';

export default function Footer() {
   return (
      <footer className='max-container'>
         <div className='flex flex-wrap items-start justify-between gap-20 max-lg:flex-col'>
            <div className='flex flex-col items-start'>
               <a href='/'>
                  <img
                     src={footerLogo}
                     alt='Logo Nike'
                     width={150}
                     height={46}
                  />
               </a>
               <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                  Get shoes ready for the new term at your nearest nike store.
                  Find your perfect Size In Store. Get Rewards
               </p>
               <div className='flex items-center gap-5 mt-8'>
                  {socialMedia.map((social) => (
                     <div
                        key={social.id}
                        className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                        <img
                           src={social.src}
                           alt={social.alt}
                           width={24}
                           height={24}
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
               {footerLinks.map((link) => (
                  <div key={link.id}>
                     <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                        {link.title}
                     </h4>
                     <ul className=''>
                        {link.links.map((item) => (
                           <li
                              key={item.id}
                              className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'>
                              <a href=''>{item.name}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
            <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
               <img
                  src={copyrightSign}
                  alt='Copyright icon'
                  width={20}
                  height={20}
                  className='rounded-full m-0'
               />
               <p>Copyright. All rights reserved.</p>
            </div>
            <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
         </div>
      </footer>
   );
}
