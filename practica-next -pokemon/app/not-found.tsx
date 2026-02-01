"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';



export default function NotFound() {

    let dict = { notFound: "Page Not Found", backHome: "Back to Home" };
    try {
        const ctx = useLanguage();
        dict = ctx.dict;
    } catch (e) {
    }

    return (
        <div className="container text-center mt-5 pt-5">
            <h1 className="display-1 fw-bold text-secondary">404</h1>
            <h2 className="mb-4">{dict.notFound}</h2>
            <Link href="/" className="btn btn-primary btn-lg">
                {dict.backHome}
            </Link>
        </div>
    );
}
