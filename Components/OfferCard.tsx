import { OfferCardParams } from '@/types';
import React from 'react'
import Shareicon from '@/public/ShareIcon.svg'
import Image from 'next/image'



function OfferCard({title, bio, src, btntitle }: OfferCardParams ){
  return (
    <>

        <div className="OfferCard_Container">
            <div className="OfferCard_Border circleanimate">
                <div className="OfferCard_Image Hero_Background circleanimate2">
                
                </div>
            </div>
            <h1 className="OfferCard_title">
                {title}
            </h1>
            <p className="OfferCard_bio">
                {bio}            </p>
            <div className="OfferButtons_Container">
                <button className="OfferMore_Button">
                    <Image src={Shareicon} width={10} height={10} alt={'share icon'} />

                </button>
                <button className="OfferOrder_Button">
                    {btntitle}                 
                </button>
            </div>
        </div>

    </>
  )
}

export default OfferCard ;