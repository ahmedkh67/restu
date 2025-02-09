import { Gallerybuttontitle } from '@/Constants'
import React from 'react'
import Link from 'next/link'
const GalleryButton = () => {
  return (
    <div className="flex w-full md:p-6 p-2 pb-6 bg-black justify-center overflow-hidden ">
      <Link href={'/Gallery'} className='w-full'>
        <button className='bg-white text-black w-full py-2 pointer '>
          <p className='text-center md:text-6xl text-3xl font-bold pointer '>
            {Gallerybuttontitle}         
          </p>
        
        </button>
      </Link>
      </div>
  )
}

export default GalleryButton ;