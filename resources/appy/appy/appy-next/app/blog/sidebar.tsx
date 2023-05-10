export default function Sidebar() {
  return (
    <aside className="relative mt-12 lg:mt-0 lg:w-64 lg:ml-16 lg:shrink-0" data-aos="fade-down" data-aos-delay="400">

      {/* Popular posts */}
      <div className="mb-8">
        <h4 className="h4 font-red-hat-display mb-5">Popular on Simple</h4>
        <ul className="-my-3">
          <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
            <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 shrink-0 mt-1">01</div>
            <article>
              <a className="hover:underline" href="/#0">
                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                  How to get creative using geometric patterns
                </h3>
              </a>
              <div className="text-sm text-gray-500">
                By <a className="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Mary Champ</a> · <span className="text-gray-500">Oct 22, 2020</span>
              </div>
            </article>
          </li>
          <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
            <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 shrink-0 mt-1">02</div>
            <article>
              <a className="hover:underline" href="/#0">
                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                  Create your branding strategy in 4 simple steps
                </h3>
              </a>
              <div className="text-sm text-gray-500">
                By <a className="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Lisa Allison</a> · <span className="text-gray-500">Oct 17, 2020</span>
              </div>
            </article>
          </li>
          <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
            <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 shrink-0 mt-1">03</div>
            <article>
              <a className="hover:underline" href="/#0">
                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                  Don’t miss Appy’s exclusive workshop with our CEO
                </h3>
              </a>
              <div className="text-sm text-gray-500">
                By <a className="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Lisa Allison</a> · <span className="text-gray-500">Oct 2, 2020</span>
              </div>
            </article>
          </li>
          <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
            <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 shrink-0 mt-1">04</div>
            <article>
              <a className="hover:underline" href="/#0">
                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                  How to optimize your website to convert more leads
                </h3>
              </a>
              <div className="text-sm text-gray-500">
                By <a className="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Greg Gilev</a> · <span className="text-gray-500">Sep 24, 2020</span>
              </div>
            </article>
          </li>
          <li className="flex py-3 border-b border-gray-200 dark:border-gray-800">
            <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 shrink-0 mt-1">05</div>
            <article>
              <a className="hover:underline" href="/#0">
                <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                  What to do if your product idea is stolen
                </h3>
              </a>
              <div className="text-sm text-gray-500">
                By <a className="font-medium text-gray-800 dark:text-gray-400 hover:underline" href="#0">Yuri Lapko</a> · <span className="text-gray-500">Sep 22, 2020</span>
              </div>
            </article>
          </li>
        </ul>
      </div>

    </aside>
  )
}
