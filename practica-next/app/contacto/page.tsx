import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contacto() {
    return (
        <main>
            <Header />
            <Navbar />
            <div className="container mt-5">
                <h1>Contacto</h1>
                <p>Ponte en contacto con nosotros.</p>
            </div>
            <Footer />
        </main>
    );
}
