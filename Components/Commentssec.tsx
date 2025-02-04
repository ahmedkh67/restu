"use client"

import React from 'react'
import { CommentBox } from '.'

import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Commentsecc } from '@/Constants';

const Commentssec = () => {
  return (
    <div className="flex w-full py-20 justify-center items-center History_Background md:px-30 px-6">
        
        <Swiper
        modules={[Autoplay, Pagination , Scrollbar]}
        pagination={true}
        slidesPerView={1}
        breakpoints={
            {
              800: {
                slidesPerView: 3
              }
            }
          }
          
        scrollbar
        loop={true}
        autoplay={{delay: 2500 ,
            disableOnInteraction: false
        }}
        spaceBetween={100}
         className='flex justify-center items-center ' >

          {Commentsecc.map((item) => (
            <SwiperSlide className='flex justify-center items-center'>
            <CommentBox name={item.name} comment={item.comment}
             src={item.src} rate={item.rate} />
            </SwiperSlide>
          ))}
            

            


        </Swiper>
        
        
        
    </div>
  )
}

export default Commentssec