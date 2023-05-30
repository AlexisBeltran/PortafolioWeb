import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import AgenciaViaje from "./../Assets/Img/agencia_viajes.png"
import Clima_App from "./../Assets/Img/Clima_App.png"
import portfolio from "./../Assets/Img/portfolio.png"
import apirest from "./../Assets/Img/API_REST.png"

import ArrowRight from "./../Assets/Icons/Arrow_right.svg"
import Button from "../Components/Button"


function Trabajos() {
  return (
    <section id="trabajos" className="my-3">
        <h1 className="mb-10">Últimos trabajos</h1>
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}        
                loop={true}  
                autoplay={{delay: 3000}}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="md:grid md:grid-cols-2 md:gap-14 flex flex-col items-center gap-5 pb-5">
                        <img src={AgenciaViaje} alt="Trabajos"/>
                        <div className="text-left flex flex-col justify-around h-full gap-10">
                            <h2 className="">Agencia de viajes</h2>
                            <p className="text-justify">El sitio web de la agencia de viajes es una plataforma en línea diseñada para ayudar a los usuarios a planificar y reservar sus viajes de manera fácil y conveniente.</p>
                            <p id="title_work">Tecnologias: <span>Pug, JavaScript, Express, Sequelize, Node.js, Bootstrap, CSS, MySQL, MVC, CI/CD.</span></p>
                            <a className="flex flex-row items-center gap-10" href="https://agencia.up.railway.app/" target="_blank">Ver proyecto <span><img src={ArrowRight} alt="arrow_right"/></span></a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:grid md:grid-cols-2 md:gap-14 items-center flex flex-col-reverse gap-5 pb-5">
                        <div className="text-left md:text-right flex flex-col justify-around h-full gap-10 items-start">
                            <h2 className="">Portafolio Web</h2>
                            <p className="text-justify">Mi portafolio web es una plataforma donde presento mis habilidades y experiencia profesionales. La página de inicio destaca mis áreas de especialización y habilidades más importantes, junto con ejemplos específicos de proyectos que he realizado en cada área</p>
                            <p id="title_work" className="text-left">Tecnologias: <span>React.js, Tailwind, React router v6, CSS, HTML, JavaScript y despliegue con Github Pages</span></p>
                            <a className="flex flex-row-reverse md:flex-row items-center justify-items-start md:justify-end gap-10" href="https://alexisbeltran.github.io/PortafolioWeb/" target="_blank">
                                Ver proyecto
                                <span>
                                    <img src={ArrowRight} alt="arrow_left" className="hidden md:block"/>
                                    <img src={ArrowRight} alt="arrow_right" className="block md:hidden"/>
                                </span>
                            </a>
                        </div>
                        <img src={portfolio} alt="Trabajos"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:grid md:grid-cols-2 md:gap-14 flex flex-col items-center gap-5 pb-5">
                        <img src={apirest} alt="Trabajos"/>
                        <div className="text-left flex flex-col justify-around h-full gap-10">
                            <h2 className="">API REST</h2>
                            <p className="text-justify">API REST para una aplicación de entrenamiento de CrossFit.</p>
                            <p id="title_work">Tecnologias: <span>Node.js, JavaScript, Express, CI/CD.</span></p>
                            <a className="flex flex-row items-center gap-10" href="https://apirestcrossfit-production.up.railway.app/api/v1/docs/" target="_blank">Ver proyecto <span><img src={ArrowRight} alt="arrow_right"/></span></a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='md:grid md:grid-cols-2 md:gap-14 flex flex-col items-center gap-5 pb-5'>
                        <img src={Clima_App} alt="Clima App"/>
                        <div className='text-left flex flex-col justify-around h-full gap-10'>
                            <h2>Clima App</h2>
                            <p className='text-justify'>Buscador de clima en tiempo real ya sea por ciudad, estado o país.</p>
                            <p id='title_work'>Tecnologias: <span>HTML, CSS, JavaScript, React.js, API, CI/CD</span></p>
                            <a className='flex flex-row items-center gap-10' href='https://alexisbeltran.github.io/weatherApp/' target='_black'>Ver proyecto <span><img src={ArrowRight} alt="arrow_right"/></span></a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            
            
            
        </div>

        <Button/>

    </section >
  )
}

export default Trabajos
