import Link from 'next/link';

interface LogoProps {
    image: string;
    link: string;
    alt: string;
}

export default function Logo({ image, link, alt }: LogoProps) {
    return (
        <div className="d-inline-block mx-2">
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <img
                    src={image}
                    alt={alt}
                    style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                    className="img-fluid hover-opacity"
                />
            </Link>
        </div>
    );
}
