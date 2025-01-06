
import { Navbar } from "@/Components";
import { Hero_title, Hero_Dis, Hero_Button } from "@/Constants";

export default function Home() {
    return (
        <>
        <div className="Hero_Background flex w-full bg-black h-screen flex-col justify-between items-center overflow-hidden">
            <Navbar />
            <div className="flex w-full h-full flex-col justify-evenly items-center">
                <h1 className="md:text-[200px] text-[60px] font-bold">
                    {Hero_title}
                </h1>
                <h1 className="text-center">
                    {Hero_Dis}
                </h1>
                

                <button className="Button1 w-60 h-16 text-4xl">
                    {Hero_Button}
                </button>
            </div>
        </div>
        </>
    )
}
