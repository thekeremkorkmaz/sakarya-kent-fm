import React from 'react';
import Comments from '@/components/Comments';

interface Props {
  data: string;
  slug: string;
  keyVal: string;
}

const index = ({ data, slug, keyVal }: Props) => {

  if (!data) {
    return (
      <div className='flex-5'>
        <div className='flex flex-col gap-3 max-md:text-sm'>
          <p className='text-2xl font-semibold max-md:text-lg'>Opppsss birşeyler yanlış gitti... </p>
        </div>
      </div>
    )
  }


  return (
    <div className='flex-5'>
      <div className='w-48'>
        <p className='custom-paragraph-style'>{data}</p>
      </div>
      <Comments postSlug={slug} />
    </div>
  );
};

export default index;
