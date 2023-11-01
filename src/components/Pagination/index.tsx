"use client"
import React from 'react'
import { useGenerationStore } from '@/store/idea-generation'


const index = () => {

  const { theme, setTheme } = useGenerationStore()
  return (
    <div>
      <p>hey: {theme ? "light": "dark"}</p>
      <button onClick={()=>{
        setTheme(!theme)
      }}>Change Truth</button>
    </div>
  )
}

export default index