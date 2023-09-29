import { ServiceCard } from '../components'
import { services } from '../constant'

export default function Services() {
  return (
    <section className='flex flex-wrap justify-center max-container gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  )
}
