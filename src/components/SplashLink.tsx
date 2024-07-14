import Link from 'next/link'
import React from 'react'

function SplashLink({text,link,italic}:{
  text?:string
  link:string
  italic?:string

}) {
  return (
    <Link className=" text-3xl md:text-8xl/6 group  text-black hover:text-white group relative  md:h-[120px] md:w-[600px] w-[300px] h-[100px] flex items-center justify-center" href={link}>
     <img src={"/splash.png"}  alt={""} className="absolute -z-1 h-[80px] w-[200px] md:h-[180px] md:w-[600px] duration-300 group-hover:opacity-80 opacity-0"/>
    <div className="relative ">{text} <i>{italic}</i></div>
   </Link>
     
  )
}

export default SplashLink