import React from 'react'
import Image from 'next/image'
import Chefhat from '@/public/Chef hat Icon.svg'

const Numbox = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-56 w-8/10 h-56 p-4 m-5 md:m-12 rounded-2xl bg-white justify-center items-center">
      <div className="flex w-full h-full border-2 border-black border-solid rounded-xl justify-center items-center flex-col">
        
        <div className="flex w-20 h-20 rounded-full  m-2 
         border-solid justify-center items-center ">
          <Image src={Chefhat} alt={'idonr'} width={65} height={35} />
        </div>
        
        <h1 className='text-5xl font-bold '>
        +200
        </h1>
        <h1 className='text-2xl '>
        Branches
        </h1>
      </div>
    </div>
  )
}

export default Numbox