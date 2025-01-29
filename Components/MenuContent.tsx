"use client"

import React from 'react'
import { motion } from "framer-motion"; 

// height={207} width={394}

const MenuContent = () => {
    return (
        <div className='flex md:w-1/2 w-[94%] py-11 justify-center items-center'>
            <div className="flex w-[394px] h-[307px]">
                <motion.div className='w-full mr-2'
                                        initial={{ opacity: 1, scale: 0, rotate: 25}}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0}}
                    
                                        >
                <div className="flex h-full w-full MenuContent_img1 rounded-xl mr-2">   

                </div></motion.div>
                <div className="flex w-full h-full flex-col">
                <motion.div className='w-full h-full mb-1'
                                        initial={{ opacity: 1, scale: 0, rotate: -25}}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0}}
                    
                                        >
                    <div className="flex w-full h-full MenuContent_img2 rounded-xl mb-1">

                    </div></motion.div>
                    <motion.div className='w-full h-1/2 mt-1'
                                        initial={{ opacity: 1, scale: 0}}
                                        whileInView={{ opacity: 1, scale: 1}}
                    
                                        >
                    <div className="flex w-full h-full MenuContent_img3 rounded-xl mt-1">

                    </div></motion.div>
                </div>
            </div>
        </div>
      )
}

export default MenuContent ;