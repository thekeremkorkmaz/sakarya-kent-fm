import React from 'react'
import Image from 'next/image'

import Menu from '@/components/Menu'
import SingleBlog from '@/components/SingleBlog'

interface Params {
  slug: string;
}

const getData = async (slug: string) => {
  const res = await fetch(`https://arlan-blog.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Networrrk response was not ok")
  }

  return res.json()

}


const formatCreatedAt = (createdAt: string): string => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formattedDate;
};


const page = async ({ params }: { params: Params }) => {

  const { slug } = params

  const data = await getData(slug)
  const formattedDate = formatCreatedAt(data.createdAt);

  return (
    <div className='mt-20 gap-24 flex-col flex'>
      <div className='flex gap-6 max-md:flex-col'>
        <div className='flex-1 gap-5 flex flex-col'>
          <h5 className='text-5xl font-semibold max-md:text-3xl '>{data.title}</h5>
          <div className='flex gap-4 items-center'>
            {
              data?.user.image && <Image className='rounded-[50%] w-10 h-10' src={data.user.image} alt='' height={40} width={40} />
            }
            <div className='opacity-75'>
              <h6 className='text-lg max-md:text-md'>{data.user.name}</h6>
              <p className='text-xs'>{formattedDate}</p>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          {data?.img && <Image className='w-[600px] h-[300px] rounded-lg object-cover' src={data.img} alt='' height={500} width={500} />}
        </div>
      </div>
      <div className='flex gap-11 max-md:flex-col'>
        {<p className='text-xs opacity-75'>Views: {data.views}</p>}
        <SingleBlog data={data.desc} slug={slug} />
        <Menu />
      </div>
    </div>
  )
}

export default page