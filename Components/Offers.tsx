import Link from 'next/link'
import React from 'react'

type Offersparams = {
  linkk: string | URL ,
}

function Offers({linkk}: Offersparams){
  return (
    <Link href={linkk} className="w-[92%]" >
        <div className="flex Hero_Background h-64 w-[92%] m-4 rounded-lg ">

        </div>
    </Link>
  )
}

export default Offers