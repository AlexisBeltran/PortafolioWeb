import { useLoaderData } from "react-router-dom";
import ExperienciaCard from "../Components/ExperienciaCard";
import Acuicultec from "../Assets/Img/Acuicultec.svg"

//ESTA FUNCIÓN ES IDEAL PARA CARGAR UN STATE, CONSULTAR UNA API Y OBTENER UN RESULTADO QUE QUIERAS MOSTRAR EN UN COMPONENTE
export function loader(){
    const experiencia = [
        {
            id: 1,
            lugar: "Acuicultec",
            desde: 2022,
            hasta: "Presente",
            ruta_img: Acuicultec
        }
    ]
    return experiencia;
}

const Experiencia = () => {
    const experiencia = useLoaderData();
    return (
        <section id="experiencia" className="relative py-10">
            <div>
                <h1 className="mb-10">Experiencia</h1>
                <div className="md:grid md:grid-cols-3 md:gap-3 block">
                    {
                        experiencia.map(exp => {
                            return(
                                <ExperienciaCard
                                    experiencia={exp}
                                    key={exp.id}
                                />
                            )
                        })
                    }
                </div>
                
            </div>
            <div id="background-section" className="absolute top-0 left-0"></div>
        </section>
    )
}

export default Experiencia
