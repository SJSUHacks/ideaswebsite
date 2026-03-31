import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageCarousel.css';

function ImageCarousel({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        slidesPerView={1}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img.src} alt={img.alt} className="carousel-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
