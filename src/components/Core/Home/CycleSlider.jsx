

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image1 from "../../../assets/Images/biCycle/image1.jpg"
import Image2 from "../../../assets/Images/biCycle/image2.jpg"
import Image3 from "../../../assets/Images/biCycle/image3.jpg"
import Image4 from "../../../assets/Images/biCycle/image4.jpg"
import "./CycleSlider.css"

function CycleSlider() {
  const saleBanner = [
    {
      id: 1,
      image: Image1,
    },
    {
      id: 2,
      image: Image2,
    },
    {
      id: 3,
      image: Image3,
    },
    {
      id: 4,
      image: Image4,
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        className="w-full cycle-swiper"
      >
        {saleBanner.map((banner) => (
          <SwiperSlide key={banner.id} className='p-40'>
            <div className="w-full h-full">
              <img
                src={banner.image}
                alt="sale banner"
                className="h-[90%] w-[90%] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-button-prev absolute left-60 top-1/2 z-[90] transform -translate-y-1/2 text-black text-2xl w-20 h-20 flex justify-center items-center shadow-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
      </div>
      <div className="custom-swiper-button-next absolute right-40  z-[90] top-1/2 transform -translate-y-1/2 text-black text-2xl w-20 h-20 flex justify-center items-center shadow-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </div>

      <div className='w-[20%] absolute right-20 z-[80] top-[380px] flex flex-col items-center justify-center bg-slate-200 text-gray-800 text-center p-4 gap-2'>
        <p className='font-semibold text-5xl'>Rolling Wheel </p> 
      <p className='font-medium'>Your Ultimate Destination for Sport Cycles and Gear</p></div>
    </div>
  );
}

export default CycleSlider;

