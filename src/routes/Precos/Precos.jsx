import "./Precos.css"
import { useEffect } from 'react';
import { useState } from 'react';
import API from '../../axios/config'
import Cinemas from "../Cinemas/Cinemas";

export default function Precos() {


    const [precos, setPreco] = useState([]);

    useEffect(() => {
        API.get("/preco").then((response) => setPreco(response.data));
    }, []);


    return (
        <>
        <h2>Preços</h2>
        <ul className="lista-precos">
            <li>
                {precos.map(function valores(item){
                    return <div>
                        <p>Sala: {item.sala}</p>
                        <p>Inteira: {item.valor}</p>
                        <p>Meia: {item.valorMeia}</p>
                    </div>
                })}
            </li>
        </ul>
     </>
    );
}
