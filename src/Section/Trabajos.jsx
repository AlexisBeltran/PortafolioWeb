import { useLoaderData } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import ArrowRight from "./../Assets/Icons/Arrow_right.svg"
import Button from "../Components/Button"
import { useState } from "react";
import AgenciaViaje from "./../Assets/Img/agencia_viajes.png"
import Clima_App from "./../Assets/Img/Clima_App.png"
import portfolio from "./../Assets/Img/portfolio.png"
import apirest from "./../Assets/Img/API_REST.png";


function Trabajos() {
    const experiencia = useLoaderData();
    const [imgSource, setImgSource] = useState({
        "agencia_viajes" : AgenciaViaje,
        "clima_app" : Clima_App,
        "portfolio" : portfolio,
        "api_rest" : apirest 
    });
    return (
        <section id="trabajos" className="my-3">
            <h1 className="mb-10">{experiencia.ultimos_trabajos.titulo}</h1>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}        
                    loop={true}  
                    autoplay={{delay: 3000}}
                    pagination={{ clickable: true }}
                >
                    {
                        experiencia.ultimos_trabajos.trabajos.map(item => {
                            const {descripcion, enlace, img, redireccionar, tecnologias, titulo, titulo_tec} = item;
                            return(
                                <SwiperSlide>
                                    <div className="md:grid md:grid-cols-2 md:gap-14 flex flex-col items-center gap-5 pb-5">
                                        <img src={imgSource[img]} alt="Trabajos"/>
                                        <div className="text-left flex flex-col justify-around h-full gap-10">
                                            <h2 className="">{titulo}</h2>
                                            <p className="text-justify">{descripcion}</p>
                                            <p id="title_work">{titulo_tec}: <span>{tecnologias}.</span></p>
                                            <a className="flex flex-row items-center gap-10" href={enlace} target="_blank">{redireccionar} <span><img src={ArrowRight} alt="arrow_right"/></span></a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>

            <Button
                titulo={experiencia.descargar_cv.titulo}
            />

        </section >
    )
}

export default Trabajos
