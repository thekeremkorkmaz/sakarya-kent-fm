"use client"
import { useState } from 'react';
import { BsFillCameraVideoFill, BsImageFill, BsPlusCircleFill } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Page = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState('');

  const formattedValue = `<p>${value}</p>`;
  
  console.log(formattedValue);

  return (
    <div className='flex flex-col gap-14 mt-16 relative'>
      <input className='max-sm:w-[50%] w-[80%] text-2xl py-2 border-transparent bg-transparent max-sm:text-base' type="text" placeholder='title' />
      <div className='flex gap-6 items-center h-9 w-full'>
        <button onClick={() => setOpen(!open)}>
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
      <div>
        <textarea 
          onChange={(e) => setValue(e.target.value)}
          className='max-w-[50%] h-36 w-[80%] text-2xl border-black bg-transparent max-sm:text-base'
          placeholder='Text'
        ></textarea>
      </div>

      <button className='absolute top-0 right-0 text-xl border-2 rounded-lg font-bold py-2 px-3 max-sm:text-base'>Publish</button>
    </div>
  );
}

export default Page;
