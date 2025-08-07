import React from 'react'
import { TextPink } from './TextColor'
import Button from './Button'
import { CiStar } from 'react-icons/ci'
import ImageHero from '../assets/images/img-hero.png'

const Hero = () => {
    return (
        <main className='max-w-[90rem]  text-zinc-700 sm:flex items-center justify-evenly m-auto px-6 py-18 text-center sm:text-start'>
            <div className='flex flex-col max-w-150 items-center sm:items-start'>
                <h2 className='flex items-center gap-2 mb-6'>
                    <CiStar className='size-8 text-yellow-500' />
                    <span className='text-pink-600'>Bem-vindos à nossa loja</span>
                </h2>
                <h1 className='text-5xl sm:text-6xl font-black mb-6'>Muito mais que <TextPink>papelaria</TextPink></h1>
                <p className='text-lg mb-7'>Aqui você encontra <TextPink>estilo, presentes e inspiração.</TextPink></p>
                <p >Produtos de papelaria, moda criativa e presentes encantadores — tudo com amor, para quem ama detalhes.</p>
                <Button />
            </div>
            <div>
                <img className='w-full mt-10 sm:mt-0 bg-pink-100 rounded-3xl max-w-150 ' src={ImageHero} alt="Foto de Lápis, papel, canetas..." />
            </div>
        </main >
    )
}

export default Hero
