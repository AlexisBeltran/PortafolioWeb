import Navegacion from "../Components/Navegacion";
import Experiencia from "./Experiencia";
import Trabajos from "./Trabajos";
import Habilidades from "./Habilidades";
import Footer from "./Footer";
const Index = () => {
  return (
    <main className="md:w-5/6 w-11/12 mx-auto">
      <Navegacion/>  
      <Experiencia/>
      <Trabajos/>
      <Habilidades/>
      <Footer/>
    </main>
      
  )
}

export default Index
