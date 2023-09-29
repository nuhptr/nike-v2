import { ReviewCard } from '../components'

import { reviews } from '../constant'

export default function CustomerReview() {
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-bold text-center font-palanquin'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>
      <p className='max-w-lg m-auto mt-4 text-center info-text'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with
        us.
      </p>

      <div className='flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            customerName={review.customerName}
            feedback={review.feedback}
            imgURL={review.imgURL}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  )
}
