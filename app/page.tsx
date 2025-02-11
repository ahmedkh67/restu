"use client "

import { Commentssec, Distance2, Distancesec, Footer, GalleryButton, Mapsec, Menulist, Menusec, MenuSlider, Navbar, Teamsec } from "@/Components";
import Moresec from "@/Components/Moresec";
import {Gallerybuttontitle, Herosec } from "@/Constants";
import Link from "next/link";
import Historysec from "@/Components/Historysec"; 


export default function Home() {
   
    return (
        <>
        <div className="Hero_Background flex w-full bg-black md:h-screen h-full flex-col justify-between items-center overflow-hidden pb-20">
            
            <Navbar />
            <div className="flex w-full h-full md:flex-row flex-col-reverse justify-evenly items-start md:px-[10%] px-[4%]">
                 <div className="flex flex-col w-full">
                 <h1 className="md:text-[100px] text-[60px] font-bold text-white upanimate">
                        {Herosec.Hero_title}
                    </h1>
            
                <h1 className="text-start text-2xl text-gray-300 md:w-[70%] w-[80%] my-2 pb-6 upanimate2">
                    {Herosec.Hero_Dis}
                </h1>
                <h1 className="text-start text-2xl text-gray-300 md:w-[70%] hidden md:flex w-[80%] my-2 pb-6 upanimate2">
                    {Herosec.Hero_Dis}
                </h1>
                
                <Link href={"#moresec"}>
                <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] upanimate3">
                    {Herosec.Hero_Button}
                </button>
                </Link>
                
                 </div>
                 <div className="flex items-end justify-center">

                    <div className="flex flex-col w-80 h-90 bg-white p-4 px-6 rounded-xl">
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
                    
                 
            </div>
        </div>
        <MenuSlider />
        <GalleryButton title={Gallerybuttontitle} link={'/Gallery'} bio={"Check our photos taken from the kitchen !"} />
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
        <Historysec />
        
        <Distancesec />
        <Menusec />
        <Distance2 />
        <MenuSlider />
        <Menulist />
        
        <GalleryButton title={"View Menu"} link={'/Menu'} bio={'Our best and tasty deshes waiting for u !'} />
        
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
        <Teamsec />
        <Mapsec />
        <Footer />
        
        
        
        </>
    )
}
