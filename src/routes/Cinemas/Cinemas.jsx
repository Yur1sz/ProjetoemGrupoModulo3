import { useEffect } from 'react';
import { useState } from 'react';
import API from '../../axios/config'
import EmCartazIMG from '../../images/cinema.png'
import "./Cinemas.css"
export default function Cinemas() {

  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    API.get("/cinemas").then((response) => setCinema(response.data));
  }, []);

  return (
    <>
      <br></br><div id="Cinemas">
        <h2> <img src={EmCartazIMG}/> nossos cinemas</h2><br></br>
      </div>
      <ul className='lista-cinemas'>
        <li>
          {cinema.map(function locais(item) {
            return <div>
                    <p>Cinema {item.id}</p>
                    <p><strong>Local:</strong> {item.local}</p>
                    <p><strong>Estado:</strong> {item.estado}</p>
                  </div>;
          })}
        </li>
        
      </ul>
      
    </>
  );
}
