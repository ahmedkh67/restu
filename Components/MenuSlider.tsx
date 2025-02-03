"use client"

import React from 'react'

import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import SwitchIcon from '@/public/SwitchArrowIcon.svg'

import Img1 from "@/public/Foodimg.jpg"; 
import MSliderComponent from './MSliderComponent';

import { useState } from 'react';
import { Mslider } from '@/Constants';

const MenuSlider = () => {

    const [Type , setType] = useState(false)
    const togglepopular= () => {
      setType(!Type)
      
    }

  return ( 
    <>
    <div className="flex w-full justify-center pt-4 flex-col items-center bg-black">
      <div className="flex w-full justify-between items-center ">
        <h1 className='md:ml-60 ml-4 my-4 md:text-3xl text-xl text-white'>
          take a look?
        </h1>
      <button className={` bg-slate-000 text-white md:text-2xl text-2xl px-4 py-1 flex border-2 border-white
        md:mx-60 mx-6 my-4 justify-between items-center rounded-lg ${Type? 'animate' : 'animatte'}  *:`} onClick={togglepopular} >
        { Type ? "Rated" : "Popular"} <Image src={SwitchIcon}  alt={'switch arrow icon '} width={25} className='pointer mx-2'/>
        </button >   
        
      </div>
         

        <div className="flex md:w-full w-full h-50 md:mx-0 mx-0 rounded- justify-center items-center overflow-hidden bg-black">
        

        
        <Swiper
        // install Swiper modules
        
        modules={[Autoplay, Pagination,Scrollbar]}
        pagination={true} 
        slidesPerView={2}
        breakpoints={
          {
            800: {
              slidesPerView: 6
            }
          }
        }
        
        scrollbar
        loop={true}
        autoplay={{delay: 1700,
          disableOnInteraction: false}}
        spaceBetween={0} 
        
        className="text-white flex h-40 w-full cursor-pointer" >
        
        {Type ? Mslider.rated.map((item) => (
          <SwiperSlide className='animate2'>
            <MSliderComponent Src={item.src} />
          </SwiperSlide>
        )) :
        Mslider.popular.map((item) => (
          <SwiperSlide className='animatte2'>
            <MSliderComponent Src={item.src} />
          </SwiperSlide>
        )) }
        
                 
        </Swiper>
        </div>
    </div>
    </>
  )
}

export default MenuSlider ;