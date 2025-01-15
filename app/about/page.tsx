import React from 'react'

import {Navbar } from "@/Components";
import { Hero_Dis, Hero_Button } from "@/Constants";
import Link from "next/link";
import Moresec from '@/Components/Moresec';



const page = () => {
  return (
    <>
    <div className="Hero_Background flex w-full bg-black md:h-screen h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            About us
        </h1>
        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6">
            {Hero_Dis}
        </h1>
        
        
         
      </div>
      <Link href={"#moresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px]">
            {Hero_Button}
        </button>
        </Link>
    </div>
    <Moresec />
    </>
  )
}

export default page ;