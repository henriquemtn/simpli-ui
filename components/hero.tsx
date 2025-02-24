import React from 'react'

export default function Hero() {
    return (
        <div className='max-w-screen-lg flex justify-center mx-auto px-4 py-12'>
            <div className="max-w-3xl text-center">
                <h1 className='font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]'>Beautiful UI components built with Tailwind CSS and React.</h1>
                <p className='text-gray-400 mb-8'>A collection of copy-and-paste components for quickly build application UIs.</p>
            </div>
        </div>
    )
}
