"use client"

import { Commentssec, MenuSlider, Navbar,Distance2, GalleryButton, MenusecsButtons, Lunchmenu, Dinnermenu, Sweetsmenu, OfferCard } from '@/Components'
import React from 'react'
import { Gallerybuttontitle, Menuhero, offerCard } from '@/Constants'
import Moresec from '@/Components/Moresec'
import HomeIcon from '@/public/homeIcon.svg'
import AboutIcon from '@/public/aboutIcon.svg'
import MenuIconn from '@/public/menu3Icon.svg'
import ReserveIcon from '@/public/write-svgrepo-com (3).svg'
import Image from "next/image";
import Link from 'next/link'



const page = () => {
  return (
    <>
    <div className="Hero_Background flex w-full bg-black flex-col justify-between items-center overflow-hidden pb-20">
      <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start md:px-[10%]">
        
        <h1 className="md:text-[170px] text-[60px] font-bold text-white px-[10%]">
            {Menuhero} 
            
        </h1>
        <div className="flex w-full ">
          <div className="flex items-end md:justify-between justify-center w-full">

              <OfferCard title={offerCard.title} bio={offerCard.bio}
              btntitle={offerCard.btntitle} />

              <div className="md:flex hidden ">
              <OfferCard title={offerCard.title} bio={offerCard.bio}
              btntitle={offerCard.btntitle} />
              </div>
              <div className="md:flex hidden ">
              <OfferCard title={offerCard.title} bio={offerCard.bio}
              btntitle={offerCard.btntitle} />
              </div>
                          
        </div>
      </div>

        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
            
        </h1>
        
      </div>
    </div>


    <section id='menumoresec' className='w-full' >
      <MenuSlider />
      <GalleryButton title={Gallerybuttontitle} link={'/Gallery'} bio={'Check our photos taken from the kitchen !'} />
      
    </section>
    

    <div className="flex w-full justify-center flex-col items-center">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
        Get to know our History
      </h1>

      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    
      <MenusecsButtons />
    </div>

    
      
    
    
    <Lunchmenu />
    <MenuSlider />
    <Distance2 />
    
    <Dinnermenu />

    <Sweetsmenu />
    <Moresec />
    <div className="flex flex-col md:flex-row justify-evenly py-8 bg-gray-200 items-start pl-6 md:pl-0">
            
            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />

            <OfferCard title={offerCard.title} bio={offerCard.bio}
            btntitle={offerCard.btntitle} />
        </div>
    <Commentssec />
    <div className="flex md:hidden bg-white w-full py-6 px-6 absolute left-0 bottom-0 z-10 justify-evenly items-center fixed ">
            <Link href={'././'}>
            <div className="flex flex-col justify-between items-center">
              <Image src={HomeIcon} alt={"home icon "} width={30} height={30} />
              <p className='text-[10px]'>Home</p>
            </div>
                
            </Link>
            
            <Link href={'/History'}>
            <div className="flex flex-col justify-between items-center">
              <Image src={AboutIcon} alt={"home icon "} width={35} height={30} />
              <p className='text-[10px]'>About</p>
            </div>
                
            </Link>
            <Link href={'/Menu'}>
              <div className="flex flex-col justify-between items-center">
                <Image src={MenuIconn} alt={"home icon "} width={35} height={30} />
                <p className='text-[10px]'>Menu</p>
              </div>
              
            </Link>
            <Link href={'/Reservation'}>
              <div className="flex flex-col justify-between items-center">
                <Image src={ReserveIcon} alt={"home icon "} width={35} height={30} />                
                <p className='text-[10px]'>Reservation</p>
              </div>
               
            </Link>

        </div>
  
  </>
  )
}

export default page