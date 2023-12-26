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
            <ReactQuill
                theme="bubble"
                value={value}
                onChange={setValue}
                placeholder='Yazmaya başlayın...'
            /></div>
    )
}

export default index