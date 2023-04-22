import cv from "./../Docs/Curriculum_BeltranHernandezJesusAlexis-1.pdf"
const Button = () => {
  return (
    <div id="descargar_div">
        <a className='py-3 px-6' id="descargar" href={cv} target="_blank">Descargar CV</a>
    </div>
  )
}

export default Button
