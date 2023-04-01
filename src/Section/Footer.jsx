import Github from "./../Assets/Img/Github.svg"
import Linkedin from "./../Assets/Img/LinkedIn.svg"
const Footer = () => {
  return (
    <section className="text-center text-white flex flex-col gap-6 py-6" id="footer">
      <p>¡Me gustaría tener tu contacto!</p>
      <p className="font-bold">¿Tienes un proyecto en mente? ¡Hagámoslo realidad!</p>
      <span>alexis.bhja@gmail.com</span>

      <div className="flex flex-row gap-5 justify-center" id="contact-footer">
        <img src={Github} alt="Github"/>
        <img src={Linkedin} alt="LinkedIn"/>
      </div>
    </section>
  )
}

export default Footer
