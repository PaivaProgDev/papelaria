import React from 'react'
import Cards from './Cards'
import { LuShoppingBag } from 'react-icons/lu'
import { TextPink } from './TextColor'

const BestSellers = () => {
    return (
        <div className='text-center max-w-[90rem] mx-auto px-6 m-20'>
            <h2 className='flex  items-center justify-center gap-2 mb-3'>
                <LuShoppingBag className='size-7 text-yellow-500' />
                <span className='text-pink-600'>Best Sellers</span>
            </h2>
            <h1 className=" mb-4.5">
                <TextPink className={'mb-10 text-4xl font-black'}>
                    Produtos mais Vendidos
                </TextPink>
            </h1>
            <Cards />
        </div>
    )
}

export default BestSellers
