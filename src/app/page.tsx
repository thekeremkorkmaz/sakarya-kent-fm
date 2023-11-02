import Image from 'next/image'
import Link from 'next/link'
import Featured from '@/components/Featured'
import CategoryList from '@/components/CategoryList'
import CardList from '@/components/CardList'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <div className='flex flex-col gap-28 mt-11'>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
     
    </div>
  )
}
