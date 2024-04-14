"use client";
import React from 'react';
import Link from 'next/link';
import { useGenerationStore } from '@/store/idea-generation';
import { AuthLinksProps } from '@/types/index';
import { useSession, signOut } from 'next-auth/react';

const Index = () => {
  const { status, data } = useSession();
  const { showMenu, setShowMenu } = useGenerationStore();

  // E-posta adresinin belirli bir formata uygun olup olmadığını kontrol et
  const isValidEmail = data?.user?.email === 'azratekin400@gmail.com' ||
    data?.user?.email === 'keremkorkmaz54@gmail.com';

  return (
    <div className='flex items-center justify-center flex-col left-0 px-5 py-6 absolute h-[100%] bg-black text-white text-3xl w-full z-50 gap-10 top-16 '>
          <Link className='max-md:hidden' href="/">Anasayfa</Link>
          <Link className='max-md:hidden' href="/">Radyo</Link>
          <Link className='max-md:hidden' href="/">Podcastler</Link>
          <Link className='max-md:hidden' href="/">Hakkımda</Link>
          <Link className='max-md:hidden' href="/">Blog</Link>
          <Link className='max-md:hidden' href="/">iletişim</Link>
      {status === 'unauthenticated' ? (
        <>
          <Link onClick={() => setShowMenu(false)} href="/login">
            Giriş
          </Link>
        </>
      ) : (
        <>
          {/* Eğer e-posta uygunsa, "Write" linkini göster */}
          {isValidEmail && (
            <Link onClick={() => setShowMenu(false)} href="/write">
              Write
            </Link>
          )}
          <span
            onClick={() => {
              setShowMenu(false);
              signOut();
            }}
            className='cursor-pointer'
          >
            Çıkış Yap
          </span>
        </>
      )}
    </div>
  );
};

export default Index;
