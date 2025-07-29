
"use client";
import { AlignJustify, Info, Send, Settings } from 'lucide-react'
import Image from 'next/image';
import React, { use, useEffect } from 'react'
import PSettings from './Settings';
import { useStore } from 'zustand';
import { tempStore } from '../stores/temp';
import { useRouter } from 'next/navigation';
import Logs from './Logs';

const DeployCard = ({ searchParams }: { searchParams: Promise<{ id?: string }> }) => {
    const params = use(searchParams);
    const { deploymentId, setModalOpen, deployProject, getLogs, setLogsOpen, gitURL, setGitURL } = useStore(tempStore);
    const supports: { img: string, title: string }[] = [
        {
            img: "react.svg",
            title: "React"
        },
        {
            img: "vite.webp",
            title: "Vite"
        },
        {
            img: "vue.webp",
            title: "Vue"
        },
        {
            img: "svelte.webp",
            title: "Svelte"
        },
        {
            img: "solidjs.webp",
            title: "SolidJS"
        },
        {
            img: "qwik.webp",
            title: "Qwik"
        },
        {
            img: "astro.webp",
            title: "Astro"
        },
        {
            img: "hugo.webp",
            title: "Hugo"
        },
        {
            img: "nextjs.webp",
            title: "Next.js"
        },
        {
            img: "nuxt.webp",
            title: "Nuxt"
        },
    ];
    const router = useRouter();

    useEffect(() => {
        if (params.id) {
            getLogs(params.id);
        }
    }, [params.id]);

    useEffect(() => {
        if (deploymentId && deploymentId.length > 0) {
            router.push(`/?id=${deploymentId}`);
        }
    }, [deploymentId]);

    return (
        <div className="px-4 py-4 bg-white text-black border-1 rounded-lg w-[450px] h-[125px] rocoleta flex flex-col justify-between">
            <input type="text" value={gitURL} onChange={e => setGitURL(e.target.value)} className="outline-none " placeholder="Github Repo URL" />
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <button onClick={e => { e.stopPropagation(); setModalOpen(true) }} className="text-xs bg-gray-300 hover:bg-gray-400 transition-all duration-300 cursor-pointer rounded-sm p-1 peer">
                        <Settings strokeWidth={1.3} size={19} className="text-gray-800 p-[1px]" />
                    </button>
                    {
                        params.id && (
                            <>
                                <button onClick={e => { e.stopPropagation(); setLogsOpen(true) }} className="relative text-xs group bg-gray-300 hover:bg-gray-400 transition-all duration-300 cursor-pointer rounded-sm p-1 peer">
                                    <span className='hidden absolute bottom-7 -left-[0.3px] group-hover:block'>Logs</span>
                                    <AlignJustify strokeWidth={1.3} size={19} className="text-gray-800 p-[1px]" />
                                </button>
                                <Logs id={params.id} />
                            </>
                        )
                    }
                    <PSettings />
                    <div className='flex w-max h-max relative'>
                        <button className="text-xs bg-gray-300 cursor-pointer rounded-sm p-1 peer">
                            <Info strokeWidth={1.3} size={19} className="text-gray-800 p-[1px]" />
                        </button>
                        <div className="transition-all duration-300 flex-wrap border-white border-1 shadow-2xl rounded-xl gap-4 text-sm peer-hover:opacity-100 peer-hover:pointer-events-auto pointer-events-none opacity-0 absolute  justify-center items-center p-2 bottom-10 w-[270px] h-max bg-orange-100">
                            <span className="font-medium pb-1 block text-gray-800">We support most static-site generation frameworks.</span>
                            <div className='flex w-full flex-wrap h-max gap-2'>
                                {
                                    supports.map((s, i) => (
                                        <div key={i} className="flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow-sm">
                                            <Image width={20} height={20} src={`/${s.img}`} alt="logo" className="h-4 w-4" />
                                            <span>{s.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        deployProject();
                    }}
                    className="cursor-pointer bg-gray-800 text-white transition-all duration-300 rounded-sm text-xs px-[1px]" ><Send className="p-1" size={25} strokeWidth={1} /></button>
            </div>
        </div>
    )
}

export default DeployCard