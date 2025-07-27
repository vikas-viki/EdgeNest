"use client";
import React, { ReactNode, useEffect } from 'react'
import { useStore } from 'zustand';
import { authStore } from './stores/auth';

const Providers = ({ children }: { children: ReactNode }) => {
    const { isLoggedIn } = useStore(authStore);
    useEffect(() => {
        isLoggedIn();
    }, []);
    return (
        <div>
            {children}
        </div>
    )
}

export default Providers