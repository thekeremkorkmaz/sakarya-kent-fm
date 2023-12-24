"use client";
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";



const page = () => {

  const [playing, setPlaying] = React.useState(false);

  return (
    <div className='flex justify-center flex-col gap-3 items-center'>
      <p className='font-semibold text-2xl'>Radyomuzu Dinleyin</p>
      <div className='flex bg-yellow-500 w-max py-3 pr-9 rounded-lg pl-3 gap-3 items-center justify-start'>
        <div className='cursor-pointer w-max' onClick={()=>{
          setPlaying(!playing)
        }}>
          {playing ? <FaStop size={30}/> : <FaPlay size={30}/>}
        </div>
        <div className='h-1 w-[200px] bg-black rounded-lg'></div>
      </div>

    </div>
  )
}

export default page