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
  className?: string;
};

export default function Carousel(props: Props) {
  return (
    <section className={`shadow-xl rounded-xl ${props.className ?? ""}`}>
      {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
      {/* * Custom styles in src/css/additional-styles/theme.scss */}
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
        speed={1000}
        grabCursor={true}
        effect="coverflow"
      >
        {props.elements.map(({ image }) => (
          <SwiperSlide>
            <Image
              className="transition-opacity duration-300 rounded-xl"
              src={image}
              alt="Carousel item 01"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
