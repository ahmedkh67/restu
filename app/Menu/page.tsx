"use client"

import { Menubox1, MenuSlider, Navbar } from '@/Components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ArrowIcon from '@/public/Arrow2Icon.svg'

const page = () => {
  return (<>
    <div className="Team_Background flex w-full bg-black md:h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
        
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            Our menu 
            
        </h1>
        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
                    
        </h1>
        
        
        
      </div>
      <Link href={"#moresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] rounded-xl">
          <Image src={ArrowIcon} alt={'down arrow icon'} width={45} className='rotate-90 pointer ' />
        </button>
        </Link>
    </div>

    <MenuSlider />

    <div className="flex w-full justify-center flex-col items-center">
      
    <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
      Get to know our History
    </h1>
    <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
      a honored resturant that bulit on passion , love , and consisty , 
    </h1>
  </div>
  <div className="flex w-full p-10 h-full flex-col justify-evenly bg-white mt-10">
  <h1 className="Opacity_animate text-4xl md:text-6xl text-center m-8 ">
    Dina Lunch Menu
  </h1>
<div className="flex w-full justify-center items-center h-full md:flex-row flex-col">
  <Menubox1 />
  <Menubox1 />
  
  
</div>

</div>

    
    </>
  )
}

export default page