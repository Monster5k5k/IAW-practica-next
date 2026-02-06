import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Noticias() {
  return (
    <main>
      <Header />
      <Navbar />
      <div className="container mt-5">
        <h1>Noticias</h1>
        <p>Aquí encontrarás las últimas noticias del IES Cura Valera.</p>
        <div className="row">
          {/* Here we could list news if we had a dynamic list, but for now just a placeholder or static links */}
          <div className="col-12">
            <div className="list-group">
              <Link href="/noticias/almeria" className="list-group-item list-group-item-action">
                Noticia: Almería
              </Link>
              <Link href="/noticias/oferta" className="list-group-item list-group-item-action">
                Noticia: Oferta Educativa
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}