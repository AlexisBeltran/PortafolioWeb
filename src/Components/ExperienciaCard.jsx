import React from 'react'

const ExperienciaCard = ({experiencia}) => {
    const {desde, hasta, lugar, ruta_img} = experiencia;
    return (
        <div id='experienciaCard' className='p-5 h-60'>
            <div className='flex flex-row items-center justify-left gap-1' id='trafic-light'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='flex flex-col justify-between mt-2' id="body-card">
                <p>{desde}-{hasta} <span>{lugar}</span></p>
                <img src={ruta_img} alt={lugar} />
            </div>
            
        </div>
    )
}

export default ExperienciaCard
