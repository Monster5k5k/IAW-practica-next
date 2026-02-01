"use client";
import React from 'react';
import Link from 'next/link';
import { Pokemon } from '@/lib/pokeapi';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
    const { dict } = useLanguage();

    return (
        <div className="card h-100 shadow-sm hover-scale">
            <div className="p-4 text-center bg-light">
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="img-fluid"
                    style={{ height: '150px', objectFit: 'contain' }}
                />
            </div>
            <div className="card-body text-center">
                <span className="badge bg-secondary mb-2">#{pokemon.id}</span>
                <h5 className="card-title text-capitalize fw-bold">{pokemon.name}</h5>
                <Link href={`/pokemon/${pokemon.id}`} className="btn btn-primary mt-2 stretched-link">
                    {dict.detail}
                </Link>
            </div>
        </div>
    );
}
