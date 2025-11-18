import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperSlider.scss";

function SwiperSlider() {
  const data = [
    {
      title: "The",
      highlight: "Creative",
      subtitle: "Tech Club for Your Kids",
      image: "/images/bannerimg.svg",
    },
    {
      title: "Join Our",
      highlight: "Innovative",
      subtitle: "Tech Club for Your Kids",
      image: "/images/bannerimg.svg",
    },
    {
      title: "Fun &",
      highlight: "Educational",
      subtitle: "Tech Club for Your Kids",
      image: "/images/bannerimg.svg",
    },
  ];

  return (
    <div className="kidsclub-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={false}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="text-box">
                <h2>
                  {item.title} <span>{item.highlight}</span>
                </h2>
                <p>{item.subtitle}</p>
              </div>
              <div className="image-box">
                <img src={item.image} alt={item.highlight} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
