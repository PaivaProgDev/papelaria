import { BiPencil } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"
import { IoBagHandleSharp, IoCall, IoHome } from "react-icons/io5"
import { MdMessage } from "react-icons/md"

const Links = () => {
    const links = [
        {
            title: "Início",
            icon: <IoHome className="size-6  text-blue-400" />,
            href: "#hero"
        },
        {
            title: "Sobre",
            icon: <BiPencil className="size-6  text-blue-400" />,
            href: "#about"
        },
        {
            title: "Produtos",
            icon: <IoBagHandleSharp className="size-6  text-blue-400" />,
            href: "#bestSellers"
        },
        {
            title: "Depoimentos",
            icon: <MdMessage className="size-6  text-blue-400" />,
            href: "#testimonials"
        },
        {
            title: "Contato",
            icon: <IoCall className="size-6  text-blue-400" />,
            href: "#contact"
        }
    ]

    return { links }
}

export default Links
