// import { Historysec_Button, Historysec_Dis, Historysec_Dis2, Historysec_title } from '@/Constants';
"use client"

import { Url } from 'next/dist/shared/lib/router/router';
import React from 'react'
import { motion } from "framer-motion"; 

// nake a variable for text sizes in paragraph sextion . 

type Paragraphsecparams = {
    title :string , 
    dis: string , 
    dis2: string , 
   button_title: string , 
    Url?: string
}

function Paragraphsec( {title, dis , dis2 , button_title , Url } : Paragraphsecparams ) {
  return (
    <div className="flex md:w-1/2 w-full flex-col justify-between h-full md:px-12 items-center md:items-start px-2">
        <motion.div className=''
                                initial={{ opacity: 0, translateX: -50 }}
                                whileInView={{ opacity: 1, translateX: 0 }}
            
                                >
        <h1 className='text-black md:text-[36px] text-[40px] md:border-b-6 border-b-9 border-double md:w-52 w-56 font-bold border-black text-center md:text-start'>
            {title}
        </h1>
        <h1 className="text-black text-[22px] w-[90%] hidden md:flex pt-8">
            {dis}        
        </h1>
        <h1 className="text-black md:text-[22px] text-3xl w-[90%] text-center md:text-start py-9">
            {dis2}        
        </h1>
        <a href={Url}>
        <button className=" Button2 text-black md:text-2xl text-4xl px-4 py-1 ">
            {button_title}
        </button>
        </a>
        </motion.div>
    </div>
)
}

export default Paragraphsec ;