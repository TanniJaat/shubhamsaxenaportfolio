import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SplashLink from './SplashLink'
import { cn } from '@/lib/utils'

function LeftSide({className}:{
  className?:string
}) {
  return (
    <div className='flex  flex-col items-center justify-center gap-3 '>
        <div className={cn("lg:hidden font-semibold text-white relative w-[300px] h-[100px] flex items-center justify-center",className)}>
            <Image src={"/splash.png"}  height={150} width={ 300} alt={""} className="absolute -z-1"/>
            <div className="relative text-3xl">@mrsaxenapvt</div>
        </div> 

        <SplashLink link='/people' text='People'/> 
        <SplashLink link='/scenery' italic='Food'/> 
        <SplashLink link='/diary' text='Diary'/> 
        <SplashLink link='/about' italic='About'/> 
     
        <div className={cn('flex items-center justify-center gap-10 pt-3',className)}>
            <Link href={'https://www.instagram.com/mrsaxenapvt/'} target='_blank'>
            <Image src={'/instagram.png'} alt={'insta-logo'} height={40} width={40} />
            </Link>
            <Link href={'/'}>
            <Image src={'/mail.png'} alt={'insta-logo'} height={40} width={60} />
            </Link>
        </div>


    </div>
  )
}

export default LeftSide