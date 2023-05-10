export const metadata = {
  title: 'Testimonials - Appy',
  description: 'Page description',
}

import Hero from '@/components/hero-testimonials'
import Clients from '@/components/clients'
import Video from '@/components/testimonials-video'
import Carousel from '@/components/testimonials-carousel'
import Circles from '@/components/testimonials-circles'
import Cta from '@/components/cta'

export default function Testimonials() {
  return (
    <>
      <Hero />
      <Clients />
      <Video />
      <Carousel />
      <Circles />
      <Cta />
    </>
  )
}