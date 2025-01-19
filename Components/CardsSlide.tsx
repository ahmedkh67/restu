"use client"

import React from 'react'
import TeamCard from './TeamCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import Chefhat from '@/public/Chef hat Icon.svg'
import Arrow from "@/public/Arrow2Icon.svg"
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { Autoplay , EffectCards , Pagination , Navigation } from 'swiper/modules';

 function Cardslide() {
  return (
    <>
    <div className="flex w-64 h-80 rounded-3xl flex-col overflow-hidden mb-6">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards , Autoplay , Pagination , Navigation]}
        loop={true}
        autoplay={{delay: 2500,
            disableOnInteraction: false}}
        className="mySwiper w-68 "
      >
        <SwiperSlide>
            <TeamCard Name={'Mark Akery'} Role={'Owner'} />
        </SwiperSlide>
        <SwiperSlide>
            <TeamCard Name={'Fina Han'} Role={'Chef'} />
        </SwiperSlide>
        <SwiperSlide>
            <TeamCard Name={'Suzan Ali'} Role={'Chef'} />
        </SwiperSlide>
        <SwiperSlide>
            <TeamCard Name={'Chin Duong'} Role={'Market boss'} />
        </SwiperSlide>

        
        
      </Swiper>
    </div>
    </>
  );
}
export default Cardslide ;
