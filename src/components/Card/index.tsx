import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


//change date format
const formatCreatedAt = (createdAt: string): string => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formattedDate;
};

const index = ({ item }: any) => {

  const formattedDate = formatCreatedAt(item.createdAt);
  const textContent = typeof item.desc === 'string' ? item.desc.replace(/<[^>]*>/g, '') : '';

  return (
    <div key={item.id} className='flex items-center gap-4 max-md:gap-3 max-md:flex-col max-md:items-start'>
      <div className='md:flex-1 md:w-[500px] max-md:text-left max-md:w-full'>
        <Image className='w-[400px] h-[300px] object-cover max-md:w-[150px] max-md:h-[150px] max-md:rounded-[50%]' src="/p1.jpeg" height={300} width={300} alt='cate' />
      </div>
      <div className='md:flex-1 max-md:gap-1 flex flex-col md:h-[300px] justify-around'>
        <span className='opacity-80 max-md:text-xs'>{formattedDate}<b className='text-red-600 font-medium ml-2'>- {item.slug}</b></span>
        <h2 className='text-2xl max-md:text-lg font-semibold'>{item.title}</h2>
        <p className='opacity-80 max-xl:text-sm max-md:text-xs w-52'>{`${textContent.substring(0, 100)}...`}</p>
        <Link className='w-max font-semibold max-md:text-xs' href={`/product/${item.slug}`}>Read More <div className='h-[1px] w-full bg-red-600'></div></Link>
      </div>
    </div>
  )
}

export default index