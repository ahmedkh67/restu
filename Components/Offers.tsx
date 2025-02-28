import Link from 'next/link'
import React from 'react'

type Offersparams = {
  linkk: string | URL ,
}

function Offers({linkk}: Offersparams){
  return (
    <Link href={linkk} className="w-full" >
        <div className="flex Hero_Background h-64 w-[97%] m-4 rounded-lg ">

        </div>
    </Link>
  )
}

export default Offers