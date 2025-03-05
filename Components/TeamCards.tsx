"use client"

import React from 'react'
import TeamCard from './TeamCard'
import Arrowicon from '@/public/Arrowblack.svg'
import Image from 'next/image'
import { TeamCardsPage1, TeamCardsPage2, TeamCardsPage3 } from '@/Constants'
import { useState } from 'react'
import Link from 'next/link'

const TeamCards = () => {

  const [TeamPage , setTeamPage] = useState(TeamCardsPage1) ;
  const [Page , setPage] = useState("Page 1") ;

  return (
    <>
    <div className="flex w-full justify-end md:pr-23 pr-18 items-end mt-10" id='PagenumId'>
        <button className='Button2 px-4 py-2 text-2xl'>
            {Page}
        </button>
    </div>
    <div className="flex w-full h-full px-10 pb-14 pt-4 justify-evenly items-start flex-wrap">
      {TeamPage.map((item) => (
        <div className="flex my-4">
        <TeamCard Name={item.Name} Role={item.Role} />
        </div>
      ))}
      
      
    <div className="hidden md:flex justify-evenly items-start flex-wrap w-full h-full">
       {/* here was 4 team cards displays on md screens */}
    </div>

      
      <div className="flex w-full justify-center items-center mt-8">
        <Image src={Arrowicon} alt={'left arrow '} width={25} className='rotate-180' />
        <Link href={'#PagenumId'}>
        
          <button className='Button2 text-2xl p-2 px-4 mx-1 ' onClick={() => {setTeamPage(TeamCardsPage1) , setPage("Page 1")}}>
            1
          </button>
        </Link>
        <Link href={'#PagenumId'}>
          <button className='Button2 text-2xl p-2 px-4 mx-1' onClick={() => {setTeamPage(TeamCardsPage2) , setPage("Page 2")}}>
              2
          </button>
        </Link>
        <Link href={'#PagenumId'}>
          <button className='Button2 text-2xl p-2 px-4 mx-1' onClick={() => {setTeamPage(TeamCardsPage3) , setPage("Page 3")}}>
              3
          </button>
        </Link>
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