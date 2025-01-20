import React from 'react'
import TeamCard from './TeamCard'
import Arrowicon from '@/public/Arrowblack.svg'
import Image from 'next/image'

const TeamCards = () => {
  return (
    <>
    <div className="flex w-full justify-end md:pr-23 pr-18 items-end mt-10">
        <button className='Button2 px-4 py-2 text-2xl'>
            Page 1
        </button>
    </div>
    <div className="flex w-full h-full px-10 pb-14 pt-4 justify-evenly items-start flex-wrap">

      <div className="flex my-4">
        <TeamCard Name={'Mark'} Role={'Chef'} />
      </div>
      <div className="flex my-4">
        <TeamCard Name={'Mark'} Role={'Chef'} />
      </div>
      <div className="flex my-4">
        <TeamCard Name={'Mark'} Role={'Chef'} />
      </div>
      <div className="flex my-4">
        <TeamCard Name={'Mark'} Role={'Chef'} />
      </div>

    <div className="hidden md:flex justify-evenly items-start flex-wrap w-full h-full">
        <div className="flex my-4">
            <TeamCard Name={'Mark'} Role={'Chef'} />
        </div>
        <div className="flex my-4">
            <TeamCard Name={'Mark'} Role={'Chef'} />
        </div>
        <div className="flex my-4">
            <TeamCard Name={'Mark'} Role={'Chef'} />
        </div>
        <div className="flex my-4">
            <TeamCard Name={'Mark'} Role={'Chef'} />
        </div>
        
    </div>

      
      <div className="flex w-full justify-center items-center mt-8">
        <Image src={Arrowicon} alt={'left arrow '} width={25} className='rotate-180' />

        <button className='Button2 text-2xl p-2 px-4 mx-1 '>
            1
        </button>
        <button className='Button2 text-2xl p-2 px-4 mx-1'>
            2
        </button>
        <button className='Button2 text-2xl p-2 px-4 mx-1'>
            3
        </button>
        <Image src={Arrowicon} alt={'left arrow '} width={25} />
      </div>
      <h1 className='text-xl py-2'>
        Pages
      </h1>
     
    </div>
    </>
  )
}

export default TeamCards