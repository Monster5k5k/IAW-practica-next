"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { dict } = useLanguage();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h2 className="text-danger mb-4">{dict.error}</h2>
            <p className="text-muted">{error.message}</p>
            <button
                className="btn btn-primary"
                onClick={
                    () => reset()
                }
            >
                Try again / Reintentar
            </button>
        </div>
    );
}
