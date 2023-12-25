import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { signOut, useSession } from 'next-auth/react';
import HamburgerMenu from '@/components/HamburgerMenu';
import { useGenerationStore } from '@/store/idea-generation'


const Index = () => {
  const { status } = useSession();

  const { showMenu, setShowMenu } = useGenerationStore()

  // Linklere tıklanınca menüyü kapat
  const closeMenu = () => {
    setShowMenu(false);
  };


  return (
    <div>
      <div className='max-md:hidden'>
        {status === 'unauthenticated' ? (
          <>
            <Link href="/login">
              <a onClick={closeMenu}>Login</a>
            </Link>
          </>
        ) : (
          <div className='flex gap-3'>
            <Link href="/write">
              <a onClick={closeMenu}>Write</a>
            </Link>
            <span
              onClick={() => {
                signOut();
                closeMenu();
              }}
              className='cursor-pointer'
            >
              Logout
            </span>
          </div>
        )}
      </div>
      <div className='hidden max-md:flex cursor-pointer'>
        <GiHamburgerMenu size={25} onClick={() => setShowMenu(!showMenu)} />
        {showMenu && <HamburgerMenu />}
      </div>
    </div>
  );
};

export default Index;
