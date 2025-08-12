import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { IoMailOutline } from "react-icons/io5"
import Links from "./Links"
import { TextBlue } from "./TextColor"
import { FiMapPin } from "react-icons/fi"
import { LuMessageCircle } from "react-icons/lu"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
    const { links } = Links()

    return (
        <footer className="pt-16 px-6 bg-[#111827] text-zinc-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 pb-16 max-w-[90rem] mx-auto  gap-13">
                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl">Logo</h3>
                    <p>
                        Transformando o comum em especial através de produtos únicos de papelaria, moda e presentes. Cada item é escolhido com carinho para expressar seu estilo.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                            <a target="_blank" href="https://wa.me/5537991129432" className="bg-[#22c55e] text-2xl flex w-fit h-fit rounded-full p-2">
                                <FaWhatsapp className="text-white text-lg" />
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <a target="_blank" href="https://" className="bg-[#ec4899] text-2xl flex w-fit h-fit rounded-full p-2">
                                <FaInstagram className="text-white text-lg" />
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <a target="_blank" href="https://" className="bg-[#3B82F6] text-2xl flex w-fit h-fit rounded-full p-2">
                                <IoMailOutline className="text-white text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-start flex-col gap-5">
                    <h4 className="text-2xl">Links Rápidos</h4>
                    <nav className="flex flex-col gap-2">
                        {
                            links.map((l, index) => (
                                <a key={index} href={l.href}>
                                    <TextBlue className='flex  flex-col gap-2'>
                                        {l.title}
                                    </TextBlue>
                                </a>
                            ))
                        }
                    </nav>
                </div>
                <div className="flex items-start  w-full  flex-col gap-5">
                    <h5 className="text-2xl">Contato</h5>
                    <a target="_blank" href="https://maps.app.goo.gl/rKn5LGnAcKFF9mkQ8" className="flex items-center gap-2">
                        <FiMapPin className="size-5" />
                        <span className="text-sm w-full font-extralight">Rua Agostinho Teles de Castro, 856, Lourdes</span>
                    </a>
                    <a target="_blank" href="https://wa.me/5537991129432" className="flex items-center gap-2">
                        <LuMessageCircle className="size-5" />
                        <span className="text-sm w-full font-extralight">(37) 99112-9432</span>
                    </a>
                    <a href="mailto:papelariapresentes981@gmail.com" className="flex items-center gap-2">
                        <HiOutlineMail className="size-5" />
                        <span className="text-sm w-full font-extralight">papelariapresentes981gmail.com</span>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/papelariapresente2024/" className="flex items-center gap-2">
                        <FaInstagram className="size-5" />
                        <span className="text-sm w-full font-extralight">@papelariapresente2024</span>
                    </a>
                </div>
            </div>
            <div className="text-center py-6 border-t border-zinc-700">
                <p className="font-extralight">© 2025 Papelaria Menino dos Olhos de Jesus - Todos os direitos Reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
