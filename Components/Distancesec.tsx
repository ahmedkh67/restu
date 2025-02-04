"use client"

import React from 'react'
import Numbox from './Numbox';
import { motion } from "framer-motion"; 
import { NumBoxes } from '@/Constants';


const Distancesec = () => {
  return (
     <motion.div
                   initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  
                  >
    <div className="flex flex-col md:flex-row w-full md:h-77 
    Distance_Background1 justify-center items-center py-4">
      {NumBoxes.map((item) => (
        <Numbox Num={item.Num} Dis={item.Dis} Src={item.Src} />
      ))}     
    </div>
    </motion.div>
  )
}

export default Distancesec ;