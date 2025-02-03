"use client"

import React from 'react'
import Paragraphsec from './Paragraphsec';
import Contentsec from './Contentsec';
import {Historysecc } from '@/Constants';
import { motion } from "framer-motion"; 


function Historysec (){
  return (
    <div className="flex flex-col-reverse md:flex-row w-full py-11 justify-evenly items-center md:px-11 md:h-[450px] my-16 bg-white">
        <Paragraphsec title={Historysecc.Historysec_title} dis={Historysecc.Historysec_Dis}
         dis2={Historysecc.Historysec_Dis2} button_title={Historysecc.Historysec_Button}
         Url={"/History"} />
                          
          <Contentsec />
        
    </div>
  )
}

export default Historysec ;