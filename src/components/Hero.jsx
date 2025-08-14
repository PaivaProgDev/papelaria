import { TextPink } from './TextColor'
import { ButtonInsta, ButtonWhats } from './Button'
import { CiStar } from 'react-icons/ci'
import ImageHero from '../assets/images/img-hero.png'

const Hero = () => {
    return (
        <main id='hero' className='bg-gradient-to-br px-6 py-12 md:px-12 from-pink-200 to-blue-200'>
            <div className='max-w-[90rem] text-zinc-700 flex flex-col lg:flex-row items-center justify-evenly m-auto text-center gap-10 sm:text-start'>
                <div className='flex flex-col max-w-150 '>
                    <h2 className='flex items-center gap-2 mb-6'>
                        <CiStar className='size-8 text-yellow-500' />
                        <span className='text-pink-600'>Bem-vindos à nossa loja</span>
                    </h2>
                    <h1 className='text-5xl sm:text-6xl font-black mb-6'>Muito mais que <TextPink>papelaria</TextPink></h1>
                    <p className='text-lg mb-7'>Aqui você encontra <TextPink>estilo, presentes e inspiração.</TextPink></p>
                    <p >Produtos de papelaria, moda criativa e presentes encantadores — tudo com amor, para quem ama detalhes.</p>
                    <div className='flex flex-col sm:max-w-full sm:flex-row items-center gap-5 mt-9'>
                        <ButtonWhats className={'!w-full'}>
                            Chamar no WhatsApp
                        </ButtonWhats>
                        <ButtonInsta className={'!w-full'} />
                    </div>
                </div>
                <div>
                    <img className='w-full max-w-150' src={ImageHero} alt="Foto de Lápis, papel, canetas..." />
                </div>
            </div>
        </main>
    )
}

export default Hero
