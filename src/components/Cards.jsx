import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css/effect-flip'
import 'swiper/css/bundle'
import { ButtonWhats } from "./Button";

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
            breakpoint: { max: 664, min: 0 },
            items: 1
        }
    }
    return (
        <Carousel itemClass="mt-12 px-3" containerClass="z-10" responsive={responsive}>
            {data &&
                data.map((p) => (
                    <div key={p.id} className="bg-violet-50 border border-zinc-200  text-start flex-1 max-w-90 rounded-xl">
                        <div className="bg-white rounded-t-xl p-3">
                            <img
                                className="rounded-t-xl object-cover  h-[200px] w-full"
                                src={p.img}
                                alt=""
                            />
                        </div>
                        <div className="px-6 py-6 border-t border-zinc-200">
                            <h4 className="text-zinc-700 font-normal text-lg mb-4 ">{p.title}</h4>
                            <pre className="flex items-end gap-1 mb-4">
                                <span className="text-md font-light">R$</span>
                                <span className="text-2xl text-zinc-700">{p.price}</span>
                            </pre>
                            <ButtonWhats className="cursor-pointer w-full rounded-lg ">
                                Verificar estoque
                            </ButtonWhats>
                        </div>
                    </div>
                ))}
        </Carousel>
    )
}

export default Cards
