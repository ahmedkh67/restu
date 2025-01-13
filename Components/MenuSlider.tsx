"use client"

import React from 'react'

import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

import Img1 from "@/public/Foodimg.jpg"
import MSliderComponent from './MSliderComponent';

const MenuSlider = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center pb-10">
       <div className="flex w-[900px] h-28 md:mx-60 mx-6 rounded-2xl justify-center items-center overflow-hidden Swiper_Home z-10  border-double">
        <Swiper
        // install Swiper modules
        
        modules={[Autoplay, Pagination,Scrollbar]}
        pagination={true} 
        slidesPerView={3}
        breakpoints={
          {
            800: {
              slidesPerView: 6
            }
          }
        }
        
        scrollbar
        loop={true}
        autoplay={{delay: 2500,
          disableOnInteraction: false}}
        spaceBetween={0} 
        
        className="text-white flex h-28 w-full cursor-pointer" >
        
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          <SwiperSlide>
            <MSliderComponent />

          </SwiperSlide>

          
          
        </Swiper>
        </div>
    </div>
    </>
  )
}

export default MenuSlider ;