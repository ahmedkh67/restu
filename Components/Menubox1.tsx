import React, { useState } from 'react'
import { lunchmenu1 } from '@/Constants'
import Image from 'next/image'
import MenuDialog from './MenuDialog'


const Menubox1 = () => {
    


    {if(lunchmenu1.length > 0) {
      return (
        <>
        <div className="flex flex-col justify-between items-center h-full w-full">
          
        <div className="MenuCellsContainer flex w-full h-full bg-[rgb(223,223,223)] my-5 flex-col justify-center items-center p-4">
          {lunchmenu1.map((item) => (
              <div className="flex w-full h-30  p-4 items-center transition-[0.3s] hover:bg-white active:bg-white rounded-3xl ">
                <div className="flex w-20 h-17 rounded-full bg-amber-300">
                  <Image src={item.foodimg} alt={'wdw'} objectFit='cover' width={100} height={100} className='bg-white rounded-2xl mr-2' />

                </div>
                
                <div className="flex-col w-full h-full m-2 ">
  
                  <div className="flex w-full h-1/2 justify-between items-center ">
                    <h1 className="md:text-2xl text-md font-bold text-black">
                      {item.foodname}
                    </h1>
                    <h1 className="md:text-4xl text-2xl text-slate-500 
                    ">
                      {item.foodprice}
                    </h1>
                  </div>
                  <div className="flex w-full h-1/2 justify-start items-center ">
                    <h1 className="md:text-lg text-slate-500 text-sm">{item.fooddes} 
                      
                    </h1>
                   
                  </div>
                  

                </div>
                
  
              </div>
              
          ))}
          
        </div>
        
  
        </div>

        
         
        
        </>
  
      )
    }}
   
  }
  
  export default Menubox1