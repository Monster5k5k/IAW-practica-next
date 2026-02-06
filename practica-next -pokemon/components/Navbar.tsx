"use client";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const { dict, language, setLanguage } = useLanguage();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Pokemon Next</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">{dict.home}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {dict.generations}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/generacion/1">Gen 1</Link></li>
                                <li><Link className="dropdown-item" href="/generacion/2">Gen 2</Link></li>
                                <li className="dropend">
                                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                        {dict.others}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="/generacion/404">{dict.thirdSeason}</Link></li>
                                        <li><Link className="dropdown-item" href="/generacion/4">{dict.fourthSeason}</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contacto">{dict.contact}</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <div className="btn-group" role="group" aria-label="Language selector">
                            <button
                                type="button"
                                className={`btn btn-sm ${language === 'es' ? 'btn-primary' : 'btn-outline-secondary'}`}
                                onClick={() => setLanguage('es')}
                            >
                                ES
                            </button>
                            <button
                                type="button"
                                className={`btn btn-sm ${language === 'en' ? 'btn-primary' : 'btn-outline-secondary'}`}
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                className={`btn btn-sm ${language === 'fr' ? 'btn-primary' : 'btn-outline-secondary'}`}
                                onClick={() => setLanguage('fr')}
                            >
                                FR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
