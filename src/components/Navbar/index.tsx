import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import ThemeToggle from '@/components/ThemeToggle'
import AuthLinks from '@/components/AuthLinks'

const page = () => {
  return (
    <div className='py-5'>
      <div className='flex justify-between items-center '>
        {/* icons  */}
        <div className='flex gap-2 lg:flex-1  max-lg:hidden '>
          <Image src="/instagram.png" height={24} width={24} alt='helo' />
          <Image src="/facebook.png" height={24} width={24} alt='helo' />
          <Image src="/tiktok.png" height={24} width={24} alt='helo' />
          <Image src="/youtube.png" height={24} width={24} alt='helo' />
        </div>
        {/* logo */}
        <div className='lg:flex-1 text-center text-3xl font-bold max-lg:text-2xl'> 
          <h2><Link href={"/"}>Sakarya Kent Fm</Link></h2>
        </div>
        {/* links */}
        <div className='flex gap-5 lg:flex-1 items-center max-lg:text-sm '>
          <ThemeToggle />
          <Link className='max-md:hidden' href="/">Anasayfa</Link>
          <Link className='max-md:hidden' href="/">Hakkımda</Link>
          <Link className='max-md:hidden' href="/">Blog</Link>
          <Link className='max-md:hidden' href="/">iletişim</Link>
          <AuthLinks />
        </div>

      </div>
    </div>
  )
}

export default page
