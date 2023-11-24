"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const index = ({page, hasPrev, hasNext}:any) => {

  const router = useRouter()

  return (
    <div className='md:flex-5 flex justify-between mt-11'>
      <button className='bg-red-600 px-7 py-4 text-white disabled:bg-red-400' onClick={()=>{
        router.push(`?page=${page - 1}`)
      }}
      disabled={!hasPrev}
      >Left</button>
      <button className='bg-red-600 px-7 py-4 text-white disabled:bg-red-400' onClick={()=>{
        router.push(`?page=${page + 1}`)
      }}
      disabled={!hasNext}
      >Right</button>
    </div>
  )
}

export default index