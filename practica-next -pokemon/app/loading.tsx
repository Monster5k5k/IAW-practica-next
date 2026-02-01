"use client";
import React from 'react';

import { useLanguage } from '@/context/LanguageContext';

export default function Loading() {

    let loadingText = "Loading...";
    try {
        const { dict } = useLanguage();
        loadingText = dict.loading;
    } catch (e) {
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="text-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">{loadingText}</p>
            </div>
        </div>
    );
}
