import { useLoaderData } from "react-router-dom";
import ExperienciaCard from "../Components/ExperienciaCard";
import Acuicultec from "../Assets/Img/Acuicultec.svg"

//ESTA FUNCIÓN ES IDEAL PARA CARGAR UN STATE, CONSULTAR UNA API Y OBTENER UN RESULTADO QUE QUIERAS MOSTRAR EN UN COMPONENTE
export function loader(){
    const experiencia = [
        {
            id: 1,
            lugar: "Acuicultec",
            desde: 2021,
            hasta: "presente",
            ruta_img: Acuicultec
        }
    ]
    return experiencia;
}

const Experiencia = () => {
    const experiencia = useLoaderData();
    return (
        <section id="experiencia">
            <h1>Experiencia</h1>
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
        </section>
    )
}

export default Experiencia
