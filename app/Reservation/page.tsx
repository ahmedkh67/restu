"use client"

import { Navbar,Reservationbox } from '@/Components'
import React from 'react'
import { motion } from 'framer-motion'



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
    
    </>
  )
}


export default page