"use client"

import React from 'react'
import Paragraphsec from './Paragraphsec';
import Contentsec from './Contentsec';
import {Historysecc } from '@/Constants';
import { motion } from "framer-motion"; 


function Historysec (){
  return (
    <>
    <div className="flex w-full justify-center flex-col items-center">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
        Get to know our History
      </h1>
      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    </div>


    <div className="flex flex-col-reverse md:flex-row w-full py-11 justify-evenly items-center md:px-11 md:h-[450px] my-16 ">
        <Paragraphsec title={Historysecc.Historysec_title} dis={Historysecc.Historysec_Dis}
         dis2={Historysecc.Historysec_Dis2} button_title={Historysecc.Historysec_Button}
         Url={"/History"} />
                          
          <Contentsec />
        
    </div>
    </>
  )
}

export default Historysec ;