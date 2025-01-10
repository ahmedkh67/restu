import React from 'react'
import Image from 'next/image'
import Historypic from '@/public/Historypic.avif'

const Contentsec = () => {
  return (
    <div className='flex md:w-1/2 w-[90%] py-11 justify-center center'>
      <Image src={Historypic} alt={'pic of old resturant'} height={207} width={394} />

    </div>
  )
}

export default Contentsec