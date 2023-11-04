import React from 'react'
import Image from 'next/image'

import { data } from '@/data/index'


const index = () => {
  return (
    <div className='flex-2 max-lg:hidden'>
      <div className='flex flex-col'>
        {/* title */}
        <div className='flex flex-col'>
          <h3 className='opacity-80'>{"What's hot"}</h3>
          <h2 className='font-bold text-2xl'>Most Popular</h2>
        </div>
        {/* tabs */}
        <div className='flex flex-col gap-7 mt-5'>
          {data.data.map((item) => (
            <div className='flex flex-col gap-2'>
              <span className={`bg-${item.color}  rounded-xl text-xs w-max px-2 py-1 text-white`}>{item.name}</span>
              <p className='text-sm opacity-80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur?</p>
              <div className='flex gap-1 text-sm'>
                <h5 className='font-semibold'>{item.creator}</h5>
                <span className='opacity-80'>- {item.date}</span>
              </div>
            </div>
          ))}
          <div>
          </div>
        </div>
        {/* Categories line */}
        <div className='mt-11'>
          <h3 className='opacity-80'>{"Discover by topic"}</h3>
          <h2 className='font-bold text-2xl'>Categories</h2>
        </div>
        {/* Categories */}
        <div className='flex mt-4 flex-wrap gap-5'>
          {data.data.map((item) => (
            <span className={`bg-${item.color}  py-2 px-3 rounded-lg`}>{item.name}</span>
          ))}
        </div>
        {/* Editors Choose line */}
        <div className='mt-12'>
          <h3 className='opacity-80'>{"Chossen by editor"}</h3>
          <h2 className='font-bold text-2xl'>Editors Pick</h2>
        </div>
        <div className='gap-10 flex flex-col'>
          {data.data.map((item) => (
            <div className='flex gap-3 items-center'>
              <div>
                <Image className='flex-1 rounded-[50%] w-12 h-12' src="/p1.jpeg" width={50} height={50} alt='' />
              </div>
              <div className='flex-1 flex flex-col gap-1'>
                <span className={`bg-${item.color}  rounded-xl text-xs w-max px-2 py-1 text-white`}>{item.name}</span>
                <p className='text-xs opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
                <p className='text-xs'>{item.creator}- <span>{item.date}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index