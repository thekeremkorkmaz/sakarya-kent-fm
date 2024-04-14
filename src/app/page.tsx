import Featured from '@/components/Featured'
import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import Listen from '@/components/Listen'
import GoListen from '@/components/goListen'

export default function Home({searchParams} : any) {
  
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className='flex flex-col gap-28 mt-44 max-lg:mt-16 max-md:mt-11'>
      <GoListen />
      <div className='relative top-36'>
      <Listen />

      </div>
      <Featured />
      <div id="list" className='flex gap-11 max-md:flex-col'>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  )
}
