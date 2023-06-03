import { useLoaderData } from "react-router-dom";
import ExperienciaCard from "../Components/ExperienciaCard";
import Acuicultec from "../Assets/Img/Acuicultec.svg"

//ESTA FUNCIÓN ES IDEAL PARA CARGAR UN STATE, CONSULTAR UNA API Y OBTENER UN RESULTADO QUE QUIERAS MOSTRAR EN UN COMPONENTE
export async function loader(){
    try{
        const experiencia = await fetch("../../locales/es.json");
        const experienciaJSON = await experiencia.json();
        experienciaJSON.experiencia.trabajos = experienciaJSON.experiencia.trabajos.map((items) => {
            return {
                ...items,
                "ruta_img" : Acuicultec 
            }
        });
        return experienciaJSON;
    }catch(error){
        return null;
    }
}

const Experiencia = () => {
    const experiencia = useLoaderData();
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
