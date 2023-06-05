import React, { useState } from 'react'
import Acuicultec from "../Assets/Img/Acuicultec.svg"

const ExperienciaCard = ({experiencia}) => {
    const {desde, hasta, lugar, tecnologias, titulo_tec, img} = experiencia;
    const [imgRoute, setImgRoute] = useState({
        "ruta_img" : Acuicultec
    });
    
    return (
        <div id='experienciaCard' className='p-5 h-80'>
            <div className='flex flex-row items-center justify-left gap-1' id='trafic-light'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='flex flex-col justify-between mt-2 h-full' id="body-card">
                <p className='flex-grow-0 flex-shrink-0 flex-basis-auto mt-2'>{desde}-{hasta} <span className='font-bold'>{lugar}</span></p>
                <p id="tech">{titulo_tec}: <span>{tecnologias}</span></p>
                <img src={imgRoute[img]} alt={lugar} className="flex-1"/>

            </div>
        </div>
    )
}

export default ExperienciaCard
