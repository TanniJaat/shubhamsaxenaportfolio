import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ContactLink() {
  return (
    <div className='flex justify-center items-center w-[600px] gap-10 -ml-8'>

            <Link href={'https://www.instagram.com/mrsaxenapvt/'} target='_blank'>
            <Image src={'/instagram.png'} alt={'insta-logo'}
            height={40} width={40}/>
            </Link>
            <Link href={'/'}>
            <Image src={'/mail.png'} alt={'insta-logo'}
            height={40} width={60}/>
            </Link>

    </div>
  )
}

export default ContactLink