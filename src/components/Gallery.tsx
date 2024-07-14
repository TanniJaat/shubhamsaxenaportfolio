'use client'
import { supabaseClient, supabaseComponent } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



function Gallery({image}:{
  image:Array<any>
}) {


  return (
    <div>

        <div className='m-0 gap-4 p-8 lg:columns-4 md:columns-2 columns-1  '>
        {image.map((src:any , index:any) => (
          <div key={index}> <img src={src.imageurl} alt=""  className=' block max-w-[100%] py-4' /></div>
        ))}
     

       
        </div>
     
    </div>
  )
}

export default Gallery