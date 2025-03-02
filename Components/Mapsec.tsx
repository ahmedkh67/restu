

import React from 'react'
import { useState } from 'react'

const Mapsec = () => {

  const [addr , setAddr ] = useState(["Medinah city","Riyadh city", "Jeddah city", "Abha city "])
  

  return (
    <>
    <div className="flex w-full justify-center flex-col items-center mb-12">
      
      <h1 className='md:text-4xl text-2xl text-center font-bold mt-12'>
        WE'll Be glad to see u
      </h1>
      <h1 className='md:text-3xl text-xl text-center w-3/4 md:w-1/2'>
        a honored resturant that bulit on passion , love , and consisty , 
      </h1>
    </div>
    <div className="flex w-full justify-between items-center p-6">
      <h1 className='md:text-3xl text-xl text-start font-bold'>
        Find Youre nearest Branch
      </h1>
      <select name='Nameeinput' id='Nameeinput' className='flex bg-black text-white pointer transition-[0.3s] hover:scale-[104%]  h-10 border-1 border-black border-solid px-3 rounded-lg' > 
            <option value={''}  className=''>Medinah city</option>
            <option value={2}> Riyadh city </option>
            <option value={3}> Jeddah city </option>
            <option value={4}> Abha city </option>
                
      </select>
    </div>
    
    <div className="flex-col w-full h-64 bg-white justify-center items-end ">
      

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14524.673703101556!2d39.6103803!3d24.4796205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf2a3f8fe8a3%3A0xe0cb8d99e746cfca!2sZAHA%20TAIBA%20HOTEL!5e0!3m2!1sar!2ssa!4v1737365957570!5m2!1sar!2ssa"
        width="100%" height="100%" >
        
    </iframe>
    </div>
    </>
  )
}

export default Mapsec