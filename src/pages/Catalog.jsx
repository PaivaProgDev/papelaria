import { useEffect, useState } from "react"
import { ButtonWhats } from "../components/Button"
import { TextBlue, TextPink } from '../components/TextColor'
import { FaMagnifyingGlass } from "react-icons/fa6"
import Header from "../components/Header"

const Catalog = () => {
    const [data, setData] = useState([])
    const [itemSearched, setItemSearched] = useState([])
    const [searchValue, setSearchValue] = useState("")

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
        }
        products()
    }, [])

    return (
        <>
            <Header catalog />
            <div className={` flex-col px-6 py-10`}>
                <h3 className="text-5xl font-extrabold mb-4"><TextPink>Catálogo</TextPink></h3>
                <TextBlue>Explore nossos produtos, use a barra de pesquisa para encontrar seu produto!</TextBlue>
                <div className="relative w-full flex mt-7 justify-center">
                    <label className="flex items-center z-10 w-full bg-slate-100 focus-within:outline-2 border-zinc-300 outline-violet-500 gap-2 border py-1.5 px-4">
                        <input onChange={handleInputValue} className="placeholder:text-zinc-400 w-full text-sm outline-0" type="serach" placeholder="Pesquisar produto..." />
                        <FaMagnifyingGlass className="text-zinc-500" />
                    </label>
                </div >
                <ul className={`${searchValue && itemSearched.length === 0 ? "flex" : "grid"}  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-self-center mt-15 gap-5`}>
                    {searchValue && itemSearched.length === 0 && <p className="w-full text-zinc-700">Não encontramos nenhum produto :(</p>}

                    {searchValue && itemSearched.length !== 0 && itemSearched.map((p) => (
                        <li key={p.id} className="bg-violet-50 border border-zinc-200  text-start flex-1 max-w-90 rounded-xl">
                            <div className="bg-white rounded-t-xl p-3">
                                <img
                                    className="rounded-t-xl object-cover  h-[200px] w-full"
                                    src={p.img}
                                    alt=""
                                />
                            </div>
                            <div className="px-6 py-6 border-t border-zinc-200">
                                <h4 className="text-zinc-700 font-normal text-md mb-4 ">{p.title}</h4>
                                <pre className="flex items-end gap-1 mb-4">
                                    <span className="text-md font-light">R$</span>
                                    <span className="text-2xl text-zinc-700">{p.price}</span>
                                </pre>
                                <ButtonWhats className="cursor-pointer w-full rounded-lg ">
                                    Verificar estoque
                                </ButtonWhats>
                            </div>
                        </li>
                    ))}

                    {!searchValue && data?.map((p) => (
                        <li key={p.id} className="bg-violet-50 border border-zinc-200  text-start flex-1 max-w-90 rounded-xl">
                            <div className="bg-white rounded-t-xl p-3">
                                <img
                                    className="rounded-t-xl object-cover  h-[200px] w-full"
                                    src={p.img}
                                    alt=""
                                />
                            </div>
                            <div className="px-6 py-6 border-t border-zinc-200">
                                <h4 className="text-zinc-700 font-normal text-md mb-4 ">{p.title}</h4>
                                <pre className="flex items-end gap-1 mb-4">
                                    <span className="text-md font-light">R$</span>
                                    <span className="text-2xl text-zinc-700">{p.price}</span>
                                </pre>
                                <ButtonWhats className="cursor-pointer w-full rounded-lg ">
                                    Verificar estoque
                                </ButtonWhats>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Catalog
