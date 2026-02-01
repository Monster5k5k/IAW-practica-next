import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Biblioteca() {
    return (
        <main>
            <Header />
            <Navbar />
            <div className="container mt-5">
                <h1>Biblioteca Escolar</h1>
                <p>Bienvenido a la biblioteca escolar.</p>
            </div>
            <Footer />
        </main>
    );
}
