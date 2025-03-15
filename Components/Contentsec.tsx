import React from 'react'
import Image from 'next/image'
import Historypic from '@/public/Historypic.avif'
import { motion } from "framer-motion"; 
import HistoryBox from './HistoryBox';

const Contentsec = () => {
  return (
    <div className='flex md:w-1/2 w-[90%] py-11 justify-center items-center overflow-hidden'>
      <motion.div
               initial={{ opacity: 0, scale: 0}}
              whileInView={{ opacity: 1, scale: 1}}
              
              >
        <Image src={Historypic} alt={'pic of old resturant'} height={207} width={394} className='overflow-hidden'  />
        
        

      </motion.div>
      <div className="absolute translate-x-45 flowanimate overflow-hidden">
        <HistoryBox />
      </div>
      <div className="absolute translate-y-40 translate-x-5 flowanimate overflow-hidden">
        <HistoryBox />
      </div>
      <div className="absolute -translate-y-20 -translate-x-30 flowanimate overflow-hidden">
        <HistoryBox />
      </div>
      
      
    </div>
  )
}

export default Contentsec ;   