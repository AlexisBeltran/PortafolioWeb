import cv from "./../Docs/Beltran_Hernandez_Jesus_Alexis.pdf"
const Button = () => {
  return (
    <div id="descargar_div">
        <a className='py-3 px-6' id="descargar" href={cv} target="_blank">Descargar CV</a>
    </div>
  )
}

export default Button
