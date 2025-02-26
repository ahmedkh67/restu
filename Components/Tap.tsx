import React from 'react'
import Link from 'next/link';
import { Taptypes } from '@/types';

function Tap ({title, link} : Taptypes) {



  return (
    <>
    <li className='py-2 hover:bg-black transition-[0.3s] hover:text-white'>
        <Link href={link}  >
            <h1 className='text-2xl pointer hover:text-3xl transition-[0.3s]'>
                {title}
            </h1>
        </Link>
    </li>
    </>

  )
}

export default Tap ;