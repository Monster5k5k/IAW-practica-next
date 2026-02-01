"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PokemonCard from '@/components/PokemonCard';
import { useLanguage } from '@/context/LanguageContext';
import { getPokemonList, Pokemon } from '@/lib/pokeapi';

export default function Home() {
  const { dict } = useLanguage();
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    // Fetch a longer list to pick a random one, or just pick a random ID up to 150
    const randomId = Math.floor(Math.random() * 150) + 1;

    // We can reuse getPokemonList for a single item if we hack the offset, 
    // but better to fetch a list and pick one, or just create a minimal Pokemon object if we have the ID.
    // However, PokemonCard needs data. Let's fetch one via list or just construct it if API allows simple ID fetch for list struct.
    // The lib 'getPokemonList' returns simple list. 

    // Simpler: Fetch list of 1 with value offset
    getPokemonList(1, randomId)
      .then(data => {
        if (data.length > 0) {
          setRandomPokemon(data[0]);
        }
      });
  }, []);

  return (
    <main className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />

      <div className="container mt-5 flex-grow-1">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">NEXT.JS POKEMON</h1>
          <p className="lead">{dict.welcome}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-lg">
              <div className="card-header bg-warning text-dark fw-bold text-center">
                {dict.randomPokemon}
              </div>
              <div className="card-body p-4 bg-light">
                {randomPokemon ? (
                  <PokemonCard pokemon={randomPokemon} />
                ) : (
                  <div className="text-center py-5">
                    <div className="spinner-border text-secondary" role="status">
                      <span className="visually-hidden">{dict.loading}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
