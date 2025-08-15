import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css/effect-flip'
import 'swiper/css/bundle'
import { ButtonWhats, ButtonWhatsProduct } from "./Button";

const Cards = () => {
    const [data, setData] = useState([])
    const [productMessage, setProductMessage] = useState('')
    const message = `Olá, eu gostei`

    useEffect(() => {
        const products = async () => {
            const res = await fetch('/products.json')
            const dataProduct = await res.json()
            setData(dataProduct)

        }
        products()
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel itemClass="mt-12 " containerClass="z-10" responsive={responsive}>
            {data &&
                data.map((p) => (
                    <div
                        key={p.id}
                        className="text-start max-w-90 rounded-xl group"
                    >
                        <ButtonWhatsProduct title={p.title} price={p.price} className="cursor-pointer group-hover:bg-amber-200 group w-full h-full flex flex-col !border-0">
                            <div className="h-[200px] relative overflow-hidden rounded-t-xl">
                                <img
                                    className="rounded-t-xl group-hover:scale-105 duration-300  object-cover h-full w-full"
                                    src={p.img}
                                    alt="Imagem do produto"
                                />
                                <div className="absolute opacity-0 group-hover:opacity-100 duration-400 bg-[#0000001f] w-full flex justify-center items-center h-full top-0">

                                    <span className=" bg-[#22C55E] flex items-center gap-2 font-light text-white px-4 p-2 rounded-2xl">
                                        <span><FaWhatsapp className="size-5" /></span>
                                        Verificar Estoque
                                    </span>
                                </div>
                            </div>
                            <div className=" px-3 py-2 pt-3 text-center flex items-center flex-col w- min-h-[100px] bg-white mt-6">
                                <h4 className="text-zinc-500 font-medium text-sm max-w-50  w-full mb-2">{p.title}</h4>
                                <pre className="flex justify-center items-center gap-1">
                                    <span className="text-sm font-light">R$</span>
                                    <span className="text-xl text-zinc-700">{p.price}</span>
                                </pre>
                            </div>
                        </ButtonWhatsProduct>
                    </div>
                ))}
        </Carousel>
    )
}

export default Cards
