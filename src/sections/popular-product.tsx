import { PopularProductCard } from '../components'
import { products } from '../constant'

export default function PopularProduct() {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold font-palanquin'>
          Our <span className='text-coral-red'>Popular</span> Product
        </h2>
        <p className='mt-2 lg:max-w-xl font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after selections. Discover a world
          of comfort, design, and value
        </p>
      </div>

      <div className='grid grid-cols-1 mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14'>
        {products.map((product) => (
          <PopularProductCard
            key={product.id}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}
