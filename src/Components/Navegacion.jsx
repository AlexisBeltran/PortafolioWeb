//COMPONENTES MUI CORE
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Github from "../Assets/Img/Github.svg";
import LinkedIn from "../Assets/Img/LinkedIn.svg";
import About from "../Assets/Img/AboutMe-Desktop.svg";
import AboutPhone from "../Assets/Img/AboutMe-Phone.svg"

const Navegacion = () => {
    const experiencia = useLoaderData();

    const [age, setAge] = useState("");
    const handleChange = (e) => {
        setAge(e.target.value);
    }

    return (
        <div className="h-screen">
            <nav className="py-7 flex flex-row justify-center md:justify-between items-center">
                <div className="hidden md:flex gap-x-4">
                    <a className="text-white text-lg" href="#experiencia">{experiencia.navegacion.experiencia}</a>
                    <a className="text-white text-lg" href="#trabajos">{experiencia.navegacion.proyectos}</a>
                    <a className="text-white text-lg" href="#footer">{experiencia.navegacion.contacto}</a>
                </div>
                <div className="flex justify-center items-center gap-x-4" id="info-web">
                    <FormControl sx={{ m: 1, minWidth: 120}} size="small">
                        <InputLabel id="demo-select-small-label">Idioma</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={"ES"}>Español</MenuItem>
                            <MenuItem value={"EN"}>Ingles</MenuItem>
                            
                        </Select>
                    </FormControl>
                    <a href="https://github.com/AlexisBeltran"><img src={Github} alt="Github"/></a>
                    <a href="https://www.linkedin.com/in/jes%C3%BAs-alexis-beltr%C3%A1n-hern%C3%A1ndez-50ab4b21a/"><img src={LinkedIn} alt="LinkedIn"/></a>
                </div>
            </nav>
            <header className="md:py-7 md:relative" id="header-show">
                <div className="flex md:flex-row items-center md:justify-between">
                    <h1 className="flex flex-col ml3" id="title-main">
                        {experiencia.presentacion.saludo}{""}
                        <span id="title-main-name">{experiencia.presentacion.titulo}</span>
                        <span id="title-main-job">{experiencia.presentacion.especialidad}.</span> 
                    </h1>
                </div>
                <img src={About} className="md:absolute top-0 right-0 w-full h-auto object-cover sm:w-full md:w-1/2 hidden md:block"/>
                <img src={AboutPhone} className="md:absolute top-0 right-0 w-full h-auto object-cover sm:w-full md:w-1/2 block md:hidden"/>
            </header>
        </div>        
    )
}

export default Navegacion
