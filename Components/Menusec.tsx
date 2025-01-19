import React from 'react'
import Paragraphsec from './Paragraphsec';
import { Menusec_Button, Menusec_Dis, Menusec_Dis2, Menusec_title } from '@/Constants';
import MenuContent from './MenuContent';
import MenuSlider from './MenuSlider';

// made with love should be insert with font family like italiano ,.

const Menusec = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row w-full py-11 justify-center items-center md:px-48 md:h-[450px] my-16 bg-white">
      <MenuContent />
      <Paragraphsec title={Menusec_title} dis={Menusec_Dis} 
      dis2={Menusec_Dis2} button_title={Menusec_Button} />

    </div>
    <div className="flex w-full pb-11">

    
    <MenuSlider />
    </div>
    </>
  )
}


export default Menusec ;