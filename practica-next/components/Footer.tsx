import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5 mt-auto border-top border-secondary">
            <div className="container">
                <div className="row gy-4 align-items-center">

                    {/* Información del Instituto */}
                    <div className="col-md-4 text-center text-md-start">
                        <h5 className="fw-bold mb-2">IES Cura Valera</h5>
                        <p className="mb-1 text-secondary small">C. Prof. Tierno Galván, s/n</p>
                        <p className="mb-0 text-secondary small">04600 Huércal-Overa, Almería</p>
                    </div>

                    {/* Redes Sociales (Instagram & Facebook) */}
                    <div className="col-md-4 text-center">
                        <h6 className="text-uppercase tracking-wider mb-3 text-secondary">Síguenos en redes</h6>
                        <div className="d-flex justify-content-center gap-4">
                            <a
                                href="https://www.instagram.com/iescuravalera"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover-scale"
                            >
                                <i className="bi bi-instagram fs-2"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/iescuravalera"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover-scale"
                            >
                                <i className="bi bi-facebook fs-2"></i>
                            </a>
                        </div>
                    </div>

                    {/* Enlaces de navegación */}
                    <div className="col-md-4 text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3 small">
                            <Link href="/noticias" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                                Noticias
                            </Link>
                            <span className="text-secondary">|</span>
                            <Link href="/contacto" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                                Contacto
                            </Link>
                            <span className="text-secondary">|</span>
                            <Link href="/biblioteca" className="text-decoration-none text-light opacity-75 hover-opacity-100">
                                Biblioteca
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 pt-4 border-top border-secondary opacity-25">
                    <div className="col text-center small">
                        &copy; {new Date().getFullYear()} IES Cura Valera. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;