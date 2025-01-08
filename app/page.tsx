
import { Navbar } from "@/Components";
import Moresec from "@/Components/Moresec";
import { Hero_title, Hero_Dis, Hero_Button } from "@/Constants";

export default function Home() {
    return (
        <>
        <div className="Hero_Background flex w-full bg-black md:h-screen h-screen flex-col justify-between items-center overflow-hidden">
            <Navbar />
            <div className="flex w-full h-full flex-col justify-evenly items-center">
                <h1 className="md:text-[200px] text-[60px] font-bold text-white">
                    {Hero_title}
                </h1>
                <h1 className="text-center text-gray-300 md:w-[30%] w-[65%] my-2">
                    {Hero_Dis}
                </h1>
                
                
                <button className="Button1 md:text-3xl text-4xl px-2 py-0.5 mt-[-7px]">
                    {Hero_Button}
                </button> 
            </div>
        </div>
        <Moresec />
            
        </>
    )
}
