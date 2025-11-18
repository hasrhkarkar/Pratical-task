import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import facilitiesData from './facilitiesData.json';
import './Facilities.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Facility {
  id: number;
  name: string;
  image: string;
  position: string;
}

const Facilities: React.FC = () => {
  const facilities: Facility[] = facilitiesData.facilities.items;

  return (
    <section className="facilities-section">
      {/* Decorative Bird */}
      <div className="facilities-bird">
        <img src={facilitiesData.bird.image} alt={facilitiesData.bird.alt} />
      </div>

      {/* Facilities Title */}
      <h2 className="facilities-title">{facilitiesData.facilities.title}</h2>

      {/* Facilities Slider Container */}
      <div className="facilities-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="facilities-swiper"
        >
          {facilities.map((facility) => (
            <SwiperSlide key={facility.id} className="facility-slide">
              <div className="facility-item">
                <div className="facility-image-wrapper">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="facility-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom" aria-label="Previous slide">
          <span>‹</span>
        </button>
        <button className="swiper-button-next-custom" aria-label="Next slide">
          <span>›</span>
        </button>
      </div>
    </section>
  );
};

export default Facilities;
