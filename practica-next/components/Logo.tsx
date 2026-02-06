import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    src: string;
    href: string;
    alt: string;
    width?: number;
    height?: number;
}

const Logo = ({ src, href, alt, width = 120, height = 60 }: LogoProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-105 transition-transform duration-300 bg-white p-2 rounded shadow-sm"
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="object-contain w-auto h-auto"
                style={{ maxHeight: '60px' }} // Asegura que no se hagan enormes
            />
        </Link>
    );
};

export default Logo;