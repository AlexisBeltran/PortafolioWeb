import React from 'react'

const ExperienciaCard = ({experiencia}) => {
    const {desde, hasta, lugar, ruta_img} = experiencia;
    return (
        <div id='experienciaCard'>
            <p>{desde}-{hasta} <span>{lugar}</span></p>
            <img src={ruta_img} alt={lugar} />
        </div>
    )
}

export default ExperienciaCard
