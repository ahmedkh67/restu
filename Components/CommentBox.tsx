import React from 'react'
import Star from '@/public/staricon.svg'
import Image from 'next/image'

function CommentBox (){
  return (
    <div className="flex flex-col justify-between items-center py-10 px-5 bg-white w-full h-90 ">
        <div className="flex w-14 h-14 rounded-full bg-black">

        </div>
        <div className="flex flex-col px-4">
            <p className='text-center text-sm' >
                ahmed moham
            </p>
            <div className="flex mb-3 justify-center">
            <Image src={Star} alt={'star rates icons'} width={20} />
            <Image src={Star} alt={'star rates icons'} width={20} />
            <Image src={Star} alt={'star rates icons'} width={20} />
            <Image src={Star} alt={'star rates icons'} width={20} />
            <Image src={Star} alt={'star rates icons'} width={20} />
            
            </div>
            
            <h1 className='md:text-xl text-2xl h-3/4'>
                this is one of the best resturant ive ver had this year , hope you getting the higher places ,
            </h1>
        </div>
    </div>
  )
}

export default CommentBox ;