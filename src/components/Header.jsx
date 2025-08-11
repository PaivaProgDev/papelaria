import { IoMenuSharp } from "react-icons/io5"
import Links from "./Links"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { ButtonWhats } from "./Button"
import { TextBlue, TextPink } from "./TextColor"


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    openMenu ? document.body.style.overflowY = 'hidden' :
        document.body.style.overflowY = 'auto'

    const { links } = Links()
    return (
        <div className="sticky top-0 z-50">
            <header className="flex items-center px-6 py-3 relative z-20 border-b bg-white border-zinc-200 justify-between">
                <h1 className="text-2xl">Logo</h1>
                {
                    openMenu ? <IoMdClose onClick={handleOpenMenu} className="size-7 cursor-pointer" /> : <IoMenuSharp onClick={handleOpenMenu} className="size-7 lg:hidden block cursor-pointer" />
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
            </header>
            <div onClick={() => setOpenMenu(false)} className={`${openMenu ? "visible opacity-100" : "invisible opacity-0"} fixed duration-200 w-full h-full bg-[#00000082]`}>
                <div onClick={(e) => e.stopPropagation()} className={`${openMenu ? "lg:right-0 top-[57px]" : "lg:-right-full -top-full "} lg:top-[57px] duration-300 px-7 py-5 bg-zinc-100 ease-in-out fixed lg:w-55 lg:h-full w-full lg:bottom-0 border-l border-zinc-200`}>
                    <nav>
                        <ul className="flex justify-between sm:justify-center gap-10  ">
                            {
                                links.map((l, index) => (
                                    <li className="text-zinc-800" key={index}>
                                        <TextBlue className='flex items-center flex-col gap-1'>
                                            {l.icon}
                                            {l.title}
                                        </TextBlue>
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
        </div>
    )
}

export default Header
