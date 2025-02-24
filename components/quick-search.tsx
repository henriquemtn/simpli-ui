import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function QuickSearch() {
    return (
        <div className='max-w-max'>
            <div className='border flex items-center rounded-full border-gray-600 text-gray-400 px-4 py-2'>
                <BiSearch />
                <input className='border-none bg-transparent focus:outline-none text-xs' placeholder='Quick search' />
                <span className='text-xs'>⌘K</span>
            </div>
        </div>
    )
}
