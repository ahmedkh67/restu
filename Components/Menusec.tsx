import React from 'react'
import Paragraphsec from './Paragraphsec';
import { Menusec_Button, Menusec_Dis, Menusec_Dis2, Menusec_title } from '@/Constants';
import MenuContent from './MenuContent';

const Menusec = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full py-11 justify-evenly items-center md:px-48 md:h-[450px] my-16 bg-white">
    
      <Paragraphsec title={Menusec_title} dis={Menusec_Dis} 
      dis2={Menusec_Dis2} button_title={Menusec_Button} />

      <MenuContent />

    </div>
  )
}


export default Menusec ;