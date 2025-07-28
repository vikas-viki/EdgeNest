"use client";
import React, { use, useEffect, useState } from 'react'
import Logo from '@/app/components/Logo'
import Link from 'next/link';
import { useStore } from 'zustand';
import { authStore } from '@/app/stores/auth';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Auth = ({ searchParams }: { searchParams: Promise<{ code?: string, installation_id: string }> }) => {

    /**
     * always first redirect user to oauth.
     * check if the user has installed the app, 
     *  if not redirect back again for installation.
     *  else redirect to dashboard
     */
    const router = useRouter();
    const [text, setText] = useState("Continue With Github");
    const params = use(searchParams);
    const { authenticateUser, loading } = useStore(authStore);

    const authURL = `https://github.com/login/oauth/authorize?client_id=Iv23liqZTJvBNg3PVNJL`;
    const installURL = "https://github.com/apps/EdgeNestX/installations/new";

    const authenticateUser2 = async () => {
        if (params.code) {
            const res = await authenticateUser(params.code, params.installation_id);
            if (!res.success && !res.installed) {
                setText("Connect EdgeNext to Github");
            }else {
                    router.push("/dashboard");
            }
        }
    }

    useEffect(() => {
        authenticateUser2();
    }, [params]);

    return (
        <div className='w-screen h-screen flex flex-col px-20 py-10 items-center'>
            <div className='self-start'>
                <Logo />
            </div>
            <div className='border-1 rocoleta rounded-lg p-5 w-max mt-60'>
                <span className='text-2xl font-bold'>Connect Your Github Account to continue</span>
                <div className='flex flex-col gap-1 py-4 text-lg'>
                    <span>✔ Select repositories to deploy directly.</span>
                    <span>✔ Automatic deployments on every change.</span>
                    <span>✔ All your projects organized in one place.</span>
                    <span>✔ Custom metrics on your dashboard.</span>
                </div>
                {
                    loading ?
                        <button className='flex justify-center bg-black/70 items-center rocoleta text-white font-semibold text-base text-center w-full py-3 cursor-pointer rounded-sm mt-1'><Loader2 className='animate-spin' /></button>
                        :
                        <Link href={text.startsWith("Connect") ? installURL: authURL} className='bg-black block rocoleta text-white font-semibold text-base text-center w-full py-3 cursor-pointer rounded-sm mt-1'>
                            {text}
                        </Link>
                }
            </div>
        </div >
    )
}

export default Auth