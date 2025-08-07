import { FaWhatsapp } from "react-icons/fa"

const Button = ({ className }) => {
    return <button className={`${className} bg-[#22c55e] flex items-center gap-3 py-2 px-5 rounded-full text-white cursor-pointer hover:bg-white border-2 mt-10 border-[#22c55e] hover:text-[#22c55e] duration-300`}><FaWhatsapp className="size-5" />Chamar no WhastApp</button>
}

export default Button
