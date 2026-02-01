"use client";
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Contacto() {
    const { dict } = useLanguage();

    return (
        <main className="d-flex flex-column min-vh-100">
            <Header />
            <Navbar />
            <div className="container mt-5 flex-grow-1">
                <div className="p-5 p-md-5 mb-4 rounded text-bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 fst-italic">{dict.contact}</h1>
                        <p className="lead my-3">{dict.generatedBy}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
