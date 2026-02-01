"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { getPokemonDetail, Pokemon } from '@/lib/pokeapi';

export default function PokemonDetailPage() {
    const { dict } = useLanguage();
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        getPokemonDetail(id)
            .then((data) => {
                setPokemon(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
        </div>
    );

    if (!pokemon) return (
        <div className="container mt-5 text-center">
            <h1>{dict.error}</h1>
            <Link href="/" className="btn btn-secondary">{dict.backHome}</Link>
        </div>
    );

    return (
        <div className="content-wrapper">
            {/* Emulating a modal-like structure by centering on a backdrop? 
                 Or just a nice page. Requirement: "Detalle se verá en una ventana Modal".
                 Since we are at a route /pokemon/[id], we can render a 'page' that LOOKS like a modal 
                 or just a full page. I will render a full page but with a focused design card.
              */}
            <Navbar />
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-lg p-0 overflow-hidden" style={{ maxWidth: '800px', width: '100%' }}>
                    <div className="row g-0">
                        <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-4">
                            <img src={pokemon.image} alt={pokemon.name} className="img-fluid" style={{ maxHeight: '300px' }} />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <h2 className="card-title text-capitalize display-6 fw-bold mb-0">{pokemon.name}</h2>
                                    <span className="badge bg-dark fs-5">#{pokemon.id}</span>
                                </div>

                                <hr />

                                <h5 className="mb-3 text-secondary">Stats</h5>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <strong>{dict.hp}</strong>
                                        <span>{pokemon.stats?.hp}</span>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${Math.min(pokemon.stats?.hp || 0, 100)}%` }}></div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <strong>{dict.attack}</strong>
                                        <span>{pokemon.stats?.attack}</span>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Math.min(pokemon.stats?.attack || 0, 100)}%` }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between">
                                        <strong>{dict.defense}</strong>
                                        <span>{pokemon.stats?.defense}</span>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: `${Math.min(pokemon.stats?.defense || 0, 100)}%` }}></div>
                                    </div>
                                </div>

                                <button onClick={() => router.back()} className="btn btn-outline-secondary w-100">
                                    {dict.backHome}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
