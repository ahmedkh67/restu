"use client"

import { Navbar,Reservationbox } from '@/Components'
import React from 'react'
import { motion } from 'framer-motion'
import HomeIcon from '@/public/homeIcon.svg'
import AboutIcon from '@/public/aboutIcon.svg'
import MenuIconn from '@/public/menu3Icon.svg'
import ReserveIcon from '@/public/write-svgrepo-com (3).svg'
import Image from "next/image";
import Link from 'next/link'



const page = () => {
  return (
    <>
    <div className="Reservation_Background flex w-full bg-black md:h-full flex-col justify-between items-center overflow-hidden pb-25">
      
      <Navbar  />

      <motion.div className='w-full flex justify-center'
        initial={{scale: 0}}
        whileInView={{scale: 1}}>
          <Reservationbox />
      </motion.div>
      
 
    </div>
    <div className="flex md:hidden bg-white w-full py-6 px-6 absolute left-0 bottom-0 z-10 justify-evenly items-center fixed ">
            <Link href={'././'}>
                <Image src={HomeIcon} alt={"home icon "} width={30} height={30} />
            </Link>
            <Link href={'/History'}>
                <Image src={AboutIcon} alt={"home icon "} width={35} height={30} />
            </Link>
            <Link href={'/Menu'}>
               <Image src={MenuIconn} alt={"home icon "} width={35} height={30} />
            </Link>
            <Link href={'/Reservation'}>
               <Image src={ReserveIcon} alt={"home icon "} width={35} height={30} />
            </Link>

            
            
           
            
        </div>
    </>
  )
}


export default page