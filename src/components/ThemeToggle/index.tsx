"use client"
import React from 'react'
import Image from 'next/image'
import { useGenerationStore } from '@/store/idea-generation'


const index = () => {

  const { theme, setTheme } = useGenerationStore()
  return (
    <div
    onClick={()=>{
      setTheme(!theme)
    }}
    className={`flex cursor-pointer items-center w-10 h-5 justify-between ${theme?" bg-black":" bg-white"} rounded-xl relative px-[3px]`}>
      <Image src="/sun.png" alt="moon" width="14" height="14" />
      <div className={`w-4 h-4 rounded-xl absolute ${theme?"right-[1px] bg-white":"left-[1px] bg-[#0f172a]"} `}></div>
      <Image src="/moon.png" alt="moon" width="14" height="14" />
    </div>
  )
}

export default index