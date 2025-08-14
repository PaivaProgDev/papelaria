import { useEffect, useState } from "react"
import { ButtonWhats, ButtonWhatsProduct } from "../components/Button"
import { TextBlue, TextPink } from '../components/TextColor'
import { FaMagnifyingGlass, FaWhatsapp } from "react-icons/fa6"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { BiInfoCircle } from "react-icons/bi"

const Catalog = () => {
    const [data, setData] = useState([])
    const [itemSearched, setItemSearched] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(true)


    const handleInputValue = (e) => {
        const value = e.target.value
        setSearchValue(value)
        const normalize = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtered = data.filter(f => f.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalize.toLowerCase()))
        setItemSearched(filtered)
    }


    useEffect(() => {
        const products = async () => {
            const res = await fetch('/allProducts.json')
            const dataProduct = await res.json()
            setData(dataProduct)

            document.body.style.overflowY = 'hidden'
            await new Promise((p) => setTimeout(p, 1500))
            document.body.style.overflowY = 'auto'

            setLoading(false)
        }
        products()
    }, [])

    return (
        <>
            {loading && <div className="fixed z-[99] flex flex-col items-center gap-5 justify-center top- right-0 left-0 bottom-0 w-full h-full bg-gradient-to-bl from-violet-400 to-blue-400">
                <span className="text-xl font-light text-white">Carregando produtos...</span>
                <span className="loader"></span>
            </div>}
            <Header catalog />
            <div className={` flex-col px-6 py-10 bg-gradient-to-br from-sky-100 to-60% to-pink-100`}>
                <h3 className="text-5xl font-extrabold text-center md:text-start mb-4"><TextPink>Catálogo</TextPink></h3>
                <p className="text-zinc-500 text-center sm:text-start text-sm">Explore nossos produtos, use a barra de pesquisa para encontrar seu produto ideal!</p>
                <div className="relative w-full flex mt-7 justify-center">
                    <label className="flex items-center z-10 w-full bg-slate-100 focus-within:outline-2 border-zinc-300 outline-violet-500 gap-2 border py-1.5 px-4">
                        <input onChange={handleInputValue} className="placeholder:text-zinc-400 w-full text-sm outline-0" type="serach" placeholder="Pesquisar produto..." />
                        <FaMagnifyingGlass className="text-zinc-500" />
                    </label>
                </div >
                <div className="flex gap-1 mt-5">
                    <span><BiInfoCircle className="text-green-600 size-5" /></span>
                    <p className="text-sm text-green-600 text-center">Toque no produto para verificar o estoque pelo WhatsApp</p>
                </div>
                <ul className={`${searchValue && itemSearched.length === 0 ? "flex" : "grid"}  md:grid-cols-2  lg:grid-cols-3  h-full xl:grid-cols-4 place-self-center mt-15 gap-8`}>
                    {searchValue && itemSearched.length === 0 && (
                        <div className="w-full h-full min-h-120 bg-white text-zinc-700">
                            Não encontramos nenhum produto :(
                        </div>
                    )}
                    {(searchValue ? itemSearched : data)?.map((p) => (
                        <li
                            key={p.id}
                            className="max-w-90 sm:max-w-80 h-full group
                            ">
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
                                <div className=" px-3 py-2 pt-3 text-center flex items-center flex-col w-full shadow-lg min-h-[100px] bg-white rounded-lg mt-6">
                                    <h4 className="text-zinc-500 font-medium text-sm max-w-50  w-full mb-2">{p.title}</h4>
                                    <pre className="flex justify-center items-center gap-1">
                                        <span className="text-sm font-light">R$</span>
                                        <span className="text-xl text-zinc-700">{p.price}</span>
                                    </pre>
                                </div>
                            </ButtonWhatsProduct>
                        </li>
                    ))}
                </ul>
            </div >
        </>
    )
}

export default Catalog
