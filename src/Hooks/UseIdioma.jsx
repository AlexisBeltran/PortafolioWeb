import { useContext } from "react";
import { idiomaContext } from "../Context/IdiomaProvider";

const UseIdioma = () => {
    return useContext(idiomaContext);
}

export default UseIdioma;