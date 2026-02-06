import Modal from '@/components/Modal';
import { newsData } from '@/app/news-data';
import Link from 'next/link';

export default async function NewsModal(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params;
    const newsItem = newsData[id as keyof typeof newsData];

    if (!newsItem) {
        return (
            <Modal>
                <div className="text-center">
                    <h2 className="text-danger">NADA QUE MOSTRAR</h2>
                    <img
                        src="https://http.cat/404"
                        alt="404 Not Found"
                        className="img-fluid my-3"
                    />
                </div>
            </Modal>
        );
    }

    return (
        <Modal>
            <div>
                <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="img-fluid mb-3 rounded"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
                <h3>{newsItem.title}</h3>
                <p>{newsItem.content}</p>
                <Link href="/" className="btn btn-primary d-block w-100 mt-3">Volver a inicio</Link>
            </div>
        </Modal>
    );
}
