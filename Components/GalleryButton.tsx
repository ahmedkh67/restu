import { Gallerybuttontitle } from '@/Constants'
import React from 'react'
import Link from 'next/link'
const GalleryButton = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:p-6 p-2 pb-6 bg-white justify-center overflow-hidden items-center">
      <Link href={'/Gallery'} className='w-full'>
        <button className='bg-black text-white w-full py-2 pointer rounded-xl'>
          <p className='text-center md:text-6xl text-3xl font-bold pointer '>
            {Gallerybuttontitle}         
          </p>
        
        </button>
      </Link>
      <h1 className='w-full text-2xl text-black font-bold md:pl-6'>
        Check our photos taken from the kitchen !
      </h1>
      </div>
  )
}

export default GalleryButton ;