import { IoMenuSharp } from "react-icons/io5"
import Links from "./Links"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { ButtonWhats } from "./Button"
import { TextBlue } from "./TextColor"
import { Link } from "react-router-dom"
import Logo from "./Logo"

const Header = ({ catalog }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const { links, linksCatalog } = Links()
    return (
        <header className="sticky top-0 z-[1000] shadow-lg">
            <div className="flex items-center gap-10 z-[999] px-6 py-3  border-b bg-white border-zinc-200 justify-between">
                <Link to={'/'}>
                    <Logo className='w-full max-w-20' />
                </Link>
                {
                    openMenu ? <span><IoMdClose onClick={handleOpenMenu} className="size-7 text-red-400 cursor-pointer" /></span> : <span><IoMenuSharp onClick={handleOpenMenu} className="size-7 lg:hidden block cursor-pointer" /></span>
                }
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-10">
                        {
                            !catalog && links.map((l, index) => (
                                <li className="text-zinc-800 text-sm cursor-pointer" key={index}>
                                    <a href={l.href}>
                                        <TextBlue className='flex items-center flex-col gap-2'>
                                            {l.title !== "Catálogo" && l.title}
                                        </TextBlue>
                                    </a>
                                    <Link to={l.to}>
                                        <TextBlue className='flex items-center flex-col gap-2'>
                                            {l.title === "Catálogo" && l.title}
                                        </TextBlue>
                                    </Link>
                                </li>
                            ))
                        }
                        {
                            catalog && linksCatalog.map((l, index) => (
                                <li className="text-zinc-800 text-sm cursor-pointer" key={index}>
                                    <Link to={l.to}>
                                        <TextBlue className='flex items-center flex-col gap-2'>
                                            {l.title}
                                        </TextBlue>
                                    </Link>
                                </li>
                            ))
                        }
                        <ButtonWhats className={'!mt-0 !p-1.5 text-sm'} ></ButtonWhats>
                    </ul>
                </nav>
            </div>
            <div onClick={() => setOpenMenu(false)} className={`${openMenu ? "visible opacity-100" : "invisible opacity-0"} fixed duration-200 w-full  h-full bg-[#00000082]`}>
                <div onClick={(e) => {
                    e.stopPropagation()
                    setOpenMenu(false)
                }} className={`${openMenu ? "lg:right-0 top-[57px]" : "lg:-right-full -top-full "} lg:top-[57px]  duration-300 px-7 py-5 bg-zinc-100  ease-in-out fixed lg:w-55 lg:h-full w-full lg:bottom-0 border-l border-zinc-200`}>
                    <nav>
                        <ul className={`${catalog ? "grid-cols-1" : "grid-cols-2"} grid place-self-center sm:grid-cols-3 gap-7`}>
                            {
                                !catalog && links.map((l, index) => (
                                    <li key={index}>
                                        <a href={l.href} className="text-zinc-800" >
                                            <TextBlue className='flex items-center flex-col gap-1'>
                                                {l.title !== "Catálogo" && l.icon}
                                                {l.title !== "Catálogo" && l.title}
                                            </TextBlue>
                                        </a>
                                        <Link to={l.to} className="text-zinc-800">
                                            <TextBlue className='flex items-center flex-col gap-1'>
                                                {l.title === "Catálogo" && l.icon}
                                                {l.title === "Catálogo" && l.title}
                                            </TextBlue>
                                        </Link>
                                    </li>
                                ))
                            }
                            {
                                catalog && linksCatalog.map((l, index) => (
                                    <li className="text-zinc-800 text-sm cursor-pointer" key={index}>
                                        <Link to={l.to}>
                                            <TextBlue className='flex items-center flex-col gap-2'>
                                                {l.icon}
                                                {l.title}
                                            </TextBlue>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ButtonWhats className={' flex justify-center place-self-center mt-6 text-sm'} >
                            Chamar no WhatsApp
                        </ButtonWhats >
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
