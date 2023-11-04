import React from 'react'
import Menu from '@/components/Menu'
import CardList from '@/components/CardList'

const page = () => {
    return (
        <div className='flex-col flex gap-12 mt-14'>
            <h3 className='text-6xl font-semibold bg-red-600 py-5 text-center text-white rounded-lg'>Style Blog's</h3>
            <div className='flex gap-11 max-md:flex-col'>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}

export default page