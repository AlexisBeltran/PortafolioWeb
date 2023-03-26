import TrabajosImg from "./../Assets/Img/Trabajos.svg"
import ArrowLeft from "./../Assets/Icons/Arrow_left.svg"
import ArrowRight from "./../Assets/Icons/Arrow_right.svg"

function Trabajos() {
  return (
    <section id="trabajos" className="my-3">
        <h1 className="mb-10">Últimos trabajos</h1>
        <div className="flex flex-col gap-10">
            <div className="md:grid md:grid-cols-2 md:gap-14 flex flex-col items-center mt-6 gap-5">
                <img src={TrabajosImg} alt="Trabajos"/>
                <div className="text-left flex flex-col justify-around h-full gap-10">
                    <h2 className="">Nombre del proyecto</h2>
                    <p className="text-justify">Breve descripción del proyecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam dolores repellat ipsum consectetur ab, mollitia placeat cumque, dicta, debitis autem aliquam distinctio exercitationem illo hic architecto est? Ipsum, quae.</p>
                    <a className="flex flex-row items-center gap-10">Ver proyecto <span><img src={ArrowRight} alt="arrow_right"/></span></a>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-14 items-left mt-6 flex flex-col-reverse gap-5">
                <div className="text-left md:text-right flex flex-col justify-around h-full gap-10">
                    <h2 className="">Nombre del proyecto</h2>
                    <p className="text-justify">Breve descripción del proyecto, Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam dolores repellat ipsum consectetur ab, mollitia placeat cumque, dicta, debitis autem aliquam distinctio exercitationem illo hic architecto est? Ipsum, quae.</p>
                    <a className="flex flex-row-reverse md:flex-row  items-center justify-items-start md:justify-end gap-10">
                        <span>
                            <img src={ArrowLeft} alt="arrow_left" className="hidden md:block"/>
                            <img src={ArrowRight} alt="arrow_right" className="block md:hidden"/>
                        </span> Ver proyecto
                    </a>
                </div>
                <img src={TrabajosImg} alt="Trabajos"/>
            </div>
        </div>
    </section >
  )
}

export default Trabajos
