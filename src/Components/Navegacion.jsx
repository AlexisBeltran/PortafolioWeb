import Github from "../Assets/Img/Github.svg";
import LinkedIn from "../Assets/Img/LinkedIn.svg";
import About from "../Assets/Img/AboutMe-Desktop.svg";

const Navegacion = () => {
  return (
    <div className="h-screen">
        <nav className="py-7 flex flex-row justify-center md:justify-between items-center">
            <div className="hidden md:flex gap-x-4">
                <a className="text-white text-lg" href="#experiencia">Experiencia</a>
                <a className="text-white text-lg" href="">Proyectos</a>
                <a className="text-white text-lg" href="">Contacto</a>
            </div>
            <div className="flex justify-center gap-x-4" id="info-web">
                <img src={Github} alt="Github"/>
                <img src={LinkedIn} alt="LinkedIn"/>
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
            <img src={About} className="md:absolute top-0 right-0 w-full h-auto object-cover sm:w-full md:w-1/2"/>       
        </header>
    </div>        
  )
}

export default Navegacion
