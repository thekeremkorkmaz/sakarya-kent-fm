import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {anabaslik} from '../../texts/index'
import {anabaslik2} from '../../texts/index'
import {ilkyazi} from '../../texts/index'
import {butonyazi} from '../../texts/index'
import {foto} from '../../texts/index'

const index = () => {
  return (
    <div >
      <h1 className='md:text-5xl lg:text-7xl text-3xl leading-normal'>{anabaslik}</h1>
      <div className='mt-16 md:gap-11 flex justify-center items-center'>
        <div className='md:flex-1'>
          <img className='w-[500px] h-[500px] max-lg:w-[400px] max-lg:h-[400px]  max-md:hidden' src={foto} alt='featured'/>
        </div>
        <div className='md:flex-1 flex gap-8 flex-col text-left'>
          <h2 className='text-4xl font-semibold max-md:text-2xl max-lg:text-2xl'>{anabaslik2}</h2>
          <p className='text-md max-lg:text-sm opacity-75'>{ilkyazi}</p>
          <Link href={"/product/asdasdasdsad"} className='w-max px-4 py-3 max-md:px-3 max-md:py-2 border-2 bg-[#e5e5e5] text-black rounded-lg text-sm'>{butonyazi}</Link>
        </div>
      </div>
    </div>
  )
}

export default index
