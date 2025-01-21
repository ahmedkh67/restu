
import { Distance2, Distancesec, Footer, Historysec, Mapsec, Menulist, Menusec, Navbar, Teamsec } from "@/Components";
import Moresec from "@/Components/Moresec";
import { Hero_title, Hero_Dis, Hero_Button } from "@/Constants";
import Link from "next/link";

export default function Home() {
   
    return (
        <>
        <div className="Hero_Background flex w-full bg-black md:h-screen h-screen flex-col justify-between items-center overflow-hidden pb-20">
            <Navbar />
            <div className="flex w-full h-full flex-col justify-evenly items-center">
                <h1 className="md:text-[170px] text-[60px] font-bold text-white">
                    {Hero_title}
                </h1>
                <h1 className="text-center text-gray-300 md:w-[30%] w-[65%] my-2 pb-6">
                    {Hero_Dis}
                </h1>
                
                <Link href={"#moresec"}>
                <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px]">
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
        <Mapsec />
        <Footer />
        
        </>
    )
}
