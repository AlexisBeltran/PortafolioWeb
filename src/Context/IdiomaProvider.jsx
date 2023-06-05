import axios from "axios";
import { createContext, useEffect, useState } from "react";
const idiomaContext = createContext();

const IdiomaProvider = ({children}) => {
    const [age, setAge] = useState("ES");
    const [experiencia, setExperiencia] = useState({});
    
    const handleChange = (e) => {
        setAge(e.target.value);
    }


    return(
        <idiomaContext.Provider 
            value={{
                age,
                handleChange,
                experiencia
            }}
        >
            {children}
        </idiomaContext.Provider>
    )
};

export {
    idiomaContext
}

export default IdiomaProvider;

