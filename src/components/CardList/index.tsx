import React from 'react';
import Paginaiton from '@/components/Pagination';
import Card from '@/components/Card';


interface PaginationProps {
  page: number;
  cat?: string;
}

const getData = async (page: number, cat?: string) => {
  const res = await fetch(`https://arlan-blog.vercel.app/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Networrrk response was not ok")
  }

  return res.json()

}


const Index: React.FC<PaginationProps> = async ({ page, cat }) => {

  const {posts, count} = await getData(page, cat)

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  

  return (
    <div className='md:flex-5'>
      <h1 className='text-3xl font-bold max-md:2xl'>Popular Categories</h1>
      <div className='flex flex-col gap-11 mt-11'>
        {
          posts?.map((item: any) => (
            <Card key={item.id} item={item} />
          ))
        }
      </div>
      <Paginaiton page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
};

export default Index;
