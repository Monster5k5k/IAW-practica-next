"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Modal from '@/components/Modal';
import PokemonDetailContent from '@/components/PokemonDetailContent';

export default function PokemonModalPage() {
    const params = useParams();
    const id = params.id as string;

    return (
        <Modal>
            <PokemonDetailContent pokemonId={id} isModal={true} />
        </Modal>
    );
}
