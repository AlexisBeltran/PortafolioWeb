import Github from "../Assets/Img/Github.svg";
import LinkedIn from "../Assets/Img/LinkedIn.svg";
import About from "../Assets/Img/AboutMe-Desktop.svg";
import AboutPhone from "../Assets/Img/AboutMe-Phone.svg"

const Navegacion = () => {
  return (
    <div className="h-screen">
        <nav className="py-7 flex flex-row justify-center md:justify-between items-center">
            <div className="hidden md:flex gap-x-4">
                <a className="text-white text-lg" href="#experiencia">Experiencia</a>
                <a className="text-white text-lg" href="#trabajos">Proyectos</a>
                <a className="text-white text-lg" href="#footer">Contacto</a>
            </div>
            <div className="flex justify-center gap-x-4" id="info-web">
                <a href="https://github.com/AlexisBeltran"><img src={Github} alt="Github"/></a>
                <a href="https://www.linkedin.com/in/jes%C3%BAs-alexis-beltr%C3%A1n-hern%C3%A1ndez-50ab4b21a/"><img src={LinkedIn} alt="LinkedIn"/></a>
            </div>
        </nav>
        <header className="md:py-7 md:relative" id="header-show">
            <div className="flex md:flex-row items-center md:justify-between">
                <h1 className="flex flex-col" id="title-main">
                    ¡Hola!{""}
                    <span id="title-main-name">Soy Alexis Beltrán</span>
                    <span id="title-main-job">Desarrollador web.</span> 
                </h1>
            </div>
            <img src={About} className="md:absolute top-0 right-0 w-full h-auto object-cover sm:w-full md:w-1/2 hidden md:block"/>
            <img src={AboutPhone} className="md:absolute top-0 right-0 w-full h-auto object-cover sm:w-full md:w-1/2 block md:hidden"/>
        </header>
    </div>        
  )
}

export default Navegacion
