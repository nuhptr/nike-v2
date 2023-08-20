import {
   CustomerReviews,
   Footer,
   Hero,
   PopularProduct,
   Services,
   SpecialOffers,
   Subscribe,
   SuperQuality,
} from './sections';
import { Nav } from './components';

export default function App() {
   return (
      <main className='relative'>
         <Nav />
         <section className='xl:padding-l wide:padding-r padding-b'>
            <Hero />
         </section>
         <section className='padding'>
            <PopularProduct />
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
         <section className='pb-8 bg-black padding-x padding-t'>
            <Footer />
         </section>
      </main>
   );
}
