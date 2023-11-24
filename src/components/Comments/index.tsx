import React from 'react'
import Image from 'next/image';

import { AuthLinksProps } from '@/types/index';

const index = () => {

    const status: AuthLinksProps["status"] = 'authenticated';
    return (
        <div className='mt-11 flex flex-col gap-11'>
            <h1 className='text-3xl font-bold max-md:2xl'>Comments</h1>
            {
                status === 'unauthenticated' ? (
                    <p className='text-xl'>Login to comment</p>
                ) : (
                    <div>
                        <textarea className='w-full h-32 mt-4 p-4 rounded-md border-2 border-gray-300 bg-transparent' placeholder='Yorumunuz..'></textarea>
                        <button className='bg-red-600 text-white rounded-md px-4 py-2 mt-4'>Comment</button>
                    </div>
                )
            }
            <div>
                <div className='flex gap-4 mt-6'>
                    <Image className='w-10 h-10 rounded-[50%] bg-yellow-300 bg-green-300 bg-orange-300 bg-pink-300 bg-red-300 bg-blue-300'  src="/p1.jpeg" width={50} height={50} alt=''/>
                    <div className='flex-1'>
                        <h6 className='text-lg'>William Randolp</h6>
                        <p className='text-xs'>25 April 2023</p>
                    </div>
                </div>
                <p className='mt-4'>Lorem ipsum dolor sit amet consec</p>
            </div>
        </div>
    )
}

export default index