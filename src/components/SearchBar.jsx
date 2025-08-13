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
        e === '' ? setShowItems(false) : setShowItems(true)
        const normalize = e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const filtered = data.filter(f => f.title.toLowerCase().includes(normalize.toLowerCase()))
        e ? setShowItems(true) : setShowItems(false)
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
            <label className="flex items-center z-10 w-full bg-slate-100 focus-within:outline-2 border-zinc-300 outline-violet-500 gap-2 border rounded-lg py-1.5 px-4">
                <FaMagnifyingGlass className="text-zinc-500" />
                <input onChange={(e) => {
                    handleInputValue(e.target.value)
                }} className="placeholder:text-zinc-400 w-full text-sm outline-0" type="serach" placeholder="Pesquisar produto..." />
            </label>
            {showItems &&
                <>
                    <div onClick={() => setShowItems(false)} className="top-0 bottom-0 right-0 -z-10 left-0 bg-[#000000d5] fixed"></div>
                    <div className={` absolute shadow-xl py-5 w-full  flex justify-between rounded-b-2xl bg-zinc-50 top-10.5 sm:top-11.5`}>
                        {itemSearched.length ?
                            <ul className={`${itemSearched ? "block" : "hidden"} w-full overflow-y-auto h-60`} >
                                <div className="px-6">
                                    <IoMdClose onClick={() => setShowItems(false)} className="place-self-end cursor-pointer size-6 mb-2 text-red-400" />
                                </div>
                                {
                                    itemSearched.map((searched) => (
                                        <li key={searched.id} className={`border-zinc-300 `}>
                                            {/* <img className="w-25 h-18 object-cover" src={searched.img} alt="" /> */}
                                            <div className="w-full ">
                                                <span className="text-sm flex items-center gap-6 justify-between px-6 cursor-pointer py-2 hover:bg-zinc-300 w-full font-light">
                                                    <span>{searched.title}</span>
                                                    <span><HiMagnifyingGlass /></span>
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul> :
                            <div className="w-full px-6">
                                <div className="px-6 ">
                                    <IoMdClose onClick={() => setShowItems(false)} className="place-self-end cursor-pointer size-6 mb-2 text-red-400" />
                                </div>
                                <p className="text-sm text-center font-light">Nenhum produto encontrado...</p>
                            </div>}
                    </div>
                </>
            }
        </div >

    )
}

export default SearchBar
