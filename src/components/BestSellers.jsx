import Cards from './Cards'
import { LuShoppingBag } from 'react-icons/lu'
import { TextPink } from './TextColor'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BestSellers = () => {
    return (
        <div id='bestSellers' className='text-center max-w-[90rem] mx-auto px-6 py-15'>
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
            <Link to={'/catalog'} className='text-blue-600 cursor-pointer mt-5 border-b place-self-center flex items-center gap-2'>
                Ver catálogo
                <BsArrowRight />
            </Link>
        </div>
    )
}

export default BestSellers
