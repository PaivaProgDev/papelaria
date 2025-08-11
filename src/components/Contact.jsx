import { FiMapPin, FiMessageCircle } from "react-icons/fi"
import { TextPink } from "./TextColor"
import { HiOutlineMail } from "react-icons/hi"
import { ButtonWhats } from "./Button"
import Map from "./Map"

const Contact = () => {
    return (
        <div id="contact" className="bg-[#fbf3fb]">
            <div className='text-center flex flex-col items-center max-w-[90rem] sm:px-6 mx-auto py-16 '>
                <h2 className='flex  items-center justify-center gap-2 mb-3'>
                    <FiMessageCircle className='size-7 text-yellow-500' />
                    <span className='text-pink-600'>Fale Conosco</span>
                </h2>
                <h1 className=" mb-4.5">
                    <TextPink className={'mb-10 text-4xl font-black'}>
                        Entre em contato
                    </TextPink>
                </h1>
                <p className="text-zinc-600">Dúvidas, pedidos ou sugestões? Fale conosco diretamente no WhatsApp.</p>
                <div className="flex flex-col w-full lg:flex-row items-center gap-10 mt-17">
                    <div className="bg-white p-8 flex flex-col gap-6 text-start  rounded-2xl shadow-xl">
                        <h1 className="text-start text-2xl text-zinc-700">Vamos conversar!</h1>
                        <div className="flex gap-3">
                            <span className="bg-[#dcfce7] text-2xl flex w-fit h-fit rounded-xl p-3">
                                <FiMessageCircle className="text-[#16a34a]" />
                            </span>
                            <div className="flex flex-col ">
                                <span className="font-medium">WhatsApp</span>
                                <span className="text-zinc-500 font-normal">(37) 99112-9432</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="bg-[#f3e8ff] text-2xl flex w-fit h-fit rounded-xl p-3">
                                <HiOutlineMail className="text-[#9333ea]" />
                            </span>
                            <div className="flex flex-col">
                                <span className="font-medium">E-mail</span>
                                <span className="text-zinc-500">papelariapresentes981@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="bg-[#fce7f3] text-2xl flex w-fit h-fit rounded-xl p-3">
                                <FiMapPin className="text-[#db2777]" />
                            </span>
                            <div className="flex flex-col">
                                <span className="font-medium">Endereço</span>
                                <span className="text-zinc-500">Rua Agostinho Teles de Castro, 856, Lourdes</span>
                            </div>
                        </div>
                        <ButtonWhats className={'w-full mt-2'} >
                            Enviar uma Mensagem
                        </ButtonWhats>
                    </div>
                    <div className="px-6">
                        <p className="mb-5 text-blue-500">Encontre nosso estabelecimento no mapa a baixo!</p>
                        <Map />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
