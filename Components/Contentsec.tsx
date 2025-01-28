import React from 'react'
import Image from 'next/image'
import Historypic from '@/public/Historypic.avif'
import { motion } from "framer-motion"; 

const Contentsec = () => {
  return (
    <div className='flex md:w-1/2 w-[90%] py-11 justify-center center'>
      <motion.div
               initial={{ opacity: 0, scale: 0}}
              whileInView={{ opacity: 1, scale: 1}}
              
              >
        <Image src={Historypic} alt={'pic of old resturant'} height={207} width={394}  />
      </motion.div>
    </div>
  )
}

export default Contentsec