export default function ListItems({img, nomeFilme}) {

    return(
        <>
            <li>
                <img src={img} alt="" />
                <p>{nomeFilme}</p>
            </li>
        </>
    )
}