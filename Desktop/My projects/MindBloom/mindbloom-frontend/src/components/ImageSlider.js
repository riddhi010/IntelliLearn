import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Cursor from "../components/cursor";
const images = [
  "/assets/freepik__retouch__23685.png",
  "/assets/freepik__retouch__2530.png",
  "/assets/2211.q702.033.S.m005.c12.mental health.jpg",
  "/assets/emoji-faces-social-media.jpg",
  "/assets/face-expression-emotional-people-concept.jpg",
];

const ImageSlider = () => {
  return (
    <section className="py-10" style={{ backgroundColor: "rgb(14, 15, 16)" }}>
      <Cursor/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, // 3 seconds per slide
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-w-5xl mx-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/50 rounded-full blur-2xl animate-spin-slow"></div>

    </section>
  );
};

export default ImageSlider;
