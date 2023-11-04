import Featured from '@/components/Featured'
import CategoryList from '@/components/CategoryList'
import CardList from '@/components/CardList'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <div className='flex flex-col gap-28 mt-44 max-lg:mt-16 max-md:mt-11'>
      <Featured />
      <CategoryList />
      <div className='flex gap-11 max-md:flex-col'>
        <CardList />
        <Menu />
      </div>
     
    </div>
  )
}
