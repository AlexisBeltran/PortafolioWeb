import { useLoaderData } from "react-router-dom";
import Github from "./../Assets/Img/Github.svg"
import Linkedin from "./../Assets/Img/LinkedIn.svg"
const Footer = () => {
  const experiencia = useLoaderData();
  return (
    <section className="text-center text-white flex flex-col gap-6 py-6" id="footer">
      <p>{experiencia.contacto.titulo}</p>
      <p className="font-bold">{experiencia.contacto.cuerpo}</p>
      <span>{experiencia.contacto.correo}</span>

      <div className="flex flex-row gap-5 justify-center" id="contact-footer">
        <a href="https://github.com/AlexisBeltran"><img src={Github} alt="Github"/></a>
        <a href="https://www.linkedin.com/in/jes%C3%BAs-alexis-beltr%C3%A1n-hern%C3%A1ndez-50ab4b21a/"><img src={Linkedin} alt="LinkedIn"/></a>
      </div>
    </section>
  )
}

export default Footer
