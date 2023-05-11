export default function FeaturesHead() {
  return (
    <section className="relative mb-10 md:mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="w-[75%] mx-auto text-center">
            <h1
              className="h1 font-red-hat-display font-black"
              data-aos="fade-down"
            >
              Explore Gaudi features
            </h1>

            <p
              className="text-xl text-gray-600 dark:text-gray-400"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Explore Gaudi features and filter them by category. Track feature
              completion status. Learn more about each feature. Suggest own
              ideas.
            </p>
          </div>
        </div>
      </div>

      {/* Background gradient (light version only) */}
      <div
        className="absolute inset-0 -z-[2] bg-gradient-to-t from-gray-100 to-white pointer-events-none dark:hidden"
        aria-hidden="true"
      ></div>
    </section>
  );
}
