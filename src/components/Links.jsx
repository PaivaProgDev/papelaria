import { BiPencil } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"
import { IoBagHandleSharp, IoHome } from "react-icons/io5"
import { MdMessage } from "react-icons/md"

const Links = () => {
    const links = [
        {
            title: "Início",
            icon: <IoHome className="size-6  text-blue-400" />
        },
        {
            title: "Sobre",
            icon: <BiPencil className="size-6  text-blue-400" />
        },
        {
            title: "Produtos",
            icon: <IoBagHandleSharp className="size-6  text-blue-400" />
        },
        {
            title: "Depoimentos",
            icon: <MdMessage className="size-6  text-blue-400" />
        }
    ]

    return { links }
}

export default Links
