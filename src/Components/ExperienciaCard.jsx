import React from 'react'

const ExperienciaCard = ({experiencia}) => {
    const {desde, hasta, lugar, ruta_img} = experiencia;
    return (
        <div id='experienciaCard' className='p-5 h-80'>
            <div className='flex flex-row items-center justify-left gap-1' id='trafic-light'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='flex flex-col justify-between mt-2 h-full' id="body-card">
                <p className='flex-grow-0 flex-shrink-0 flex-basis-auto mt-2'>{desde}-{hasta} <span className='font-bold'>{lugar}</span></p>
                <p id="tech">Tecnologias: <span>PHP, MySQL, HTML, CSS, Javascript, Git, Github, SASS, MVC, Active record como ORM</span></p>
                <img src={ruta_img} alt={lugar} className="flex-1"/>

            </div>
        </div>
    )
}

export default ExperienciaCard
