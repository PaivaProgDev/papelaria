import { IoMenuSharp } from "react-icons/io5"
import Links from "./Links"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { ButtonWhats } from "./Button"
import { TextBlue, TextPink } from "./TextColor"
import SearchBar from "./SearchBar"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const { links } = Links()
    return (
        <header className="sticky top-0">
            <div className="flex items-center gap-10 z-[999] px-6 py-3  border-b bg-white border-zinc-200 justify-between">
                <h1 className="text-2xl">Logo</h1>
                <div className="hidden w-full  justify-center max-w-200 sm:flex">
                    <SearchBar />
                </div>
                {
                    openMenu ? <span><IoMdClose onClick={handleOpenMenu} className="size-7 text-red-400 cursor-pointer" /></span> : <span><IoMenuSharp onClick={handleOpenMenu} className="size-7 lg:hidden block cursor-pointer" /></span>
                }
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-10">
                        {
                            links.map((l, index) => (
                                <li className="text-zinc-800 text-sm cursor-pointer" key={index}>
                                    <a href={l.href}>
                                        <TextBlue className='flex items-center flex-col gap-2'>
                                            {l.title}
                                        </TextBlue>
                                    </a>
                                </li>
                            ))
                        }
                        <ButtonWhats className={'!mt-0 !p-1.5 text-sm'} ></ButtonWhats>
                    </ul>
                </nav>
            </div>
            <div onClick={() => setOpenMenu(false)} className={`${openMenu ? "visible opacity-100" : "invisible opacity-0"} fixed duration-200 w-full bg-w z-50 h-full bg-[#00000082]`}>
                <div onClick={(e) => {
                    e.stopPropagation()
                    setOpenMenu(false)
                }} className={`${openMenu ? "lg:right-0 top-[57px]" : "lg:-right-full -top-full "} lg:top-[57px] duration-300 px-7 py-5 bg-zinc-100 -z-50 ease-in-out fixed lg:w-55 lg:h-full w-full lg:bottom-0 border-l border-zinc-200`}>
                    <nav>
                        <ul className="grid grid-cols-2 place-self-center sm:grid-cols-3 gap-7 ">
                            {
                                links.map((l, index) => (
                                    <a href={l.href} className="text-zinc-800" key={index}>
                                        <TextBlue className='flex items-center flex-col gap-1'>
                                            {l.icon}
                                            {l.title}
                                        </TextBlue>
                                    </a>
                                ))
                            }
                        </ul>
                        <ButtonWhats className={' flex justify-center place-self-center mt-6 text-sm'} >
                            Chamar no WhatsApp
                        </ButtonWhats >
                    </nav>
                </div>
            </div>
            <div className="flex bg-white relative sm:hidden px-6 py-2">
                <SearchBar />
            </div>
        </header>
    )
}

export default Header
