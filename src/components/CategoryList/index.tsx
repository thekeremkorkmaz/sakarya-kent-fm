import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { CateProps } from '@/types/index'


const getData = async () => {
  const res = await fetch("https://arlan-blog.vercel.app/api/categories", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Network response was not ok")
  }

  return res.json()

}

const index = async () => {
  
  const data = await getData()

  return (
    <div>
      <h1 className='text-3xl font-bold max-md:2xl'>Popular Categories</h1>
      <div className='flex flex-wrap justify-start gap-5 px-4 mt-10 max-md:justify-center'>
        {data.categories?.map((item: CateProps) => (
          <Link href={`/blog/${item.title}`} key={item.id} className={`flex gap-3 bg-${item.color}-300 items-center opacity-95 justify-center py-5 w-44 max-md:w-32 rounded-lg text-md font-medium `}>
            <Image className='rounded-[100%] w-[30px] h-[30px]' src={`${item.img}`} height={24} width={24} alt='' />
            {item.title}
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default index