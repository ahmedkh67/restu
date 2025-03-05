import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from '@/public/homeIcon.svg'
import AboutIcon from '@/public/aboutIcon.svg'
import MenuIconn from '@/public/menu3Icon.svg'
import ReserveIcon from '@/public/write-svgrepo-com (3).svg'


const DownNavbar = () => {
  return (
    <div className="flex md:hidden bg-white w-full py-3 px-6 absolute left-0 bottom-0 z-10 justify-evenly items-center fixed ">
        <Link href={'././'}>
        <div className="flex flex-col justify-between items-center">
        <Image src={HomeIcon} alt={"home icon "} width={35} height={30} />
        <p className='text-[10px]'>Home</p>
        </div>
            
        </Link>
        
        <Link href={'/History'}>
        <div className="flex flex-col justify-between items-center">
        <Image src={AboutIcon} alt={"home icon "} width={35} height={30} />
        <p className='text-[10px]'>About</p>
        </div>
            
        </Link>
        <Link href={'/Menu'}>
        <div className="flex flex-col justify-between items-center">
            <Image src={MenuIconn} alt={"home icon "} width={35} height={30} />
            <p className='text-[10px]'>Menu</p>
        </div>

        </Link>
        <Link href={'/Reservation'}>
        <div className="flex flex-col justify-between items-center">
            <Image src={ReserveIcon} alt={"home icon "} width={35} height={30} />                
            <p className='text-[10px]'>Reservation</p>
        </div>
        
        </Link>

    </div>
  )
}

export default DownNavbar ;