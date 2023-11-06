"use client"
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BsFillCameraVideoFill, BsImageFill, BsPlusCircleFill } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';


const Page = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState('');


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
      <CKEditor
        editor={ClassicEditor}
        data="<p>Yazmaya başla..</p>"
        onReady={(editor) => {
          console.log("CKEditor5 React Component is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log( data );
        }}
      />
      <button className='absolute top-0 right-0 text-xl border-2 rounded-lg font-bold py-2 px-3 max-sm:text-base'>Publish</button>
    </div>
  );
}

export default Page;
