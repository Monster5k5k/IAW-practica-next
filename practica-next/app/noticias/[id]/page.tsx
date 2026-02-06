import Modal from '@/components/Modal';
import { newsData } from '@/app/news-data'; // Asegúrate que esta ruta es correcta
import Image from 'next/image';
import Link from 'next/link';

// En Next.js 15, params es una Promise
export default async function NewsPage(props: { params: Promise<{ id: string }> }) {
    // 1. Desempaquetamos los params con await (CRUCIAL PARA EVITAR EL ERROR)
    const params = await props.params;
    const { id } = params;

    // 2. Buscamos la noticia
    const newsItem = newsData[id as keyof typeof newsData];

    // 3. Lógica: Si no hay noticia, mostrar error y 404
    if (!newsItem) {
        return (
            <Modal>
                <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">NADA QUE MOSTRAR</h2>
                    <div className="relative w-64 h-64 mb-6">
                        {/* Usamos una imagen por defecto si no tienes una '404.png' específica */}
                        <Image
                            src="/curavalera.jpg"
                            alt="Error 404"
                            fill
                            className="object-contain opacity-50 grayscale"
                        />
                    </div>
                    <p className="text-gray-500 mb-6">No pudimos encontrar la noticia que buscas.</p>
                    <Link
                        href="/"
                        className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                    >
                        Volver a inicio
                    </Link>
                </div>
            </Modal>
        );
    }

    // 4. Mostrar el detalle de la noticia
    return (
        <Modal>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full mx-auto">
                <div className="relative w-full h-64 md:h-80">
                    <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{newsItem.title}</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {newsItem.content}
                    </p>

                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Volver a inicio
                    </Link>
                </div>
            </div>
        </Modal>
    );
}