import { useEffect, useState } from "react"
import { BiChevronRight } from "react-icons/bi"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { IoMdClose } from "react-icons/io"

const SearchBar = () => {
    const [data, setData] = useState([])
    const [itemSearched, setItemSearched] = useState([])
    const [showItems, setShowItems] = useState(false)

    const handleInputValue = (e) => {
        const value = e.target.value
        setShowItems(value !== "")
        const normalize = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtered = data.filter(f => f.title.toLowerCase().includes(normalize.toLowerCase()))
        setItemSearched(filtered)

    }

    useEffect(() => {
        const products = async () => {
            const res = await fetch('/products.json')
            const dataProduct = await res.json()
            setData(dataProduct)
        }
        products()
    }, [])

    return (
        <div className="relative w-full flex justify-center">
            <label className="flex items-center z-10 w-full bg-slate-100 focus-within:outline-2 border-zinc-300 outline-violet-500 gap-2 border py-1.5 px-4">
                <input onChange={handleInputValue} className="placeholder:text-zinc-400 w-full text-sm outline-0" type="serach" placeholder="Pesquisar produto..." />
                <FaMagnifyingGlass className="text-zinc-500" />
            </label>
            {showItems &&
                <>
                    <div onClick={() => setShowItems(false)} className="top-0 bottom-0 right-0 -z-10 left-0 bg-[#000000d5] fixed"></div>
                    <div className={` absolute shadow-xl w-full flex justify-between bg-zinc-50 top-8.5 border border-t-0 border-zinc-200`}>
                        {itemSearched.length ?
                            <ul className={`${itemSearched ? "block" : "hidden"} w-full overflow-y-auto `} >
                                {
                                    itemSearched.map((searched) => (
                                        <li key={searched.id} className={`border-zinc-300 `}>
                                            {/* <img className="w-25 h-18 object-cover" src={searched.img} alt="" /> */}
                                            <div className="w-full ">
                                                <span className="text-sm flex items-center gap-4 px-3 py-2 cursor-pointer hover:bg-zinc-300 w-full font-light">
                                                    <span><HiMagnifyingGlass /></span>
                                                    <span>{searched.title}</span>
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul> :
                            <div className="w-full px-3 py-2">
                                <p className="text-sm text-center font-light">Nenhum produto encontrado...</p>
                            </div>}
                    </div>
                </>
            }
        </div >

    )
}

export default SearchBar
