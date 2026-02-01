"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'fr';

interface Dictionary {
    home: string;
    generations: string;
    contact: string;
    search: string;
    welcome: string;
    randomPokemon: string;
    generatedBy: string;
    attack: string;
    defense: string;
    hp: string;
    detail: string;
    offer: string;
    news: string;
    library: string;
    loading: string;
    error: string;
    notFound: string;
    backHome: string;
}

const dictionaries: Record<Language, Dictionary> = {
    es: {
        home: "Inicio",
        generations: "Generaciones",
        contact: "Contacto",
        search: "Buscar",
        welcome: "¡Bienvenido a la web de Next.js!",
        randomPokemon: "Pokemon Aleatorio",
        generatedBy: "Esta web está generada en NEXT por el alumno Linas del IES Cura Valera.",
        attack: "Ataque",
        defense: "Defensa",
        hp: "Vida",
        detail: "Ver detalle",
        offer: "Oferta Educativa",
        news: "Noticias",
        library: "Biblioteca Escolar",
        loading: "Cargando...",
        error: "Ha ocurrido un error",
        notFound: "Página no encontrada",
        backHome: "Volver al inicio"
    },
    en: {
        home: "Home",
        generations: "Generations",
        contact: "Contact",
        search: "Search",
        welcome: "Welcome to the Next.js website!",
        randomPokemon: "Random Pokemon",
        generatedBy: "This web is generated in NEXT by student Linas from IES Cura Valera.",
        attack: "Attack",
        defense: "Defense",
        hp: "HP",
        detail: "View details",
        offer: "Educational Offer",
        news: "News",
        library: "School Library",
        loading: "Loading...",
        error: "An error occurred",
        notFound: "Page not found",
        backHome: "Back to Home"
    },
    fr: {
        home: "Accueil",
        generations: "Générations",
        contact: "Contact",
        search: "Chercher",
        welcome: "Bienvenue sur le site Next.js !",
        randomPokemon: "Pokemon Aléatoire",
        generatedBy: "Ce site est généré en NEXT par l'étudiant Linas de l'IES Cura Valera.",
        attack: "Attaque",
        defense: "Défense",
        hp: "Vie",
        detail: "Voir détails",
        offer: "Offre Éducative",
        news: "Nouvelles",
        library: "Bibliothèque Scolaire",
        loading: "Chargement...",
        error: "Une erreur est survenue",
        notFound: "Page non trouvée",
        backHome: "Retour à l'accueil"
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, dict: dictionaries[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
