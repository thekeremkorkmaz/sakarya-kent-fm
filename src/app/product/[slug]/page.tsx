import React from 'react'
import Image from 'next/image'

import Menu from '@/components/Menu'
import SingleBlog from '@/components/SingleBlog'

const page = () => {
    return (
        <div className='mt-20 gap-24 flex-col flex'>
            <div className='flex gap-6 max-md:flex-col'>
                <div className='flex-1 justify-between gap-5 flex flex-col'>
                    <h5 className='text-5xl font-semibold max-md:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <div className='flex gap-4 items-center'>
                        <Image className='rounded-[50%] w-10 h-10' src="/p1.jpeg" alt='' height={40} width={40} />
                        <div className='opacity-75'>
                            <h6 className='text-lg max-md:text-md'>William Randolp</h6>
                            <p className='text-xs'>25 April 2023</p>
                        </div>
                    </div>

                </div>
                <div className='flex-1'>
                    <Image className='w-[600px] h-[300px] rounded-lg object-cover' src="/p1.jpeg" alt='' height={500} width={500} />
                </div>
            </div>
            <div className='flex gap-11 max-md:flex-col'>
                <SingleBlog />
                <Menu />
            </div>
        </div>
    )
}

export default page