import React from 'react'
import Chefhat from '@/public/Chef hat Icon.svg'
import Foodplate from '@/public/Food plate Icon.svg'
import CoffeCup from '@/public/Cup Icon.svg'
import Image from 'next/image'
import { MoreboxParams } from '@/types'


function Morebox ({title , bio , srcs } : MoreboxParams) {
  return (
    <>
    <div className='flex w-full md:w-[373px] h-[178px] md:h-[138px]  px-4 overflow-hidden justify-center'>
        <Image src={srcs} alt={'Chef hat icon'} width={80} height={65} />
        <div className="flex w-full flex-col justify-center pl-4">
          <h1 className="text-[33px] md:text-[30px] font-bold serif">
            {title}
          </h1>
          <h1 className="text-[19px] md:text-[16px] ">
            {bio}
        
          </h1>
        </div>
    </div>

    </>
  )
}

export default Morebox ;

