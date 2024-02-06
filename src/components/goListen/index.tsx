"use client";
import React from 'react';

const Index = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <button className='bg-black py-2 px-4 text-white rounded-lg text-center' onClick={handleScrollToBottom}>Radyomuzu Dinleyin!</button>
    </div>
  );
};

export default Index;
