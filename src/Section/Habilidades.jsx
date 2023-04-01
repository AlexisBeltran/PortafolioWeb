import Lottie from 'lottie-react';
import HTML from "./../Assets/Animation/HTML.json"
import CSS from "./../Assets/Animation/CSS.json"
import JavaScript from "./../Assets/Animation/JavaScript.json"
import MYSQL from "./../Assets/Animation/MYSQL.json"
import GitHub from "./../Assets/Animation/github.json"
const Habilidades = () => {
  return (
    <div className="py-10 relative" id="habilidades">
        <h1 className="mb-10">Habilidades</h1>
        <div className='md:grid md:grid-cols-4'>
            <Lottie animationData={HTML}/>
            <Lottie animationData={CSS}/>
            <Lottie animationData={JavaScript}/>
            <Lottie animationData={MYSQL}/>
            <Lottie animationData={GitHub}/>
        </div>
        <div className='circle top-0 left-0 absolute'></div>
    </div>
  )
}

export default Habilidades
