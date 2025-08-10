import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css/effect-flip'
import 'swiper/css/bundle'

const Cards = () => {
    const [data, setData] = useState([])

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
    }
    return (
        <Carousel itemClass="px-2" responsive={responsive}>
            {data &&
                data.map((p) => (
                    <div key={p.id} className="bg-pink-50 text-start rounded-xl">
                        <img
                            className="rounded-t-xl object-cover h-[250px] w-full"
                            src={p.img}
                            alt=""
                        />
                        <div className="px-4.5 py-3">
                            <h4 className="text-zinc-700 font-light mb-7 ">{p.title}</h4>
                            <a href="#">
                                <button className="cursor-pointer flex items-center bg-[#22c55e] gap-3 py-1.5 px-5 rounded-full text-sm text-white">
                                    <FaWhatsapp />
                                    Verificar estoque
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
        </Carousel>
    )
}

export default Cards
