import React from 'react'
import logo from '@/public/MenuIcon.svg'
import Image from 'next/image'
import { Logoname } from '@/Constants'

const Navbar = () => {
  return (
    <>
    <div className="flex md:w-[1720px] md:h-[84px] w-[355px] h-[70px] justify-between items-center px-4
      rounded-3xl md:px-6 py-10 my-8 Nav_Background">
      <h1 className="text-6xl">
        {Logoname}

      </h1>
      <Image src={logo} alt={'logoimag'} width={70} height={100} className='Menu_Icon' />

    </div>
    </>
  )
}

export default Navbar ;