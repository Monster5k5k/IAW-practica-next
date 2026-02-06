"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { getGenerationPokemon, Pokemon } from '@/lib/pokeapi';
import PokemonCard from '@/components/PokemonCard';

export default function GeneracionPage() {
    const { dict } = useLanguage();
    const params = useParams();
    const genId = parseInt(params.id as string);

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!genId) return;
        setLoading(true);
        getGenerationPokemon(genId, 10)
            .then((data) => {
                setPokemonList(data);
                setLoading(false);
            })
            .catch(console.error);
    }, [genId]);

    return (
        <main>
            <Header />
            <Navbar />
            <div className="container mt-5">
                {genId === 404 ? (
                    <div className="text-center">
                        <h1 className="mb-4">{dict.notFound}</h1>
                        <img src="https://http.cat/404" alt="404 Not Found" className="img-fluid" />
                    </div>
                ) : (
                    <>
                        <h1 className="text-center mb-5">{dict.generations} {genId}</h1>

                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">{dict.loading}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
                                {pokemonList.map(p => (
                                    <div className="col" key={p.id}>
                                        <PokemonCard pokemon={p} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
            <Footer />
        </main>
    );
}
