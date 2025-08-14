import { IoIosHeartEmpty, IoMdGift } from "react-icons/io";
import aboutImage from '../assets/images/img-about.png'
import { TextBlue, TextPink } from './TextColor'
import { PiPencilCircleFill } from "react-icons/pi";
import { TbDeviceAirpods, TbHanger } from "react-icons/tb";

const About = () => {

    return (
        <div className="bg-zinc-100">

            <div id="about" className="flex flex-col items-center md:flex-col text-center max-w-[90rem] mx-auto py-12 px-6 md:px-12  w-full overflow-hidden">
                <div className="flex flex-col-reverse md:gap-8 place-items-center md:flex-row max-w-400 ">
                    <img className="w-full max-w-120 md:max-w-100 lg:max-w-140 " src={aboutImage} alt="Foto 3D de cadernos, lápis e uma xícara de café" />
                    <div className="flex max-w-150 flex-col md:items-start">
                        <div>
                            <h2 className='flex items-center text-sm text-pink-600 justify-center md:justify-start gap-2 mb-3'>
                                <IoIosHeartEmpty className='size-7' />
                                <span>Nossa História</span>
                            </h2>
                            <h1 className="mt-6 mb-4.5">
                                <TextBlue className={'mb-10 text-4xl font-black'}>
                                    Sobre nós
                                </TextBlue>
                            </h1>
                        </div>
                        <div className="flex flex-col gap-6 md:text-start text-zinc-600 mb-7">
                            <p>
                                A Papelaria Encanto & Estilo nasceu para transformar o comum em especial. Oferecemos uma curadoria única de produtos de papelaria criativa, moda leve e presentes encantadores
                            </p>
                            <p>
                                Tudo escolhido com carinho para você expressar seu estilo em cada detalhe.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col place-self-center mt-14 w-full md:max-w-200 h-fit sm:flex-row gap-7">
                    <div className="flex flex-col items-center w-full shadow-xl bg-[#fdeaf3] p-6 rounded-3xl gap-2.5">
                        <PiPencilCircleFill className="text-[#ec4899] size-16" />
                        <TextPink><h3 className="w-30 text-xl font-bold text-center">Papelaria Criativa</h3></TextPink>
                        <p className="font-normal text-zinc-700">Produtos únicos e inspiradores</p>
                    </div>
                    <div className="flex flex-col items-center w-full shadow-xl bg-[#f3e9fd] p-6 rounded-3xl gap-2.5">
                        <TbDeviceAirpods className="text-[#a855f7] size-16" />
                        <TextBlue><h3 className="w-30 text-xl font-bold text-center">Para o dia a dia</h3></TextBlue>
                        <p className="font-normal text-zinc-700">Acessórios e Utilidades</p>
                    </div>
                    <div className="flex flex-col items-center w-full shadow-xl bg-[#e5f9fc] p-6 rounded-3xl gap-2.5">
                        <IoMdGift className="text-[#48bdec] size-16" />
                        <TextBlue><h3 className="w-30 text-xl font-bold text-center">Presentes Especiais</h3></TextBlue>

                        <p className="font-normal text-zinc-700">Para momentos únicos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
