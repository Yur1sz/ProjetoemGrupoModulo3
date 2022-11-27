import { Link } from "react-router-dom";

export default function Header(){
    return (
      <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top w-100">
  <div class="container">
    <a class="navbar-brand" href="#">
      <Link to={"/"}><h1>Cinema</h1></Link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto gap-3">
        <li class="fs-5 nav-item">
          <Link class="nav-link" to={"/"}>Página inicial</Link>
        </li>
        <li class="fs-5 nav-item">
          <Link class="nav-link" to={"/filmes"}>Filmes</Link>
        </li>
        <li class="fs-5 nav-item">
          <Link class="nav-link" to={"cinemas"}>Cinemas</Link>
        </li>
        <li class="fs-5 nav-item">
          <Link class="nav-link" to={"precos"}>Preços</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
}