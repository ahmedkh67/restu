import { Distance2, MenuSlider, Navbar } from '@/Components'
import Moresec from '@/Components/Moresec'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ArrowIcon from '@/public/Arrow2Icon.svg'

const Gallery = () => {
  return (
    <>
    <div className="History_Background flex w-full bg-black md:h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
      
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            Gallery
        </h1>
        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
                    About us / Gallery
        </h1>
        
        
      </div>
      <Link href={"#historymoresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] rounded-xl">
          <Image src={ArrowIcon} alt={'down arrow icon'} width={45} className='rotate-90 pointer ' />
        </button>
        </Link>
    </div>

    <MenuSlider />
    <div className="flex w-full md:pt-10 pt-0 justify-center items-center flex-col ">
        <div className="flex w-full justify-start flex-col items-start  md:pl-25 pl-6 pb-10">
          
          <h1 className='md:text-4xl text-2xl text-start font-bold mt-12'>
              Get to know our History
          </h1>
          <h1 className='md:text-3xl text-xl text-start w-3/4 md:w-1/2'>
          a honored resturant that bulit on passion , love , and consisty , 
          </h1>
        </div>
    
      <div className="flex py-4 w-full justify-center items-start flex-wrap ">
        <div className="flex md:w-96 h-96 w-full Hero_Background m-1 ">

        </div>
        <div className="flex md:w-96 h-96 w-full Team_Background m-1 ">

        </div>
        
        <div className="flex md:w-96 h-96 w-full Hero_Background m-1 ">

        </div>
        <div className="flex md:w-96 h-96 w-full Team_Background m-1 ">

        </div>
        
        <div className="flex md:w-96 h-96 w-full Hero_Background m-1 ">

        </div>
        <div className="flex md:w-96 h-96 w-full Team_Background m-1 ">

        </div>
        
        <div className="flex md:w-96 h-96 w-full Hero_Background m-1 ">

        </div>
        <div className="flex md:w-96 h-96 w-full Team_Background m-1 ">

        </div>
        
        <div className="flex md:w-96 h-96 w-full Hero_Background m-1 ">

        </div>
        <div className="flex md:w-96 h-96 w-full Team_Background m-1 ">

        </div>
        
        
        
        
      
      </div>
      <button className='Button2 px-4 font-bold text-3xl my-7 '>
        Show more
      </button>
    </div>
    </>
  )
}

export default Gallery