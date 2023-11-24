"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'
import { signOut, useSession } from 'next-auth/react';

import HamburgerMenu from '@/components/HamburgerMenu';

const Index = () => {
  
  const { status } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className='max-md:hidden'>
        {status === 'unauthenticated' ? (
          <>
            <Link href="/login">Login</Link>
          </>
        ) : (
          <div className='flex gap-3'>
            <Link href="/write">Write</Link>
            <span onClick={()=>{
              signOut()
            }} className='cursor-pointer'>Logout</span>
          </div>
        )}

      </div>
      <div className='hidden max-md:flex cursor-pointer'>
        <GiHamburgerMenu size={25} onClick={() => {
          setShowMenu(!showMenu);
        }}/>
        {showMenu && <HamburgerMenu />}
      </div>
    </div>

  );
};

export default Index;
