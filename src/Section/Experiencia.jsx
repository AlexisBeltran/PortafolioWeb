import ExperienciaCard from "../Components/ExperienciaCard";
import { useState } from "react";
import UseIdioma from "../Hooks/UseIdioma";
import { useLoaderData } from "react-router-dom";

//ESTA FUNCIÓN ES IDEAL PARA CARGAR UN STATE, CONSULTAR UNA API Y OBTENER UN RESULTADO QUE QUIERAS MOSTRAR EN UN COMPONENTE

const Experiencia = () => {
    const experiencia = useLoaderData();

    const [routeImg, setRouteImg] = useState("");
    const experiencia_card = experiencia.experiencia.trabajos;
    const Titulo = experiencia.experiencia.titulo;
    return (
        <section id="experiencia" className="relative py-10">
            <div>
                <h1 className="mb-10">{Titulo}</h1>
                <div className="md:grid md:grid-cols-3 md:gap-3 block">
                    {
                        experiencia_card.map(exp => {
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
