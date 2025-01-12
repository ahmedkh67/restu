import React from 'react'
import Morebox from './Morebox';

const Moresec = () => {
  return (
    <div id='moresec' className="flex w-full flex-col md:flex-row bg-white md:justify-around items-center justify-around">
      <Morebox />
      <Morebox />
      <Morebox />
      <div className="md:flex hidden">
      <Morebox />
      </div>
  
    
    </div>  
    )
}

export default Moresec ;
