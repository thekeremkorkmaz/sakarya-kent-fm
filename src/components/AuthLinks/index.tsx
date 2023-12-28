"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { signOut, useSession } from 'next-auth/react';
import HamburgerMenu from '@/components/HamburgerMenu';
import { useGenerationStore } from '@/store/idea-generation'
import { toast } from 'react-toastify';


const Index = () => {
  const { status, data } = useSession();

  const { showMenu, setShowMenu } = useGenerationStore()

  // Linklere tıklanınca menüyü kapat
  const closeMenu = () => {
    setShowMenu(false);
  };

 const isValidEmail = data?.user?.email === 'azratekin400@gmail.com';

  // Eğer e-posta uygun değilse, "Write" linkini devre dışı bırak
  if (!isValidEmail) {
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
            <div className={`flex gap-3`}>
              {/* "Write" linkini devre dışı bırak */}
              <span className="text-gray-500 cursor-not-allowed"
              onClick={()=>{
                toast.error('Bu sayfaya erişim yetkiniz bulunmamaktadır. Yetkililerle iletişime geçiniz.')
              }}
              >Write</span>
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
  }

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
          <div className={`flex gap-3`}>
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
