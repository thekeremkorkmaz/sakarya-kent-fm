import React from 'react';
import Link from 'next/link';
import { AuthLinksProps } from '@/types/index';

const Index = () => {
  const status:AuthLinksProps["status"] = 'authenticated';

  return (
    <>
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
    </>
  );
};

export default Index;
