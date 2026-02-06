import Link from 'next/link';
import { newsData } from '../../news-data';
import { notFound } from 'next/navigation';

export default async function NewsDetail(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const newsItem = newsData[params.id as keyof typeof newsData];

    if (!newsItem) {
        return (
            <div className="container mt-5 text-center">
                <h1>NADA QUE MOSTRAR</h1>
                <img
                    src="https://http.cat/404"
                    alt="404 Not Found"
                    className="img-fluid my-4"
                    style={{ maxHeight: '400px' }}
                />
                <br />
                <Link href="/" className="btn btn-primary">Volver a inicio</Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1>{newsItem.title}</h1>
            <img
                src={newsItem.image}
                alt={newsItem.title}
                className="img-fluid my-4 rounded shadow"
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
            <p className="lead">{newsItem.content}</p>
            <Link href="/" className="btn btn-secondary mt-3">Volver a inicio</Link>
        </div>
    );
}
