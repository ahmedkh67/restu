import React from 'react'
import { lunchmenu1 } from '@/Constants'
import Image from 'next/image'
import MenuDialog from './MenuDialog'


const Menubox1 = () => {
  
    {if(lunchmenu1.length > 0) {
      return (
        <>
        <div className="flex flex-col justify-between items-center h-full">
          <div className="Menubox1_BackGround flex w-full h-50 bg-red-600 my-5">
            
          </div>
        <div className="MenuCellsContainer flex w-full h-full bg-[rgb(223,223,223)] my-5 flex-col justify-center items-center p-4">
          {lunchmenu1.map((item) => (
              <div className="flex w-full h-30  p-4 items-center transition-[0.3s] hover:bg-white" onClick={() => {
                <MenuDialog />
              }}>
                
                  <Image src={item.foodimg} alt={'wdw'} width={80} height={100} className='bg-white mr-2' />
                
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
        <MenuDialog />
        </>
  
      )
    }}
   
  }
  
  export default Menubox1