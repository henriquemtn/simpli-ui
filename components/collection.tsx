import React from 'react'
import CardComponents from './card-components'
import cardMap from '@/data/Cards'

export default function Collection() {
    return (
        <div className='max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            {cardMap.map(card => (
                <CardComponents key={card.id} {...card} />
            ))}
        </div>
    )
}
