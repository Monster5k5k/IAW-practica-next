"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
    }, []);

    function onDismiss() {
        router.back();
    }

    return (
        <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onDismiss();
            }}
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content overflow-hidden">
                    <div className="modal-header border-0 pb-0">
                        <button type="button" className="btn-close" onClick={onDismiss} aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
