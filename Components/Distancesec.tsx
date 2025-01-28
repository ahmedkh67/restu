"use client"

import React from 'react'
import Numbox from './Numbox';
import { motion } from "framer-motion"; 


const Distancesec = () => {
  return (
     <motion.div
                   initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  
                  >
    <div className="flex flex-col md:flex-row w-full md:h-70 Distance_Background1 justify-center items-center ">
        <Numbox />
        <Numbox />
        <Numbox />
      
    </div>
    </motion.div>
  )
}

export default Distancesec ;