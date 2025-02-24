import React from 'react'
import Image from 'next/image'

interface CardProps {
    name: string;
    imageUrl: string;
    componentsNumber: number;
}

export default function CardComponents({ name, imageUrl, componentsNumber }: CardProps) {
    return (
        <div className='text-center'>
            <Image
                width={400}
                height={400}
                src={imageUrl}
                alt='example'
                className='rounded-lg'
            />
            <h2 className='mt-2 text-white font-bold text-sm'>{name}</h2>
            <span className='text-sm text-gray-400'>{componentsNumber} components</span>
        </div>
    )
}
