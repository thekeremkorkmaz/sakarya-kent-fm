import React from 'react';
import Paginaiton from '@/components/Pagination';
import Card from '@/components/Card';

const Index = () => {


  return (
    <div className='md:flex-5'>
      <h1 className='text-3xl font-bold max-md:2xl'>Popular Categories</h1>
      <div className='flex flex-col gap-11 mt-11'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Paginaiton />
    </div>
  );
};

export default Index;
