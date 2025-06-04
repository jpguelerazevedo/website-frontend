import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CardCarousel.css'; // Assuming you have a CSS file for styling the carousel

const CardCarousel = ({ cards }) => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'3.1'}
            loop={true}
            speed={1000}
            coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 120,
                modifier: 2.5,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[EffectCoverflow, Pagination, Navigation]}
            style={{ width: '100%', paddingBottom: 60 }}
            className="card-carousel-swiper"
        >
            {cards.map((card, idx) => (
                <SwiperSlide key={idx} style={{ width: 400, maxWidth: '90vw', display: 'flex', justifyContent: 'center' }}>
                    {card}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
