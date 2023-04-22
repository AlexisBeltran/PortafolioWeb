import TrabajosImg from "./../Assets/Img/Trabajos.svg"
import AgenciaViaje from "./../Assets/Img/agencia_viajes.png"
import portfolio from "./../Assets/Img/portfolio.png"
import ArrowLeft from "./../Assets/Icons/Arrow_left.svg"
import ArrowRight from "./../Assets/Icons/Arrow_right.svg"
import Button from "../Components/Button"

function Trabajos() {
  return (
    <section id="trabajos" className="my-3">
        <h1 className="mb-10">Últimos trabajos</h1>
        <div className="flex flex-col gap-10">
            <div className="md:grid md:grid-cols-2 md:gap-14 flex flex-col items-center mt-6 gap-5">
                <img src={AgenciaViaje} alt="Trabajos"/>
                <div className="text-left flex flex-col justify-around h-full gap-10">
                    <h2 className="">Agencia de viajes</h2>
                    <p className="text-justify">El sitio web de la agencia de viajes es una plataforma en línea diseñada para ayudar a los usuarios a planificar y reservar sus viajes de manera fácil y conveniente.</p>
                    <p id="title_work">Tecnologias: <span>Pug, JavaScript, Express, Sequelize, Node.js, Bootstrap, Css, CI/SD.</span></p>
                    <a className="flex flex-row items-center gap-10" href="https://agencia.up.railway.app/" target="_blank">Ver proyecto <span><img src={ArrowRight} alt="arrow_right"/></span></a>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-14 items-left mt-6 flex flex-col-reverse gap-5">
                <div className="text-left md:text-right flex flex-col justify-around h-full gap-10 items-start">
                    <h2 className="">Portafolio Web</h2>
                    <p className="text-justify">Mi portafolio web es una plataforma donde presento mis habilidades y experiencia profesionales. La página de inicio destaca mis áreas de especialización y habilidades más importantes, junto con ejemplos específicos de proyectos que he realizado en cada área</p>
                    <p id="title_work" className="text-left">Tecnologias: <span>React, Tailwind, React router v6, Css, Html5, JavaScript y despliegue con Github Pages</span></p>
                    <a className="flex flex-row-reverse md:flex-row  items-center justify-items-start md:justify-end gap-10" href="https://alexisbeltran.github.io/PortafolioWeb/" target="_blank">
                        <span>
                            <img src={ArrowLeft} alt="arrow_left" className="hidden md:block"/>
                            <img src={ArrowRight} alt="arrow_right" className="block md:hidden"/>
                        </span> Ver proyecto
                    </a>
                </div>
                <img src={portfolio} alt="Trabajos"/>
            </div>
        </div>

        <Button/>

    </section >
  )
}

export default Trabajos
