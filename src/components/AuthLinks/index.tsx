"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import { AuthLinksProps } from '@/types/index';
import { GiHamburgerMenu } from 'react-icons/gi'

import HamburgerMenu from '@/components/HamburgerMenu';

const Index = () => {
  const status: AuthLinksProps["status"] = 'authenticated';

  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div>
      <div className='max-md:hidden'>
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
