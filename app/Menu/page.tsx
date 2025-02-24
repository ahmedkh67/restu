"use client"

import { Commentssec, MenuSlider, Navbar,Distance2, GalleryButton, MenusecsButtons, Lunchmenu, Dinnermenu, Sweetsmenu } from '@/Components'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ArrowIcon from '@/public/Arrow2Icon.svg'
import { Gallerybuttontitle, Menuhero } from '@/Constants'
import Moresec from '@/Components/Moresec'


const page = () => {
  return (
    <>
    <div className="Team_Background flex w-full bg-black  flex-col justify-between items-center overflow-hidden pb-20">
      <Navbar />
      <div className="flex w-full h-full flex-col justify-evenly items-start md:px-[10%]">
        
        <h1 className="md:text-[170px] text-[60px] font-bold text-white">
            {Menuhero} 
            
        </h1>
        <div className="flex w-full ">
          <div className="flex items-end md:justify-between justify-center w-full">

                      <div className="flex flex-col w-80 h-90 bg-white  p-4 px-6 rounded-xl">
                          <div className="flex w-50 h-50 rounded-full border-2 border-red-500 border-dashed p-1 circleanimate">
                              <div className="flex w-full h-full rounded-full circleanimate2 Hero_Background ">

                              </div>
                          </div>
                          <h1 className="text-2xl font-bold py-1">
                              Pizza piporine
                          </h1>
                          <p className="text-sm mb-1">
                              Pizza piporine juoiejwodflswko keowkroewkr ekworkewopk 
                          </p>
                          <div className="flex ">
                              <button className="w-1/4 mx-0.5 bg-amber-300 h-10 text-lg text-white">
                                  ...
                              </button>
                              <button className="w-full mx-0.5 bg-red-400 h-10 text-lg text-white">
                                  Order now                 
                              </button>
                          </div>
                      </div>
                      <div className="md:flex hidden flex-col w-80 h-90 bg-white p-4 px-6 rounded-xl ">
                          <div className="flex w-50 h-50 rounded-full border-2 border-red-500 border-dashed p-1 circleanimate">
                              <div className="flex w-full h-full rounded-full circleanimate2 Hero_Background ">

                              </div>
                          </div>
                          <h1 className="text-2xl font-bold py-1">
                              Pizza piporine
                          </h1>
                          <p className="text-sm mb-1">
                              Pizza piporine juoiejwodflswko keowkroewkr ekworkewopk 
                          </p>
                          <div className="flex ">
                              <button className="w-1/4 mx-0.5 bg-amber-300 h-10 text-lg text-white">
                                  ...
                              </button>
                              <button className="w-full mx-0.5 bg-red-400 h-10 text-lg text-white">
                                  Order now                 
                              </button>
                          </div>
                      </div>
                      <div className="md:flex hidden flex-col w-80 h-90 bg-white p-4 px-6 rounded-xl">
                          <div className="flex w-50 h-50 rounded-full border-2 border-red-500 border-dashed p-1 circleanimate">
                              <div className="flex w-full h-full rounded-full circleanimate2 Hero_Background ">

                              </div>
                          </div>
                          <h1 className="text-2xl font-bold py-1">
                              Pizza piporine
                          </h1>
                          <p className="text-sm mb-1">
                              Pizza piporine juoiejwodflswko keowkroewkr ekworkewopk 
                          </p>
                          <div className="flex ">
                              <button className="w-1/4 mx-0.5 bg-amber-300 h-10 text-lg text-white">
                                  ...
                              </button>
                              <button className="w-full mx-0.5 bg-red-400 h-10 text-lg text-white">
                                  Order now                 
                              </button>
                          </div>
                      </div>
        </div>
      </div>

        <h1 className="text-start text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 text-3xl">
            
        </h1>
        
      </div>

      <Link href={"#menumoresec"}>
        <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] rounded-xl">
          <Image src={ArrowIcon} alt={'down arrow icon'} width={45} className='rotate-90 pointer ' />
        </button>
      </Link>
    </div>


    <section id='menumoresec' className='w-full' >
      <MenuSlider />
      <GalleryButton title={Gallerybuttontitle} link={'/Gallery'} bio={'Check our photos taken from the kitchen !'} />
      
    </section>
    

    <div className="flex w-full justify-center flex-col items-center">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
        Get to know our History
      </h1>

      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    
      <MenusecsButtons />
    </div>

    
      
    
    
    <Lunchmenu />
    <MenuSlider />
    <Distance2 />
    
    <Dinnermenu />

    <Sweetsmenu />
    <Moresec />
    <div className="flex w-full justify-start flex-col items-start bg-gray-200 md:pl-25 pl-6">
      
            <h1 className='md:text-4xl text-2xl text-start font-bold mt-12'>
                Get to know our History
            </h1>
            <h1 className='md:text-3xl text-xl text-start w-3/4 md:w-1/2'>
            a honored resturant that bulit on passion , love , and consisty , 
            </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly py-8 bg-gray-200 items-start pl-6 md:pl-0">
        <div className="flex flex-col w-80 h-90 bg-white p-4 px-6 rounded-xl my-4">
                        <div className="flex w-50 h-50 rounded-full border-2 border-red-500 border-dashed p-1 circleanimate">
                            <div className="flex w-full h-full rounded-full circleanimate2 Hero_Background ">

                            </div>
                        </div>
                        <h1 className="text-2xl font-bold py-1">
                            Pizza piporine
                        </h1>
                        <p className="text-sm mb-1">
                            Pizza piporine juoiejwodflswko keowkroewkr ekworkewopk 
                        </p>
                        <div className="flex ">
                            <button className="w-1/4 mx-0.5 bg-amber-300 h-10 text-lg text-white">
                                ...
                            </button>
                            <button className="w-full mx-0.5 bg-red-400 h-10 text-lg text-white">
                                Order now                 
                            </button>
                        </div>
                    </div><div className="flex flex-col w-80 h-90 bg-white p-4 px-6 rounded-xl my-4">
                        <div className="flex w-50 h-50 rounded-full border-2 border-red-500 border-dashed p-1 circleanimate">
                            <div className="flex w-full h-full rounded-full ">

                            </div>
                        </div>
                        <h1 className="text-2xl font-bold py-1">
                            Pizza piporine
                        </h1>
                        <p className="text-sm mb-1">
                            Pizza piporine juoiejwodflswko keowkroewkr ekworkewopk 
                        </p>
                        <div className="flex ">
                            <button className="w-1/4 mx-0.5 bg-amber-300 h-10 text-lg text-white">
                                ...
                            </button>
                            <button className="w-full mx-0.5 bg-red-400 h-10 text-lg text-white">
                                Order now                 
                            </button>
                        </div>
                    </div><div className="flex flex-col w-80 h-90 bg-white p-4 px-6 rounded-xl my-4">
                        <div className="flex w-50 h-50 rounded-full border-2 border-red-500 border-dashed p-1 circleanimate">
                            <div className="flex w-full h-full rounded-full  ">

                            </div>
                        </div>
                        <h1 className="text-2xl font-bold py-1">
                            Pizza piporine
                        </h1>
                        <p className="text-sm mb-1">
                            Pizza piporine juoiejwodflswko keowkroewkr ekworkewopk 
                        </p>
                        <div className="flex ">
                            <button className="w-1/4 mx-0.5 bg-amber-300 h-10 text-lg text-white">
                                ...
                            </button>
                            <button className="w-full mx-0.5 bg-red-400 h-10 text-lg text-white">
                                Order now                 
                            </button>
                        </div>
                    </div>
        </div>
    
    <Commentssec />
    
  
  </>
  )
}

export default page