import fetch from '../../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NewPost.module.css'
import LoadingGIF from '../../images/gif-loading.gif'

export default function NewPost() {

    const navigate = useNavigate()

    const [titulo, setTitle] = useState()
    const [ano, setAno] = useState()
    const [roteiro, setRoteiro] = useState()
    const [imagem, setImagem] = useState()

    
    const createPost = async(e) => {
        e.preventDefault();
        await fetch.post("/filmes",{
            titulo: titulo,
            imagem: imagem,
            roteiro: roteiro,
            ano: ano,
        })
        alert(`Filme "${titulo}" adicionado com sucesso!`)
    }

    return(
        <div className={styles.newPost}>
            <h2>Cadastrar novo filme</h2>
            <form onSubmit={(e)=>createPost(e)}>
                <div className={styles.formControl}>
                    <label htmlFor="titulo">Título do filme:</label>
                    <input type="text" name="titulo" required placeholder="Digite o título" className={styles.tituloInput} id="titulo" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="ano">Data de lançamento:</label>
                    <input type="number" required min={1900} max={2022} maxLength={4} minLength={4} name="ano" placeholder="Ex.: 1980" className={styles.anoInput} id="ano" onChange={(e) => setAno(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="roteiro">Roteiro:</label>
                    <input type="text" required name="roteiro" placeholder="Digite roteirista" className={styles.roteiroInput} id="roteiro" onChange={(e) => setRoteiro(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="imagem">Imagem:</label>
                    <input type="text" required name="imagem" placeholder="Insira a URL da imagem" id="imagem" className={styles.imagemInput} onChange={(e) => setImagem(e.target.value)}/>
                </div>
                <input type="submit" className={styles.btn} value="Cadastrar filme" />
            </form>
        </div>
    )
}