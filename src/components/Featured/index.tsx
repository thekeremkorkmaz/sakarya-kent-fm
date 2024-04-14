import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <div >
      <h1 className='md:text-5xl lg:text-7xl text-3xl leading-normal'><b> Sakarya Kent FM;</b> Şehrin En Fiyakalı Radyosu</h1>
      <div className='mt-16 md:gap-11 flex justify-center items-center'>
        <div className='md:flex-1'>
          <Image className='w-[500px] h-[500px] max-lg:w-[400px] max-lg:h-[400px]  max-md:hidden' src="/kent.png" height={500} width={400} alt='featured'/>
        </div>
        <div className='md:flex-1 flex gap-8 flex-col text-left'>
          <h2 className='text-4xl font-semibold max-md:text-2xl max-lg:text-2xl'>Sakarya Kent FM: Yeni Bir Nefes, Yepyeni Bir Ritim!</h2>
          <p className='text-md max-lg:text-sm opacity-75'>Şehrin En Fiyakalı Radyosu!

Türkçe Rap, Rock, Pop ve Jazz severleri bir araya toplayan tek radyo !

Sakarya'nın ritmini ve ruhunu yansıtan Sakarya Kent FM, şehrin en fiyakalı radyosu olarak kaliteli müzik, canlı yayınlar, radyo tiyatroları, sesli kitaplar, podcastler, talk showlar ile spordan sinemaya, borsadan tasavvufa, siyasetten felsefe ve bilime kadar pek çok program ile eşsiz bir deneyim sunuyor.

Şehrin ve dinleyenlerin nabzını tutan , en yeni şarkılar, sevilen klasikler ve birbirinden ilginç konuklarla dolu yayın akışıyla Sakarya Kent FM; Sakarya'nın vazgeçilmez radyosu.


SAKARYA KENT FM - GENEL YAYIN YÖNETMENİ:
KEREM KORKMAZ</p>
          <Link href={"/product/asdasdasdsad"} className='w-max px-4 py-3 max-md:px-3 max-md:py-2 border-2 bg-[#e5e5e5] text-black rounded-lg text-sm'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default index
