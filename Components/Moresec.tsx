import React from 'react'
import Morebox from './Morebox';
import { Moreboxes } from '@/Constants';


const Moresec = () => {
  return (
    <div id='moresec' className="flex w-full flex-col md:flex-row bg-white md:justify-around items-center justify-around">
      
      {Moreboxes.map((item) => (
        <Morebox title={item.MoreBoxtitle} bio={item.MoreBoxbio} />
      ))}
    
    </div>  
    )
}

export default Moresec ;
