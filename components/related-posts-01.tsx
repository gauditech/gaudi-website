import Image from 'next/image'
import RelatedImage03 from '@/public/images/related-post-03.jpg'
import RelatedImage04 from '@/public/images/related-post-04.jpg'
import RelatedImage05 from '@/public/images/related-post-05.jpg'
import RelatedImage06 from '@/public/images/related-post-06.jpg'

export default function RelatedPosts01() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-16">

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos-id-featposts>

            {/* 1st article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="100">
              <figure>
                <Image className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={RelatedImage03} alt="Related post 03" />
                <div className="absolute inset-0 bg-teal-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Creating events in the pandemic
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">By Josh Wang · Nov 16, 2020</div>
                </footer>
              </div>
            </article>

            {/* 2nd article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="200">
              <figure>
                <Image className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={RelatedImage04} alt="Related post 04" />
                <div className="absolute inset-0 bg-purple-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      5 Ways to grow your personal network
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">By Yuri Lapko · Nov 14, 2020</div>
                </footer>
              </div>
            </article>

            {/* 3rd article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="300">
              <figure>
                <Image className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={RelatedImage05} alt="Related post 05" />
                <div className="absolute inset-0 bg-indigo-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      How to fix my website myself
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">By Josh Wang · Nov 10, 2020</div>
                </footer>
              </div>
            </article>

            {/* 4th article */}
            <article className="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="400">
              <figure>
                <Image className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" src={RelatedImage06} alt="Related post 06" />
                <div className="absolute inset-0 bg-pink-500 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div className="relative flex flex-col h-full text-white">
                <header className="grow">
                  <a className="hover:underline" href="#0">
                    <h3 className="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      How COVID-19 redefined the entrepreneur
                    </h3>
                  </a>
                </header>
                <footer>
                  <div className="text-sm opacity-80">By Mary Champ · Nov 2, 2020</div>
                </footer>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}