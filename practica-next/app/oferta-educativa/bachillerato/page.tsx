import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Bachillerato() {
    return (
        <main>
            <Header />
            <Navbar />
            <div className="container mt-5">
                <h1>Bachillerato</h1>
                <p>Información sobre la oferta educativa de Bachillerato.</p>
            </div>
            <Footer />
        </main>
    );
}
