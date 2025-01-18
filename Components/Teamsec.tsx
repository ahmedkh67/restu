import React from 'react'
import Paragraphsec from './Paragraphsec'
import Contentsec from './Contentsec'
import TeamCard from './TeamCard'
import Cardslide from './CardsSlide'

const Teamsec = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full py-11 justify-evenly items-center md:px-11 md:h-[450px] my-16 bg-white">
    <Paragraphsec title={'Our Team'} dis={'best traditional food around the world and drinks and drs and more traditional food around '} 
    dis2={'best traditional food aro und the world and drinks around and drinks'} 
    button_title={'All Team'} />
    <Cardslide/>
    
    </div>
  )
}

export default Teamsec