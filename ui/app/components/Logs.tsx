"use client";
import React from 'react'
import { useStore } from 'zustand';
import { tempStore } from '../stores/temp';
import { Plus } from 'lucide-react';
import { getLiveLink } from '../lib/helpers';
import Link from 'next/link';

const Logs = ({ id }: { id: string }) => {
    const { deploymentLogs, logsOpen, subdomain, setLogsOpen } = useStore(tempStore);

    return (
        <div className={`${logsOpen ? 'opacity-100 pointer-events-auto' : "opacity-0 pointer-events-none"} slim-slider shadow-2xl border-1 border-white absolute bg-orange-100 p-5 rounded-xl w-full md:w-[50vw] h-[50vh] overflow-hidden z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transition-all duration-300 flex-col gap-1 py-5 `}>
            <div className='flex flex-col gap-4 h-full relative'>
                <div className='w-full flex justify-between items-start h-max sticky top-0 bg-orange-100'>
                    <div className='w-full items-start gap-3 flex-col '>
                        <span className='font-bold text-lg'>{id}</span><br />
                        {subdomain && <Link className='underline' href={getLiveLink(subdomain)} >{getLiveLink(subdomain)}</Link>}
                    </div>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setLogsOpen(false);
                    }} className='font-semibold flex justify-center items-center text-white bg-gray-800 rounded-sm border-1 border-black hover:bg-orange-100 transition-all duration-300 p-1 cursor-pointer hover:text-black outline-none'>
                        <Plus className='rotate-45' />
                    </button>
                </div>
                <span className='font-medium select-none text-base'>Deployment Logs</span>
                <div
                    style={{
                        fontFamily: "sans-serif"
                    }}
                    onClick={(e) => e.stopPropagation()} className={`overflow-y-scroll slim-slider w-full flex flex-col gap-1 bg-gray-500 p-1 px-2 rounded-sm text-white cursor-auto`}>
                    {
                        deploymentLogs && deploymentLogs.length > 0 ? deploymentLogs.map((d, i) => (
                            <div className='flex gap-4 w-full' key={i}>
                                <span className='text-nowrap'>{d.time}</span>
                                <span>
                                    {d.log}
                                </span>
                            </div>
                        )) :
                            <span>waiting for build logs</span>
                    }
                </div>
            </div>
        </div>
    );
}

export default Logs