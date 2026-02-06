"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPokemonDetail, Pokemon } from '@/lib/pokeapi';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
    pokemonId: string;
    isModal?: boolean;
}

export default function PokemonDetailContent({ pokemonId, isModal = false }: Props) {
    const { dict } = useLanguage();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getPokemonDetail(pokemonId)
            .then(data => {
                setPokemon(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [pokemonId]);

    if (loading) {
        return (
            <div className="text-center p-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">{dict.loading}</span>
                </div>
            </div>
        );
    }

    if (!pokemon) {
        return <div className="text-center p-5 text-danger">{dict.error}</div>;
    }

    return (
        <div className={`card ${isModal ? 'border-0' : 'mx-auto mt-5 shadow'}`} style={!isModal ? { maxWidth: '800px' } : {}}>
            <div className="row g-0">
                <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-4">
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="img-fluid"
                        style={{ maxHeight: '250px' }}
                    />
                </div>
                <div className="col-md-7">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="card-title text-capitalize fw-bold mb-0">{pokemon.name}</h2>
                            <span className="badge bg-dark fs-6">#{pokemon.id}</span>
                        </div>

                        <div className="mb-4">
                            <h5 className="border-bottom pb-2 mb-3">Stats</h5>

                            <div className="mb-2">
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="fw-semibold">{dict.hp}</span>
                                    <span>{pokemon.stats.hp}</span>
                                </div>
                                <div className="progress" style={{ height: '10px' }}>
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${Math.min(pokemon.stats.hp, 100)}%` }} aria-valuenow={pokemon.stats.hp} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="fw-semibold">{dict.attack}</span>
                                    <span>{pokemon.stats.attack}</span>
                                </div>
                                <div className="progress" style={{ height: '10px' }}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Math.min(pokemon.stats.attack, 100)}%` }} aria-valuenow={pokemon.stats.attack} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="fw-semibold">{dict.defense}</span>
                                    <span>{pokemon.stats.defense}</span>
                                </div>
                                <div className="progress" style={{ height: '10px' }}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${Math.min(pokemon.stats.defense, 100)}%` }} aria-valuenow={pokemon.stats.defense} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <Link
                                href={`/pokemon/${Math.max(1, pokemon.id - 1)}`}
                                className={`btn btn-primary ${pokemon.id <= 1 ? 'disabled' : ''}`}
                            >
                                {dict.previous}
                            </Link>
                            {!isModal && <Link href="/" className="btn btn-outline-secondary">{dict.backHome}</Link>}
                            <Link
                                href={`/pokemon/${Math.min(1000, pokemon.id + 1)}`}
                                className={`btn btn-primary ${pokemon.id >= 1000 ? 'disabled' : ''}`}
                            >
                                {dict.next}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
