"use client"
import { useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { BsFillCameraVideoFill, BsImageFill, BsPlusCircleFill } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

const page = () => {

    const [open, setOpen] = useState(true);
    const [value, setValue] = useState('');

    console.log(value)

    return (
        <div className='flex flex-col gap-14 mt-16 relative'>
            <input className='max-sm:w-[50%] w-[80%] text-2xl py-2 border-transparent bg-transparent max-sm:text-base' type="text" placeholder='title' />
            <div className='flex gap-6 items-center h-9 w-full'>
                <button onClick={() =>{
                    setOpen(!open)
                }}>
                    <BsPlusCircleFill size={35} color="gray" />
                </button>
                {open && (
                    <div className='flex gap-5 border border-green-500 rounded-lg w-max px-5 py-2 '>
                        <button>
                            <BsImageFill size={25} color="green" />
                        </button>
                        <button>
                            <BsFillCameraVideoFill size={25} color="green" />
                        </button>
                        <button>
                            <BiLinkExternal size={25} color="green" />
                        </button>

                    </div>

                )}

            </div>
            <ReactQuill className='h-60' theme="bubble" value={value} onChange={setValue} placeholder='Tell your story...' />
            <button className='absolute top-0 right-0 text-xl border-2 rounded-lg font-bold py-2 px-3 max-sm:text-base'>Publish</button>
        </div>
    )
}

export default page