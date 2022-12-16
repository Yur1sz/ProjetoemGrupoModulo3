import { useEffect } from 'react';
import { useState } from 'react';
import API from '../../axios/config'
import "./Cinemas.css"
export default function Cinemas() {

  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    API.get("/cinemas").then((response) => setCinema(response.data));
  }, []);

  return (
    <>
      <h2>Conheça nossos cinemas</h2>
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
