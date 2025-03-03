import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from '@/public/homeIcon.svg'
import AboutIcon from '@/public/aboutIcon.svg'
import MenuIconn from '@/public/menu3Icon.svg'
import ReserveIcon from '@/public/write-svgrepo-com (3).svg'


const Contacts = () => {
  return (
    <>
    <div>Contacts</div>

    <div className="flex md:hidden bg-white w-full py-6 px-6 absolute left-0 bottom-0 z-10 justify-evenly items-center fixed ">
            <Link href={'././'}>
                <Image src={HomeIcon} alt={"home icon "} width={30} height={30} />
            </Link>
            <Link href={'/History'}>
                <Image src={AboutIcon} alt={"home icon "} width={35} height={30} />
            </Link>
            <Link href={'/Menu'}>
               <Image src={MenuIconn} alt={"home icon "} width={35} height={30} />
            </Link>
            <Link href={'/Reservation'}>
               <Image src={ReserveIcon} alt={"home icon "} width={35} height={30} />
            </Link>

            
            
           
            
        </div>
    </>
  )
}

export default Contacts