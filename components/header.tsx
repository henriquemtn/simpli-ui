import Link from 'next/link'
import React from 'react'
import QuickSearch from './quick-search'

export default function Header() {
  return (
    <div className='border-b border-gray-600  w-full'>
        <div className='max-w-screen-lg mx-auto p-6'>
            <div className='flex justify-between items-center'>
                <div className='font-bold text-xl'>Simpli UI</div>
                <div className='flex items-center space-x-6'>
                    <Link href='#'>Github</Link>
                    <Link href='#'>Follow us</Link>
                    <QuickSearch />
                </div>
            </div>
        </div>
    </div>
  )
}
