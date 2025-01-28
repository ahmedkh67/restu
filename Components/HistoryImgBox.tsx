"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"; 

const HistoryImgBox = () => {
  return (
    <motion.div className=''
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                
                                    >
    <div className="flex Hero_Background md:w-120 w-86 h-70 mb-30">

    </div></motion.div>
  )
}

export default HistoryImgBox ;