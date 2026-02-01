"use client";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-top border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/noticias">Noticias</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Oferta Educativa
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/oferta-educativa/eso">ESO</Link></li>
                                <li><Link className="dropdown-item" href="/oferta-educativa/bachillerato">Bachillerato</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/biblioteca">Biblioteca Escolar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
