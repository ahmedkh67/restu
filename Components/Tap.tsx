import React from 'react'
import Link from 'next/link';

type Taptypes = {
    title : string ,
    link : string,
}


function Tap ({title, link} : Taptypes) {
  return (
    <>
    <li className='py-4 hover:bg-black transition-[0.3s] hover:text-white'>
        <Link href={link}>
            <h1 className='text-4xl pointer hover:text-5xl transition-[0.3s]'>
                {title}
            </h1>
        </Link>
    </li>
    <hr className='w-full border-black border-1' />
    </>

  )
}

export default Tap ;