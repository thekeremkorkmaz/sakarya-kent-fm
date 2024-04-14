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
          <Link onClick={() => setShowMenu(false)} href="/#list">Anasayfa</Link>
          <Link onClick={() => setShowMenu(false)} href="/#foot">Radyo</Link>
          <Link onClick={() => setShowMenu(false)} href="/#list">Podcastler</Link>
          <Link onClick={() => setShowMenu(false)} href="/#foot">Hakkımda</Link>
          <Link onClick={() => setShowMenu(false)} href="/#list">Blog</Link>
          <Link onClick={() => setShowMenu(false)} href="/#foot">iletişim</Link>
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
