import { RiSpeakFill } from "react-icons/ri"
import { TextBlue, TextPink } from "./TextColor"
import { LiaStarSolid } from "react-icons/lia"
import { ButtonWhats } from "./Button"
import LogoPerson from '../assets/images/logo-person.png'
import { Link } from "react-router-dom"
import { CgChevronRight } from "react-icons/cg"

const Testimonials = () => {
    const commentarys = [
        {
            text: "Amei a Daniela, a dona do lugar, tudo muito bem organizado. Ótima qualidade.",
            name: "Carla Matos.",
            status: "Cliente"
        },
        {
            text: "Encontrei presentes únicos e especiais. Recomendo de olhos fechados!",
            name: "Ana Marabo",
            status: "Cliente"
        },
        {
            text: "A variedade de produtos de papelaria é incrível. Sempre encontro o que preciso.",
            name: "Maria Clara",
            status: "Cliente"
        },
        {
            text: "Tudo muito lindo, com muito bom gosto! Atendimento impecável.",
            name: "Reinaldo Alves",
            status: "Cliente"
        },
    ]

    return (
        <div id="testimonials" className='text-center max-w-[90rem] mt-18 mb-12 mx-auto px-6'>
            <h2 className='flex  items-center justify-center gap-2 mb-3'>
                <RiSpeakFill className='size-7 text-yellow-500' />
                <span className='text-pink-600'>Depoimentos</span>
            </h2>
            <h1 className=" mb-4.5">
                <TextPink className={'mb-10 text-4xl font-black'}>
                    O que dizem nossos clientes
                </TextPink>
            </h1>
            <p className="text-zinc-600">Os clientes nos amam, um pouco do nosso feedback!</p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-self-center gap-6 mt-15">
                {
                    commentarys.map((client, index) => (
                        <li key={index} className="border-2 max-w-100 flex flex-col justify-between border-pink-100 bg-gradient-to-br from-[#fcf2f8] to-blue-50 rounded-3xl p-7">
                            <div className="flex text-yellow-500 place-self-center mb-7 text-2xl">
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                            </div>
                            <p className="text-lg text-zinc-700">{client.text}</p>
                            <div className="flex flex-col items-start mt-5">
                                <TextPink>- {client.name}</TextPink>
                                <span className="text-zinc-500 text-sm">{client.status}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-self-center rounded-3xl mt-20">
                <img src={LogoPerson} className="max-w-90 w-full" alt="Foto de duas crianças mulheres abraçando" />
                <div className="flex flex-col gap-8">
                    <TextBlue className="text-2xl font-black sm:w-80">Você também terá uma ótima experiência.</TextBlue>
                    <div>
                        <ButtonWhats className={'w-full'} >
                            Chamar no WhatsApp
                        </ButtonWhats>
                        <Link to={'/catalog'} className="bg-white mt-3 group flex items-center gap-1.5 py-2 px-5 rounded-full group text-sm text-blue-500 justify-center w-full cursor-pointer hover:bg-blue-500 border-2 border-blue-500 hover:text-white duration-300">
                            Ver produtos
                            <span><CgChevronRight className="group-hover:animate-pulse size-5" /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
