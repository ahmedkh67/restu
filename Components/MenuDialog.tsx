import React from 'react'
import Image from 'next/image'
import CloseIcon from '@/public/Closeicon.svg'

const MenuDialog = () => {
  return (
    <div className="flex p-6 bg-white flex-col items-center justify-start absolute z-10 w-96 ">
        <div className="flex w-full h-56 bg-black m-5">
        </div>     

        <div className="flex flex-col w-full ">
            
                <h1 className='text-center font-bold text-lg bg-slate-500 py-2  text-white my-2'>
                    Chicken Burger
                </h1>
                <p className='text-start text-slate-500 '>
                    A Cheese Burgr with double chicken peaces made on the oven , comes with onion, lotus, tomato , fresh potato, custard, mayunaze, ketchap , little spicy, 
                </p>
                <p className='my-2 bg-slate-500  py-2 text-white pl-2'>
                    Price | $15
                </p>
                <p className='my-2 rounded-lg py-2 text-white pl-2 text-lg text-center font-bold bg-red-500'>
                    Close
                </p>
        </div>
    </div>
  )
}

export default MenuDialog