export default function ListItems({img, nomeFilme, anoFilme}) {

    return(
        <>
            <li id="liHome">
                <img src={img} alt="" />
                <p>{nomeFilme} ({anoFilme})</p>
                <button>Mais informações</button>
            </li>
        </>
    )
}