import React from 'react'
import Link from 'next/link'

import { AuthLinksProps } from '@/types/index';

const index = () => {

    const status: AuthLinksProps["status"] = 'authenticated';

    return (
        <div className='flex items-center justify-center flex-col left-0 px-5 py-6 absolute h-[100%] bg-black text-white text-3xl w-full z-50 gap-10 top-16 '>
            <Link href="/">HomePage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            {status === 'unauthenticated' ? (
                <>
                    <Link href="/login">Login</Link>
                </>
            ) : (
                <>
                    <Link href="/write">Write</Link>
                    <span className='cursor-pointer'>Logout</span>
                </>
            )}
        </div>
    )
}

export default index