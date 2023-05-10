"use client";

import Image, { StaticImageData } from "next/image";

// Import Swiper
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

type Props = {
  elements: { image: StaticImageData }[];
};

export default function Carousel(props: Props) {
  return (
    <section className="border-t border-transparent dark:border-gray-800">
      {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
      {/* * Custom styles in src/css/additional-styles/theme.scss */}
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
        speed={1000}
        grabCursor={true}
        spaceBetween={24}
        effect="coverflow"
      >
        {props.elements.map(({ image }) => (
          <SwiperSlide>
            <Image
              className="transition-opacity opacity-70 duration-300 rounded-2xl"
              src={image}
              width={540}
              height={460}
              alt="Carousel item 01"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
