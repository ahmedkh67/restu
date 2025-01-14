"use client"

import React from 'react'
import logo from '@/public/MenuIcon.svg'
import Image from 'next/image'
import { Logoname } from '@/Constants'
import Tap from './Tap'
import Closeicon from '@/public/Closeicon.svg'
import { useState ,useEffect,useRef } from 'react'

//md:w-[1720px] md:h-[84px] w-[355px] h-[70px]

const Navbar = () => {

  const [open , setopen] = useState(false) ;

  return (
    <>
    <div className="flex md:w-[80%] w-[93%] h-4 bg-[#ffffff28] justify-between items-center px-4
      rounded-3xl md:px-6 py-10 my-8 ">
        
      <h1 className="text-5xl text-white">
        {Logoname}

      </h1>
      <Image src={logo} alt={'logoimag'} width={60} height={90} className='Menu_Icon' onClick={() => {setopen(!open)}} />

    </div>
    <div className={`flex w-full md:w-1/3 h-full bg-white absolute top-0 right-0 fixed z-20 px-6 flex-col md:pt-0 pt-6
       ${open? 'Menuactive' : 'Menuinactive'} `}>


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
        <div className="flex w-full h-full  flex-col justify-start items-start">
            <ul className='w-full'>
                <Tap title={'Home'} link={''} />
                <Tap title={'About'} link={'/about'} />
                <Tap title={'Menu'} link={'/about'} />
                <Tap title={'Contacts'} link={'/about'} />
            </ul>
            
        </div>
    </div> 
    </>
  )
}

export default Navbar ;