import React from 'react'
import logo from '@/public/MenuIcon.svg'
import Image from 'next/image'
import { Logoname } from '@/Constants'

//md:w-[1720px] md:h-[84px] w-[355px] h-[70px]

const Navbar = () => {
  return (
    <>
    <div className="flex w-[80%] h-4 bg-[#ffffff28] justify-between items-center px-4
      rounded-3xl md:px-6 py-10 my-8">
        
      <h1 className="text-5xl">
        {Logoname}

      </h1>
      <Image src={logo} alt={'logoimag'} width={60} height={90} className='Menu_Icon' />

    </div>
    </>
  )
}

export default Navbar ;