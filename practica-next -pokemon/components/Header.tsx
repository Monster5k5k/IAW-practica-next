import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-light">
            <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>

                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#e9ecef',
                    backgroundImage: 'url("/Pokemon-Emblema.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    <h1 className="display-4 fw-bold"></h1>
                    <p className="lead"></p>
                </div>
            </div>
        </header>
    );
}
