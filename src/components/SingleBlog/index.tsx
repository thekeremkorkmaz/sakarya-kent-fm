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

  const htmlContent = typeof data === 'string' ? data : '';

  return (
    <div className='flex-5'>
      <div key={keyVal} className='flex flex-col gap-3 max-md:text-sm' dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Comments postSlug={slug}/>
    </div>
  );
};

export default index;
