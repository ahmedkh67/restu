"use client "


import { Commentssec, Distance2, Distancesec, Footer, Mapsec, Menulist, Menusec, Navbar, Teamsec } from "@/Components";
import Moresec from "@/Components/Moresec";
import { Hero_title, Hero_Dis, Hero_Button } from "@/Constants";
import Link from "next/link";
import Historysec from "@/Components/Historysec"; 


export default function Home() {
   
    return (
        <>
        <div className="Hero_Background flex w-full bg-black md:h-screen h-screen flex-col justify-between items-center overflow-hidden pb-40">
            <Navbar />
            <div className="flex w-full h-full flex-col justify-evenly items-center">
                 
                    <h1 className="md:text-[170px] text-[60px] font-bold text-white upanimate">
                        {Hero_title}
                    </h1>
            
                <h1 className="text-center text-gray-300 md:w-[30%] w-[65%] my-2 pb-6 upanimate2">
                    {Hero_Dis}
                </h1>
                
                <Link href={"#moresec"}>
                <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px] upanimate3">
                    {Hero_Button}
                </button>
                </Link>
                 
            </div>
        </div>
        <Moresec />
        <Historysec />
        <Distancesec />
        <Menusec />
        <Menulist /> 
        <Distance2 />
        <Teamsec />
        <Commentssec />
        <Mapsec />
        <Footer />
        
        
        </>
    )
}
