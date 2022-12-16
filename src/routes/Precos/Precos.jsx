import "./Precos.css"
import { useEffect } from 'react';
import { useState } from 'react';
import API from '../../axios/config'
import EmCartazIMG from '../../images/cinema.png'
import Cinemas from "../Cinemas/Cinemas";

export default function Precos() {


    const [precos, setPreco] = useState([]);

    useEffect(() => {
        API.get("/preco").then((response) => setPreco(response.data));
    }, []);


    return (
        <>
        <div id="Precos">
        <br></br><h2><img src={EmCartazIMG}/> Preços</h2><br></br>
        </div>
        <ul className="lista-precos">
            <li>
                {precos.map(function valores(item){
                    return <div>
                        <p><b>Sala:</b> {item.sala}</p>
                        <p><b>Inteira:</b> {item.valor}</p>
                        <p><b>Meia:</b> {item.valorMeia}</p>
                    </div>
                })}
            </li>
        </ul>
     </>
    );
}
