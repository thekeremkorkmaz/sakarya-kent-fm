"use client";
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {

  const {data, status} = useSession()

  const router = useRouter()

  if(status === 'loading'){
    return <div>Loading...</div>
  }

  if(status === 'authenticated'){
    router.push('/')
  }

  return (
    <div className='flex items-center justify-center mt-24 '>
        <div className='bg-gray-300 py-28 px-32 flex flex-col gap-9 text-xl max-sm:text-base text-white rounded-lg max-sm:py-24 max-sm:px-16'>
            <div onClick={()=>{
              signIn('google')
            }} className='py-4 cursor-pointer px-6 max-sm:px-4 rounded-lg bg-red-500'>Sign in with Google</div>
            <div className='py-4 cursor-pointer px-6 max-sm:px-4 rounded-lg bg-black'>Sign in with Github</div>
            <div  className='py-4 cursor-pointer px-6 max-sm:px-4 rounded-lg bg-blue-500'>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default page