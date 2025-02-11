import React from 'react'
import Paragraphsec from './Paragraphsec';
import { Menusecc } from '@/Constants';
import MenuContent from './MenuContent';

// made with love should be insert with font family like italiano ,.

const Menusec = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row w-full py-11 justify-center items-center md:px-48 md:h-[450px] my-16 bg-white">
      <MenuContent />
      <Paragraphsec title={Menusecc.Menusec_title} dis={Menusecc.Menusec_Dis} 
      dis2={Menusecc.Menusec_Dis2} button_title={Menusecc.Menusec_Button} />

    </div>
    <div className="flex w-full ">

    
    
    </div>
    </>
  )
}


export default Menusec ;