import { OfferCardParams } from '@/types';
import React from 'react'
import Shareicon from '@/public/ShareIcon.svg'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

function OfferCard({title, bio, src, btntitle }: OfferCardParams ){
  return (

    <>
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1 , transition:{duaration: 0.7}}} className='w-80 h-90' >
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
                <button className="OfferMore_Button flex justify-center items-center">
                    <Image src={Shareicon} alt={'Shareicon for card'} width={27} height={27} />
                </button>
                <Link href={"https://hungerstation.com/sa-en/resturant/dina"} className='w-full' >
                    <button className="OfferOrder_Button">
                        {btntitle}                 
                    </button>
                </Link>
            </div>
        </div>
        </motion.div>
    </>
  )
}

export default OfferCard ;