"use client"
import React, { useState, useEffect } from 'react';
import { BsFillCameraVideoFill, BsImageFill, BsPlusCircleFill } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

const Page = () => {
  const { status } = useSession();

  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(true); 
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState("");
  const [quillFocused, setQuillFocused] = useState(false);
  const [quillContent, setQuillContent] = useState('');



  useEffect(() => {
    const storage = getStorage(app);

    const upload = () => {
      if (!file) return;
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => { },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const handleQuillChange = (content: string) => {
    setQuillContent(content);
  };

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    if (!title || !value || !media || !catSlug) {
      console.log('error');
    }

    const res = await fetch('https://sakarya-kent-fm.vercel.app/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug,
      }),
    });

    console.log(res);
  };

  return (
    <div className='flex flex-col gap-14 mt-16 relative'>
      <input
        className='max-sm:w-[100%] w-[80%] text-2xl py-2 px-2 border-transparent bg-transparent max-sm:text-base'
        type="text"
        placeholder='title'
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <div className='flex gap-6 items-center h-9 w-full'>
        <button onClick={() => setOpen(!open)}>
          <BsPlusCircleFill size={35} color="gray" />
        </button>
        {open && (
          <div className='flex gap-5 border border-green-500 rounded-lg w-max px-5 py-2 '>
            <input
              type="file"
              id='image'
              className='hidden'
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
            />
            <select onChange={(e) => setCatSlug(e.target.value)}>
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
            <label className='cursor-pointer' htmlFor="image">
              <BsImageFill size={25} color="green" />
            </label>
            <button>
              <BsFillCameraVideoFill size={25} color="green" />
            </button>
            <button>
              <BiLinkExternal size={25} color="green" />
            </button>
          </div>
        )}
      </div>
      <div className='h-56 max-sm:w-[50%] w-[80%] max-sm:text-base border'>
        <ReactQuill
          theme="bubble"
          id='desc'
          value={quillContent}
          onChange={handleQuillChange}
          placeholder='Yazmaya başlayın...'
          onFocus={() => setQuillFocused(true)}
          onBlur={() => setQuillFocused(false)}
        />
        {quillFocused && (
          <input
            type="text"
            className='hidden'
            onFocus={() => setQuillFocused(true)} // Odaklandığında ReactQuill'e odaklanması sağlanır
          />
        )}
      </div>
      <button
        className='absolute top-0 right-0 text-xl border-2 rounded-lg font-bold py-2 px-3 max-sm:text-base'
        onClick={handleSubmit}
      >Publish</button>
    </div>
  );
}

export default Page;
