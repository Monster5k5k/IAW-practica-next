import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ESO() {
    return (
        <main>
            <Header />
            <Navbar />
            <div className="container mt-5">
                <h1>Educación Secundaria Obligatoria (ESO)</h1>
                <p>Información sobre la oferta educativa de ESO.</p>
            </div>
            <Footer />
        </main>
    );
}
