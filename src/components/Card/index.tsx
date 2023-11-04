import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <div className='flex items-center gap-4 max-md:gap-3 max-md:flex-col'>
        <div className='md:flex-1 md:w-[500px] max-md:text-left max-md:w-full'>
            <Image className='w-[400px] h-[300px] max-md:w-[150px] max-md:h-[150px] max-md:rounded-[50%]' src="/p1.jpeg" height={300} width={300} alt='cate'/>
        </div>
        <div className='md:flex-1 max-md:gap-1 flex flex-col md:h-[300px] justify-around'>
            <span className='opacity-80 max-md:text-xs'>11.02.2023 - <b className='text-red-600 font-medium'>CULTURE</b></span>
            <h2 className='text-2xl max-md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='opacity-80 max-xl:text-sm max-md:text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis earum reprehenderit tempore optio, impedit fugit accusantium quaerat veritatis quam obcaecati!...</p>
            <Link className='w-max font-semibold max-md:text-xs' href="/">Read More <div className='h-[1px] w-full bg-red-600'></div></Link>
        </div>
    </div>
  )
}

export default index