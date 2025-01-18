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
            
        <div className="flex w-64 h-80 bg-gray-300 rounded-3xl flex-col overflow-hidden">
        <div className="flex w-full h-full bg-black">

        </div>
        <div className="flex w-full h-1/2 flex-col justify-evenly items-start p-2">
            <div className="flex w-full h-full flex-col justify-center items-start ">
                
                <h1 className='text-2xl text-center'>
                    Mark Zakery
                </h1>
                
                <p className='text-sm text-center'>
                    Chef
                </p>
                
            </div>
            <div className="flex w-full h-full">
                <div className="flex w-full h-full justify-start items-center">
                    <Image src={Chefhat} alt={'icon '} width={30} className='mr-2' />
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                </div>
                <div className="flex px-3 py-1 bg-black rounded-3xl">
                    <Image src={Arrow} alt={'go arrow'} width={40} className='' />
                </div>
            </div>
            
        </div>
    </div>
        </SwiperSlide>
        
        <SwiperSlide>
            
        <div className="flex w-64 h-80 bg-green-300 rounded-3xl flex-col overflow-hidden">
        <div className="flex w-full h-full bg-black">

        </div>
        <div className="flex w-full h-1/2 flex-col justify-evenly items-start p-2">
            <div className="flex w-full h-full flex-col justify-center items-start ">
                
                <h1 className='text-2xl text-center'>
                    Mark Zakery
                </h1>
                
                <p className='text-sm text-center'>
                    Chef
                </p>
                
            </div>
            <div className="flex w-full h-full">
                <div className="flex w-full h-full justify-start items-center">
                    <Image src={Chefhat} alt={'icon '} width={30} className='mr-2' />
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                </div>
                <div className="flex px-3 py-1 bg-black rounded-3xl">
                    <Image src={Arrow} alt={'go arrow'} width={40} className='' />
                </div>
            </div>
            
        </div>
    </div>
        </SwiperSlide>
        
        <SwiperSlide>
            
        <div className="flex w-64 h-80 bg-red-300 rounded-3xl flex-col overflow-hidden">
        <div className="flex w-full h-full bg-black">

        </div>
        <div className="flex w-full h-1/2 flex-col justify-evenly items-start p-2">
            <div className="flex w-full h-full flex-col justify-center items-start ">
                
                <h1 className='text-2xl text-center'>
                    Mark Zakery
                </h1>
                
                <p className='text-sm text-center'>
                    Chef
                </p>
                
            </div>
            <div className="flex w-full h-full">
                <div className="flex w-full h-full justify-start items-center">
                    <Image src={Chefhat} alt={'icon '} width={30} className='mr-2' />
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                </div>
                <div className="flex px-3 py-1 bg-black rounded-3xl">
                    <Image src={Arrow} alt={'go arrow'} width={40} className='' />
                </div>
            </div>
            
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
            
        <div className="flex w-64 h-80 bg-green-300 rounded-3xl flex-col overflow-hidden">
        <div className="flex w-full h-full bg-black">

        </div>
        <div className="flex w-full h-1/2 flex-col justify-evenly items-start p-2">
            <div className="flex w-full h-full flex-col justify-center items-start ">
                
                <h1 className='text-2xl text-center'>
                    Mark Zakery
                </h1>
                
                <p className='text-sm text-center'>
                    Chef
                </p>
                
            </div>
            <div className="flex w-full h-full">
                <div className="flex w-full h-full justify-start items-center">
                    <Image src={Chefhat} alt={'icon '} width={30} className='mr-2' />
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                    <Image src={Chefhat} alt={'icon '} width={30} className='mx-2'/>
                </div>
                <div className="flex px-3 py-1 bg-black rounded-3xl">
                    <Image src={Arrow} alt={'go arrow'} width={40} className='' />
                </div>
            </div>
            
        </div>
    </div>
        </SwiperSlide>
        
        
        
      </Swiper>
    </div>
    </>
  );
}
export default Cardslide ;
