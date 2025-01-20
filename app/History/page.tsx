import React from 'react'

import {Navbar } from "@/Components";
import { Hero_Dis} from "@/Constants";
import Link from "next/link";
import Moresec from '@/Components/Moresec';
import Image from 'next/image';
import ArrowIcon from '@/public/Arrow2Icon.svg'



const page = () => {
  return (
    <>
    <div className="History_Background flex w-full bg-black md:h-screen h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
      
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            About us
        </h1>
        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
                    About us / History
        </h1>
        
        
        
      </div>
      <Link href={"#moresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] rounded-xl">
          <Image src={ArrowIcon} alt={'down arrow icon'} width={45} className='rotate-90 pointer ' />
        </button>
        </Link>
    </div>
    <Moresec />
    </>
  )
}

export default page ;