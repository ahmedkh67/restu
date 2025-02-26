import React from 'react'
import Star from '@/public/staricon.svg'
import Image from 'next/image'
import { CommentsecTypes } from '@/types';


function CommentBox ({name,rate, comment, src } : CommentsecTypes ){
  return (
    <div className="flex flex-col justify-between items-center py-10 px-5 bg-white w-full h-90 ">
        
        <Image src={src} alt={'profile img'} width={56} height={56} className='rounded-full w-14 h-14' />
        <div className="flex flex-col px-4">
            <p className='text-center text-sm' >
                {name}
            </p>
            <div className="flex mb-3 justify-center">

            {Array.from({length : rate}).map((_,index) => (
                <Image src={Star} alt={'star rates icons'} width={20} />
            ))}
                       
            </div>
            
            <h1 className='md:text-xl text-2xl h-3/4'>
                {comment}
            </h1>
        </div>
    </div>
  )
}

export default CommentBox ;