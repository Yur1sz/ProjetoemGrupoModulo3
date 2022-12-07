import { useEffect, useState } from "react";
import fetch from "../../axios/config";
import ListItems from "../../components/ListItems";
import Section from "../../components/Section";
import "./Home.css"
import EmCartazIMG from '../../images/cinema.png'
import LoadingGIF from '../../images/gif-loading.gif'


export default function Home() {

  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    try {
      const response = await fetch.get("/filmes");
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
        <h2>em cartaz</h2>
      </div>
      <Section>
        {filmes.length === 0 ? (
          <img src={LoadingGIF} id="LoadingGIF" alt="" />
        ) : (
          filmes.map((item) => (
            <ListItems nomeFilme={item.titulo} anoFilme={item.ano} img={item.imagem} />
          ))
        )}
      </Section>
    </>
  );
}