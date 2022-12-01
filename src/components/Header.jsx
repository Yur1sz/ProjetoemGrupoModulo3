import { Link } from "react-router-dom";

export default function Header(){
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top w-100">
  <div className="container">
    <a className="navbar-brand" href="#">
      <Link to={"/"}><h1>Cinema</h1></Link>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-3">
        <li className="fs-5 nav-item">
          <Link className="nav-link" to={"/"}>Página inicial</Link>
        </li>
        <li className="fs-5 nav-item">
          <Link className="nav-link" to={"cinemas"}>Cinemas</Link>
        </li>
        <li className="fs-5 nav-item">
          <Link className="nav-link" to={"precos"}>Preços</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
}