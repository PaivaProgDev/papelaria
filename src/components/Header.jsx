import { IoMenuSharp } from "react-icons/io5"
import Links from "./Links"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import Button from "./Button"
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
        <div>
            <header className="flex items-center px-6 py-3 relative z-20 border-b bg-white border-zinc-200 justify-between">
                <h1 className="text-2xl">Logo</h1>
                {
                    openMenu ? <IoMdClose onClick={handleOpenMenu} className="size-7" /> : <IoMenuSharp onClick={handleOpenMenu} className="size-7 sm:hidden block cursor-pointer" />
                }
                <nav className="hidden sm:block">
                    <ul className="flex items-center gap-10">
                        {
                            links.map((l, index) => (
                                <li className="text-zinc-800 text-sm cursor-pointer" key={index}>
                                    <TextBlue className='flex items-center flex-col gap-2'>

                                        {l.title}
                                    </TextBlue>
                                </li>
                            ))
                        }
                        <Button className={'!mt-0 !py-1 text-sm'} />
                    </ul>
                </nav>
            </header>
            <div onClick={() => setOpenMenu(false)} className={`${openMenu ? "visible opacity-100" : "invisible opacity-0"} fixed duration-200 w-full h-full bg-[#00000082]`}>
                <div onClick={(e) => e.stopPropagation()} className={`${openMenu ? "sm:right-0 top-[57px]" : "sm:-right-full -top-full "} sm:top-[57px] duration-300 px-7 py-5 bg-zinc-100 ease-in-out fixed sm:w-55 sm:h-full w-full sm:bottom-0 border-l border-zinc-200`}>
                    <nav>
                        <ul className="flex justify-between gap-3  ">
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
                        <Button className={'w-full flex justify-center  text-sm'} />
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
