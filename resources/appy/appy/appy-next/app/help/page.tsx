export const metadata = {
  title: 'Help - Appy',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-help'
import Content from './content'
import RelatedLinks from '@/components/related-links'

export default function Help() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>    
      <Hero />
      <Content />
      <RelatedLinks />
    </>
  )
}
