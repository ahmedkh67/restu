import React from 'react'
import Image from 'next/image';
import Img1 from '@/public/Foodimg.jpg'

type MSliderComponenttype = {
  Src: string
}

function MSliderComponent({Src }: MSliderComponenttype){

  return (
    <div className="FoodImg ">
    <Image src={Src} alt={'iuy'} width={190} height={190} >
      

    </Image>
    
   {/*  <div className="Titlesquare ">
      <h1 className='Titletext'>
        Peppotine chese
      </h1>
    </div> */} 
  
  </div>
  )
}

export default MSliderComponent ;