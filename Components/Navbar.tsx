"use client"

import React from 'react'
import logo from '@/public/MenuIcon.svg'
import Image from 'next/image'
import { Logoname } from '@/Constants'
import Tap from './Tap'
import Closeicon from '@/public/Closeicon.svg'
import { useState ,useEffect,useRef } from 'react'
import Arrowicon from "@/public/Arrowblack.svg"
import Emailicon from '@/public/Email Icon.svg'
import Insticon from '@/public/instagram-svgrepo-com (1).svg'
import Whatsicon from '@/public/whatsapp-128-svgrepo-com.svg'
import Linkedicon from '@/public/Linked in Icon.svg'
import LanguageIcon from '@/public/language-svgrepo-com (3).svg'
import { motion } from "framer-motion"; 


//md:w-[1720px] md:h-[84px] w-[355px] h-[70px]

const Navbar = () => {

  const [open , setopen] = useState(false) ;
  const [isopen , setisopen ] = useState(false)

  return (
    <>
    <motion.div className='md:w-[80%] w-[92%]'
                        initial={{ opacity: 0, translateY: -50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
    
                        >
    <div className="flex w-full  h-4 bg-[#ffffff28] justify-between items-center px-4
      rounded-3xl md:px-6 py-10 my-8 z-10">
        
      <h1 className="text-5xl text-white">
        {Logoname}

      </h1>
      <div className="flex">
        <Image src={LanguageIcon} alt={'LanguageIcon'} width={33} height={60} className='mx-2' />

        <Image src={logo} alt={'logoimag'} width={60} height={90} className='Menu_Icon' onClick={() => {setopen(!open)}} />
        
      </div>

    </div>
    <div className={`flex w-full md:w-1/3 h-full bg-white absolute top-0 right-0 fixed z-20 px-6 flex-col md:pt-0 pt-6
       ${open? 'Menuactive' : 'Menuinactive'}  *:`}>


        <div className="flex justify-between w-full h-32 items-center">
            <div className="flex w-32 h-12">
                <h1 className='text-5xl font-bold'>
                    {Logoname}
                </h1>
            </div>
            <div className="flex w-12 h-12 justify-end ">
                <Image src={Closeicon} alt={'Close icon img'} width={25} height={25} onClick={() => {setopen(!open)}}
                className='pointer' />
            </div>

        </div>
        
        <div className="flex w-full h-full flex-col justify-start items-start">
            <ul className='w-full'>
                <Tap title={'Home'} link={'././'} />
                <div className="flex " onClick={() => {setisopen(!isopen)}}>                  
                  <div className='w-full'>
                    <Tap title={'About'} link={''} />
                  </div>
                  <Image src={Arrowicon} alt={'arrow icon'} width={40} className={` transition-[0.3s] ${isopen? 'rotate-90' : 'rotate-0'}  *:`}/>
                  
                </div>
                <div className={`flex w-full pl-8 flex-col transition-[0.3s] ${isopen? 'hiddenn' : 'hidden'}  *:`}>
                
                  <Tap title={'History'} link={'/History'} />
                  <Tap title={'Our team'} link={'/Team'} />
                </div>
                
                <Tap title={'Menu'} link={'/Menu'} />
                <Tap title={'Gallery'} link={'/Gallery'} />
                <Tap title={'Contacts'} link={'/Contacts'} />
            </ul>
            <div className="flex w-full justify-start items-start opacity-90 py-4">
                    <Image src={Whatsicon} alt={'icon '} width={30} className='mr-2 transition-[0.3s] hover:transform-[scale(110%)] pointer' />
                    <Image src={Insticon} alt={'icon '} width={35} className='mr-1 transition-[0.3s]  hover:transform-[scale(110%)] pointer' />
                    <Image src={Linkedicon} alt={'icon '} width={30} className='mx-2 transition-[0.3s] hover:transform-[scale(110%)] pointer'/>
                    
        </div>
        </div>
        
    </div> 
    </motion.div>
    </>
  )
}

export default Navbar ;