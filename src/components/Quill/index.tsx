"use client"
import React from 'react'
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import { useGenerationStore } from '@/store/idea-generation'



const index = () => {
    const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

    const { value, setValue } = useGenerationStore()

    return (
        <div>
            <input 
            type="text" 
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className='w-full h-10 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500'
            />
        </div>
    )
}

export default index