import React from 'react';
import Comments from '@/components/Comments';

interface Props {
  data: string;
  slug: string;
  keyVal: string;
}

const Index: React.FC<Props> = ({ data, slug, keyVal }: Props) => {
  if (!data) {
    return (
      <div className='flex-5'>
        <div className='flex flex-col gap-3 max-md:text-sm'>
          <p className='text-2xl font-semibold max-md:text-lg'>Opppsss birşeyler yanlış gitti... </p>
        </div>
      </div>
    );
  }

  const formatText = (text: string): string => {
    const maxLength = 40;
    const words = text.split(/\s+/); // Boşluklara göre kelimeleri ayır

    const formattedText = words.reduce((result: string[], word: string) => {
      let currentLine = result.length > 0 ? result[result.length - 1] : ''; // Son satırı al

      if ((currentLine + word).length <= maxLength) {
        result[result.length - 1] = `${currentLine} ${word}`;
      } else {
        result.push(word);
      }

      return result;
    }, []);

    return formattedText.join('<br />');
  };

  const formattedData = formatText(data);

  return (
    <div className='flex-5'>
      <div key={keyVal} className='flex flex-col gap-3 max-md:text-sm w-[300px]' dangerouslySetInnerHTML={{ __html: formattedData }} />
      <Comments postSlug={slug} />
    </div>
  );
};

export default Index;
