import React from 'react'
import Image from 'next/image';
import Img1 from '@/public/Foodimg.jpg'

const MSliderComponent = () => {
  return (
    <div className="FoodImg">
    <Image src={Img1} alt={'iuy'} width={190} height={190} >
      

    </Image>
    <div className="Pricesquare">
      <h1 className='Pricetext'>
        21$
      </h1>
    </div>
    <div className="Titlesquare">
      <h1 className='Titletext'>
        Peppotine chese
      </h1>
    </div>
  
  </div>
  )
}

export default MSliderComponent ;