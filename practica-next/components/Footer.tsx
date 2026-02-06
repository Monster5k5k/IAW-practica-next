import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 py-4">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Mi Web con Next.js</p>
                <div className="mt-3">
                    <Logo
                        image="/BiblioWeb.png"
                        link="https://seneca.juntadeandalucia.es/seneca/biblioweb/catalogo/04002714"
                        alt="Biblioweb"
                    />
                    <Logo
                        image="/almeria.jpg"
                        link="https://www.almeria.es"
                        alt="Almería"
                    />
                    <Logo
                        image="/oferta_educativa.png"
                        link="https://www.juntadeandalucia.es/educacion/portals/web/ced"
                        alt="Junta de Andalucía"
                    />
                </div>
            </div>
        </footer>
    );
}
