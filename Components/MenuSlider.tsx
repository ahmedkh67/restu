"use client"

import React from 'react'

import {Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

import Img1 from "@/public/Foodimg.jpg"

const MenuSlider = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center pb-10">
       <div className="flex w-9/10 h-32 md:mx-60 mx-6 bg-red-400 rounded-2xl justify-center items-center overflow-hidden ">
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination,Scrollbar]}
        slidesPerView={2}
        navigation
        scrollbar
        loop={true}
        autoplay={true}
        spaceBetween={1}
        className="text-white" >
 
          <SwiperSlide>
            <div className="flex w-full h-full">
              <Image src={Img1} alt={'iuy'} width={190} height={190} />
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-full">
              <Image src={Img1} alt={'iuy'} width={190} height={190} />
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-full">
              <Image src={Img1} alt={'iuy'} width={190} height={190} />
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-full">
              <Image src={Img1} alt={'iuy'} width={190} height={128} />
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-full">
              <Image src={Img1} alt={'iuy'} width={190} height={128} />
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex w-full h-full">
              <Image src={Img1} alt={'iuy'} width={190} height={128} />
            
            </div>
          </SwiperSlide>
          
          
        </Swiper>
        </div>
    </div>
    </>
  )
}

export default MenuSlider ;