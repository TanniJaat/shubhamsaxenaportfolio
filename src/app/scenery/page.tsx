'use client'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import { supabaseComponent } from '@/lib/supabase'


import React, { useEffect, useState } from 'react'

function page() {
  const [image, setImage] = useState<any>([])
  const [err, setErr] = useState('')

 useEffect(()=>{
    const getImage = async ()=>{
      const {data, error} = await supabaseComponent
      .from('food')
      .select('*')
      .order('id')

      if(data) {
        setImage(data)
      }
      if(error){
        setErr('fix it bro')
      }
    }
    getImage();
 })

  return (
    <div className='bg-[#FAF1EF] overflow-x-hidden  h-[100vh] relative z-0'>
      <Navbar  text={' > Food'}/>
     <Gallery image={image}/>
    
    </div>
  )
}

export default page