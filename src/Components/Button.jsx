import cv from "./../Docs/Beltrán_Hernández_Jesús_Alexis.pdf"
const Button = () => {
  return (
    <div id="descargar_div">
        <a className='py-3 px-6' id="descargar" href={cv} target="_blank">Descargar CV</a>
    </div>
  )
}

export default Button
