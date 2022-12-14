import { useEffect, useState } from "react";
import Modal from 'react-modal';
import "./ModalButton.css";

Modal.setAppElement("#root");

export default function ListItems({ img, nomeFilme, anoFilme, id, sinopseFilme }) {

  // Parte do Modal //
  const [modalAberto, SetModalAberto] = useState(false);

  function openModal() {
    SetModalAberto(true);
  }

  function closeModal() {
    SetModalAberto(false);
  }

  //Parte para deletar o filme  //

  function deletar(id) {
    if (!confirm(`Realmente deseja deletar o filme "${nomeFilme}"?`)) {
    } else {
      fetch(`https://json-server-m3-8rj7.onrender.com/filmes/${id}`, {
        method: "DELETE",
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
        });
      });
      alert(
        `Filme "${nomeFilme}" deletado com sucesso! Recarregue a página.`
      );
    }
  }

  return (
    <>
      <li id="liHome">
        <img src={img} alt="" />
        <p>{nomeFilme} ({anoFilme})</p>


        <div className='container-modal'>

          <button onClick={openModal}>Mais informações </button>
          <Modal
            isOpen={modalAberto}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName='modal-overlay'
            className='modal-content'
          >
            <h2 className="titulo-modal">Mais informações sobre o filme {nomeFilme}</h2>
            <hr></hr>

            <div className='infos-modal'>

              <img src={img} alt="" />
              <p>{sinopseFilme}</p>
            </div>
            <p>Ano de lançamento: {anoFilme} </p>
            <hr></hr>




            <button className="button-close" onClick={closeModal}>Fechar </button>

          </Modal>




        </div>

        <button onClick={() => deletar(id)}>Excluir</button>

      </li>
    </>
  )
}