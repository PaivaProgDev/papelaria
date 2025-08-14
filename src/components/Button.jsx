import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export const ButtonWhats = ({ className, children }) => {
    return (
        <a target="_blank" className={`${className} bg-[#22c55e] w-fit flex items-center gap-3 py-2 px-5 rounded-full text-sm text-white justify-center cursor-pointer hover:bg-white border-2  border-[#22c55e] hover:text-[#22c55e] duration-300`} href="https://wa.me/5537991129432">
            <FaWhatsapp className="size-5" />
            {children}
        </a>
    )
}

export const ButtonWhatsProduct = ({ className, children, title, price }) => {
    return (
        <a target="_blank" href={`https://wa.me/5537991129432?text=Olá,%20tem%20*${title}*%20por%20*${price}*?`}>
            {children}
        </a>
    )
}

export const ButtonInsta = ({ className, children }) => {
    return <a href="https://www.instagram.com/papelariapresente2024/" className={`${className} bg-gradient-to-r w-fit text-sm from-[#b517b9] to-[#f66e3b] flex items-center gap-3 justify-center py-2 px-5 rounded-full text-white cursor-pointer hover:to-white hover:from-white border-2  border-[#b517b9] hover:text-[#b517b9] duration-300`}><FaInstagram className="size-5" />Instagram</a>
}

