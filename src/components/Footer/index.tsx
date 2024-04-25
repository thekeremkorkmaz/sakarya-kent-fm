import React from 'react'
import Image from 'next/image'
import {footertext} from '../../texts/index'
 

const page = () => {
  return (
    <div id="foot" className='flex mt-11 max-lg:flex-col '>
      <div className='md:flex-5 flex flex-col gap-5 mb-6'>
        <div className='flex items-center gap-5'>
          <Image className='rounded-[50%]' src="/kent.png" width={50} height={50} alt='logo' />
          <h1 className='font-semibold'>Sakarya Kent Fm</h1>
        </div>
        <p className='w-[80%] max-sm:text-sm'>{footertext}</p>
        <div className='flex gap-2 lg:flex-1  max-lg:hidden '>
          <a href="https://www.instagram.com/sakaryakentfm/?hl=tr"><Image src="/instagram.png" height={24} width={24} alt='helo' /></a>
          <a href="https://www.facebook.com/profile.php?id=61553551703104"><Image src="/facebook.png" height={24} width={24} alt='helo' /></a>
          <a href=""><Image src="/tiktok.png" height={24} width={24} alt='helo' /></a>
          <a href=""><Image src="/youtube.png" height={24} width={24} alt='helo' /></a>
        </div>
      </div>
      <div className='md:hidden h-[1px] bg-white w-full mb-5'></div>
      <div className='md:flex-3 flex justify-around max-md:mb-5 max-md:w-full'>
        <div className='flex-1'>
          <h4 className='font-semibold text-xl'>Links</h4>
          <ul className='flex flex-col gap-2 opacity-75 mt-4 text-sm'>
            <li>Homepage</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h4 className='font-semibold text-xl'>Social</h4>
          <ul className='flex flex-col gap-2 opacity-75 mt-4 text-sm'>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Website</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h4 className='font-semibold text-xl'>Tags</h4>
          <ul className='flex flex-col gap-2 opacity-75 mt-4 text-sm'>
            <li>Style</li>
            <li>Fashion</li>
            <li>Culture</li>
            <li>Power</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page
