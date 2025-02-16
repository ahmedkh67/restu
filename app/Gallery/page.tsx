import { Commentssec, Distance2, Footer, GalleryButton, Mapsec, Menusec, MenuSlider, Navbar } from '@/Components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ArrowIcon from '@/public/Arrow2Icon.svg'
import Moresec from '@/Components/Moresec'

const Gallery = () => {
  return (
    <>
    <div className="History_Background flex w-full bg-black md:h-screen flex-col justify-between items-center overflow-hidden pb-20">
    <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start px-[10%]">
      
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            Our Gallery
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
    <GalleryButton title={'Our Menu'} link={'/Menu'} bio={'Discover our Uniqe Dishes !'} />
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
      <div className="flex flex-col md:flex-row w-full my-10 md:p-6 p-2 pb-6 bg-white justify-center overflow-hidden items-center">
        <button className='bg-black text-white w-1/2 py-2 pointer rounded-xl'>
        <p className='text-center md:text-6xl text-3xl font-bold pointer '>
            Show more        
          </p>
        </button>
      </div>
      
    </div>
    <Moresec />
    <Commentssec />
    <Menusec />
    <Distance2 />
    <Mapsec />
    <Footer />
    </>
  )
}

export default Gallery