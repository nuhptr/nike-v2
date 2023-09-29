import arrowRight from '/public/icons/arrow-right.svg'
import offer from '/public/images/offer.svg'

import { Button } from '../components'

export default function SpecialOffers() {
  return (
    <section className='flex items-center justify-between gap-10 max-container max-xl:flex-col-reverse'>
      <div className='flex-1'>
        <img src={offer} alt='Offer images' width={773} height={687} className='object-contain' />
      </div>

      <div className='flex flex-col flex-1'>
        <h2 className='mt-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From
          premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className='flex flex-wrap gap-4 mt-11'>
          <Button label='View details' iconUrl={arrowRight} />
          <Button
            label='Learn More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}
