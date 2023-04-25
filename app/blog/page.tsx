import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import RelatedPosts from '@/components/related-posts-01'
import PostItem from '@/components/post-item'
import Sidebar from './sidebar'

export const metadata = {
  title: 'Blog - Appy',
  description: 'Page description',
}

export default function Blog() {

  // Sort posts by date
  allPosts.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })  

  const featuredPost = allPosts[0]
  const posts = allPosts.slice(1)

  return (
    <>
      {/* Featured post */}
      <section className="relative">
        {/* Background image */}
        {featuredPost.image &&
          <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
            <Image className="absolute inset-0 w-full h-full object-cover opacity-25" src={featuredPost.image} width={1440} height={577} priority alt={featuredPost.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
          </div>
        }
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            {/* Featured article */}
            <div className="max-w-3xl" data-aos="fade-down">
              <article>
                <header>
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h1 className="h1 font-red-hat-display mb-4">{featuredPost.title}</h1>
                    </Link>
                    <p className="text-xl text-gray-600 dark:text-gray-400">{featuredPost.summary}</p>
                  </div>
                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-5">
                    {/* Author meta */}
                    <div className="flex items-center justify-center">
                      <a href="#0">
                        <Image className="rounded-full shrink-0 mr-3" src={featuredPost.authorImg} width={32} height={32} alt={featuredPost.author} />
                      </a>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">By </span>
                        <a className="font-medium text-gray-800 dark:text-gray-300 hover:underline" href="#0">{featuredPost.author}</a>
                        <span className="text-gray-600 dark:text-gray-400"> · <PostDate dateString={featuredPost.publishedAt} /></span>
                      </div>
                    </div>
                  </div>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts />

      {/* Articles list */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="lg:flex lg:justify-between">

              {/* Main content */}
              <div className="lg:grow" data-aos="fade-down" data-aos-delay="200">

                {/* Section title */}
                <h4 className="h3 font-red-hat-display mb-8">Latest</h4>

                {/* Articles container */}
                <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">
                  {posts.map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>

                {/* Load more button */}
                <div className="flex justify-center mt-12 md:mt-16">
                  <a className="btn-sm text-gray-300 hover:text-gray-100 bg-gray-800 flex items-center" href="#0">
                    <span>See previous articles</span>
                    <svg className="w-4 h-4 shrink-0 ml-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-current text-gray-500" d="M14.7 9.3l-1.4-1.4L9 12.2V0H7v12.2L2.7 7.9 1.3 9.3 8 16z" />
                    </svg>
                  </a>
                </div>

              </div>

              <Sidebar />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}