import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { data } from '@/data/index'
import { CateProps } from '@/types/index'

const index = () => {
  
  return (
    <div>
      <h1 className='text-3xl font-bold max-md:2xl'>Popular Categories</h1>
      <div className='flex flex-wrap justify-start gap-5 px-4 mt-10'>
        {data.data.map((item: CateProps) => (
          <Link href={`/blog?cat=${item.name}`} key={item.name} className={`flex gap-3 bg-${item.color} items-center justify-center py-5 w-44 max-md:w-32 rounded-lg text-md font-medium`}>
            <Image className='rounded-[100%] w-[30px] h-[30px]' src={`/${item.img}`} height={24} width={24} alt='' />
            {item.name}
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default index