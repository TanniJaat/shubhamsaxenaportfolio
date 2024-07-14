
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

function NavLink({link,text}:{
    link:string
    text:string
}) {
  return (
    <div className='text-xl font-semibold tracking-wider'>
   <Link className='' href={link}>Home 
   </Link>
   {text}
   </div>
  )
}

export default NavLink