import React from 'react'
import Paragraphsec from './Paragraphsec';
import Contentsec from './Contentsec';
import { Historysec_Button, Historysec_Dis, Historysec_Dis2, Historysec_title } from '@/Constants';

const Historysec = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full py-11 justify-evenly items-center md:px-11 md:h-[450px] my-16 bg-white">
        <Paragraphsec title={Historysec_title} dis={Historysec_Dis}
         dis2={Historysec_Dis2} button_title={Historysec_Button}
         Url={"/about"} />
        <Contentsec />
    </div>
  )
}

export default Historysec ;