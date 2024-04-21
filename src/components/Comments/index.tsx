"use client";

import React from 'react'
import Image from 'next/image';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { url } from 'inspector';

interface Params {
    postSlug: string;
}





const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    if(!res.ok){
        const error = new Error(data.message);
        throw error
    }

    return data
}

const formatCreatedAt = (createdAt: string): string => {
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    return formattedDate;
  };

const index = ({postSlug} : Params) => {

    const [desc, setDesc] = React.useState('')
    const status = useSession()

    const { data, mutate, isLoading } = useSWR(`https://www.sakaryakentfm.com/api/comments?postSlug=${postSlug}`, fetcher)

    const handleSubmit = async () => {
        await fetch('https://www.sakaryakentfm.com/api/comments', {
            method: 'POST',
            body: JSON.stringify({desc, postSlug}),
        });
        setDesc('');
        mutate();
    }


    return (
        <div className='mt-11 flex flex-col gap-11'>
            <h1 className='text-3xl font-bold max-md:2xl'>Comments</h1>
            {
                status.status !== 'authenticated' ? (
                    <div> 
                    <p className='text-xl text-red-600 '>Login to comment</p>
                    <textarea className='w-full h-32 mt-4 p-4 rounded-md border-2 border-gray-300 bg-transparent' disabled placeholder='Yorumunuz..'></textarea>
                    </div>
                ) : (
                    <div>
                        <textarea
                         className='w-full h-32 mt-4 p-4 rounded-md border-2 border-gray-300 bg-transparent' 
                         placeholder='Yorumunuz..'
                         onChange={(e) => {setDesc(e.target.value)}}
                         value={desc}
                         ></textarea>
                        <button
                         className='bg-red-600 text-white rounded-md px-4 py-2 mt-4'
                         onClick={handleSubmit}
                         >Comment</button>
                    </div>
                )
            }
            {
                
                isLoading ? (
                    <p className='text-xl'>Loading...</p>
                ) : (
                    data?.map((comment: any) => (

                        <div className='flex gap-4' key={comment.id}>
                            <div className='w-10 h-10 rounded-full overflow-hidden'>
                                <Image src={comment.user.image} alt={comment.user.name} width={40} height={40} />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl font-semibold'>{comment.user.name}</p>
                                <p className='text-xs opacity-75'>{formatCreatedAt(comment.createdAt)}</p>
                                <div className='flex flex-col gap-3 max-md:text-sm w-[300px]' dangerouslySetInnerHTML={{ __html: comment.desc }} />

                            </div>
                            <div className='bg-blue-300 bg-red-300 bg-yellow-300 bg-green-300 bg-orange-300 bg-pink-300'></div>
                        </div>
                    ))
                )   
            }
        </div>
    )
}

export default index
