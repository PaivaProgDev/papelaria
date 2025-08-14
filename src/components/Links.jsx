import { BiPencil } from "react-icons/bi"
import { GrCatalog } from "react-icons/gr"
import { IoCall, IoHome } from "react-icons/io5"
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
            title: "Catálogo",
            icon: <GrCatalog className="size-6  text-blue-400" />,
            to: "/catalog"
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
    const linksCatalog = [
        {
            title: "Início",
            icon: <IoHome className="size-6  text-blue-400" />,
            to: "/"
        },
    ]

    return { links, linksCatalog }
}

export default Links
