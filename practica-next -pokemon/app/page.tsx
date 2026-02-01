import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4 border-0 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-body p-5">
                <h1 className="display-5 fw-bold">NEXT<span className="text-secondary" style={{ fontSize: '0.5em' }}>.JS</span></h1>
                <p className="col-md-8 fs-4">Next mola</p>
                <p>Curso de Next para todos</p>
              </div>
            </div>

            {/* Carta 1: Almería */}
            <Link href="/noticias" className="text-decoration-none text-dark">
              <div className="card mb-3 hover-scale overflow-hidden" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    {/* Almeria Imagen */}
                    <div style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '150px',
                      backgroundImage: 'url("/almeria.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}></div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Almería</h5>
                      <p className="card-text">Tierra de alumnos de ASIR y DAW</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Carta 2: Oferta Educativa */}
            <Link href="/oferta-educativa/eso" className="text-decoration-none text-dark">
              <div className="card mb-3 hover-scale overflow-hidden" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4 position-relative">
                    {/* Oferta_educativa Imagen */}
                    <div style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '150px',
                      backgroundImage: 'url("/oferta_educativa.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}></div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Oferta Educativa</h5>
                      <p className="card-text">Conoce nuestros cursos de ESO y Bachillerato</p>
                      <p className="card-text"><small className="text-muted">Abierto plazo de matrícula</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          {/* Derecha Columna */}
          <div className="col-md-4">
            {/* Biblioweb Carta con imagen de enlace */}
            <div className="card mb-3 border-0 bg-info bg-opacity-10">
              <div className="card-body text-center p-4">
                <a href="https://seneca.juntadeandalucia.es/seneca/biblioweb/catalogo/04002714" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/BiblioWeb.png"
                    alt="Biblioweb Séneca"
                    className="img-fluid hover-scale"
                    style={{ maxHeight: '100px' }}
                  />
                </a>
              </div>
            </div>

            {/* Carta de Video */}
            <div className="card border-0 bg-warning bg-opacity-10">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/E4qMxJJAszg?start=478"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-body">
                <p className="card-text fw-semibold">Video de graduacion</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
