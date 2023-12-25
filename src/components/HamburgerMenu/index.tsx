"use client";
import React from 'react'
import Link from 'next/link'
import { useGenerationStore } from '@/store/idea-generation'
import { AuthLinksProps } from '@/types/index';

const index = () => {

    const status: AuthLinksProps["status"] = 'authenticated';

    const { showMenu, setShowMenu } = useGenerationStore()

    return (
        <div className='flex items-center justify-center flex-col left-0 px-5 py-6 absolute h-[100%] bg-black text-white text-3xl w-full z-50 gap-10 top-16 '>
            <Link href="/">HomePage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            {status === 'unauthenticated' ? (
                <>
                    <Link onClick={()=>{
                        setShowMenu(false)
                    }} href="/login">Login</Link>
                </>
            ) : (
                <>
                    <Link  onClick={()=>{
                        setShowMenu(false)
                    }} href="/write">Write</Link>
                    <span  onClick={()=>{
                        setShowMenu(false)
                    }} className='cursor-pointer'>Logout</span>
                </>
            )}
        </div>
    )
}

export default index