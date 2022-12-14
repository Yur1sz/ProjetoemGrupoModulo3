import { useEffect } from "react";

export default function ListItems({img, nomeFilme, anoFilme, id}) {

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

    return(
        <>
            <li id="liHome">
                <img src={img} alt="" />
                <p>{nomeFilme} ({anoFilme})</p>
                <button>Mais informações</button>
                <button onClick={()=>deletar(id)}>Excluir</button>
            </li>
        </>
    )
}