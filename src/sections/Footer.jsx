import { footerLogo } from '../assets/images';

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
            </div>
         </div>
      </footer>
   );
}
