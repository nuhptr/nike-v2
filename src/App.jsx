import {
   CustomerReviews,
   Footer,
   Hero,
   PopularProducts,
   Services,
   SpecialOffers,
   Subscribe,
   SuperQuality,
} from './sections';

export default function App() {
   return (
      <main className='relative'>
         Nav
         <section className='xl:padding-1 wide:padding-r padding-b'>
            <Hero />
         </section>
         <section className='padding'>
            <PopularProducts />
         </section>
         <section className='padding'>
            <SuperQuality />
         </section>
         <section className='py-10 padding-x'>
            <Services />
         </section>
         <section className='padding'>
            <SpecialOffers />
         </section>
         <section className='padding bg-pale-blue'>
            <CustomerReviews />
         </section>
         <section className='w-full py-16 padding-x sm:py-32'>
            <Subscribe />
         </section>
         <section className='bg-black padding-x padding-t pb-8'>
            <Footer />
         </section>
      </main>
   );
}
