import React from 'react'
import Paragraphsec from './Paragraphsec';
import Contentsec from './Contentsec';
const Historysec = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full py-11 justify-evenly items-center md:px-11 md:h-[450px] my-16 bg-white">
        <Paragraphsec />
        <Contentsec />
    </div>
  )
}

export default Historysec ;