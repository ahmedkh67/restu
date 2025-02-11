import React from 'react'

import {Commentssec, Distance2, Distancesec, Footer, Historyline, Mapsec, Menusec, Navbar, Teamsec } from "@/Components";
import Link from "next/link";
import Image from 'next/image';
import ArrowIcon from '@/public/Arrow2Icon.svg'
import Moresec from '@/Components/Moresec';



const page = () => {
  return (
    <>
    <div className="History_Background flex w-full bg-black md:h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
      
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            About us
        </h1>
        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
                    About us / History
        </h1>
        
        
        
      </div>
      <Link href={"#historymoresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] rounded-xl">
          <Image src={ArrowIcon} alt={'down arrow icon'} width={45} className='rotate-90 pointer ' />
        </button>
        </Link>
    </div>

    <Moresec />
    
    <div className="flex w-full justify-center flex-col items-center">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
        Get to know our History
      </h1>
      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    </div>
      <section id='historymoresec'>

      </section>
      <Historyline />
      <Teamsec />
      <Distancesec />
      <Menusec />
      <Distance2 />
      <Commentssec />
      <Mapsec />
      <Footer />
    
    
    </>
  )
}

export default page ;