'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import LeftSide from './LeftSide'
import NavLink from './NavLink'

function Navbar({text}:{

  text:string
}) {
  const[isOpen, setOpen]= useState(true)
  const toggleMenu=()=> setOpen(!isOpen)
    
  return (
    <div className='sticky top-0 z-10 bg-blend-lighten bg-white bg-opacity-80'>

       {
        isOpen&&(
          <div className='flex justify-between py-5 px-10 w-[100vw] '>
            <NavLink link={'/'} text={text}/>
            <button onClick={toggleMenu}>
              <Image src={'/hamburger.png'} alt={''} height={40} width={40}/>
            </button>
          </div>
        )
        ||
        (
         
          <div className='flex gap-[50px] flex-col justify-between py-5 px-10 w-[100vw] '>
          
           <div className='flex justify-between'>
              <div></div>
          <button onClick={toggleMenu} className='left-0 relative'>
              <Image src={'/close.png'} alt={''} height={40} width={40}/>
          </button>
      
          </div>
            <div className='h-[100vh]' >
            <LeftSide className='hidden'/>
            </div>
          </div>
         
        )
       }
    </div>
   
  )
}

export default Navbar