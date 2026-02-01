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
            </div>
            <Footer />
        </main>
    );
}
