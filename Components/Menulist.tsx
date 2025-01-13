import { Logoname } from '@/Constants';
import React from 'react'
import Tap from './Tap';
import Closeicon from '@/public/Closeicon.svg'
import Image from 'next/image';

const Menulist = () => {
  return (
    <div className="flex w-full md:w-1/3 h-full bg-white absolute top-0 right-0 fixed z-20 px-6 flex-col md:pt-0 pt-6">
        <div className="flex justify-between w-full h-32 items-center">
            <div className="flex w-32 h-12">
                <h1 className='text-5xl font-bold'>
                    {Logoname}
                </h1>
            </div>
            <div className="flex w-12 h-12 justify-end ">
                <Image src={Closeicon} alt={'Close icon img'} width={25} height={25}/>
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
  )
}

export default Menulist ;