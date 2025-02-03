"use client"

import { Footer, Mapsec, Navbar,Reservationbox } from '@/Components'
import React from 'react'


const page = () => {
  return (
    <>
    <div className="Reservation_Background flex w-full bg-black md:h-full flex-col justify-between items-center overflow-hidden pb-25">
      
      <Navbar  />
      <Reservationbox />
 
    </div>
      <Mapsec />
      <Footer />
    </>
  )
}


export default page