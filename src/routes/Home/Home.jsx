import { useEffect, useState } from "react";
import axios from "axios";
import ListItems from "../../components/ListItems";
import Section from "../../components/Section";
import "./Home.css"
import EmCartazIMG from '../../images/cinema.png'
import setaDireita from '../../images/setaDireita.png'
export default function Home() {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    try {
      const response = await axios.get(
        "https://json-server-m3-8rj7.onrender.com/filmes"
      );
      const data = response.data;

      setFilmes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <>
      <div id="Cartaz">
        <img src={EmCartazIMG}/>
        <h2 id="CartazH2">Filmes em cartaz</h2>
      </div>
      <Section>
        {filmes.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          filmes.map((item) => (
            <ListItems nomeFilme={item.titulo} img={item.imagem} />
          ))
        )}
        <span id="setaDireita"><img src={setaDireita} alt="" /></span>
      </Section>
    </>
  );
}
