import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import reactflix from "../images/reactflix3.png"
import googleplus from "../images/google-plus.png" 
import "./Footer.css"
export default function Footer () {

    return (
        <div className="Footer">
        <img className="imgReactflixFooter" src={reactflix} alt="" />
        <p> ReactFlix é um site de cinema feito para o projeto do curso Programadores Cariocas que têm como objetivo consumir fake API e utilizar os métodos HTTP</p>
        <ul className="listaFooter">
            <li><img className="imgFooter" src={instagram} alt="" /></li>
            <li><img className="imgFooter" src={facebook} alt="" /> </li>
            <li><img className="imgFooter" src={twitter} alt="" /> </li>
            <li><img className="imgFooter" src={googleplus} alt="" /> </li>
        </ul>
        </div>
    )
}