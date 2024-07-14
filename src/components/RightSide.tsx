import Image from 'next/image'
import React from 'react'

function RightSide() {
  return (
    <div className='flex flex-col items-center  '>

      <div className=" font-semibold text-white relative w-[600px] h-[200px] flex items-center justify-center -mt-10">
        <Image src={"/splash.png"}  height={150} width={ 500} alt={""} className="absolute -z-1"/>
        <div className="relative text-5xl/6">@mrsaxenapvt</div>
      </div> 

      <div className='h-[500px] overflow-hidden rounded-2xl -mt-5'>
        <Image src={'/user.jpg'} alt={'user'} height={600} width={400} className='grayscale' />
      </div>

    </div>
  )
}

export default RightSide