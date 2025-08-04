"use client";
import React, { ReactNode, useEffect } from 'react'
import { useStore } from 'zustand';
import { authStore } from './stores/auth';
import { useRouter } from 'next/navigation';

const Providers = ({ children }: { children: ReactNode }) => {
    const { isLoggedIn } = useStore(authStore);
    const router = useRouter();
    const checkLogin = async () => {
        const yes = await isLoggedIn();
        if (yes) {
            router.push("/dashboard");
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);
    return (
        <div>
            {children}
        </div>
    )
}

export default Providers