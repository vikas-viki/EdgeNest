"use client";
import React, { useState } from 'react'
import { timeAgo } from '../lib/helpers'
import { ChevronRight, Loader2 } from 'lucide-react'
import { useStore } from 'zustand';
import { userStore } from '../stores/user';

const Deployment = ({ deploymentId, time, projectId }: { deploymentId: string, time: Date, projectId: string }) => {
    const { getLogs, deploymentLogs, deployments } = useStore(userStore);
    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const handleGetLogs = async () => {
        setLoading(true);
        setOpen(prev => !prev);
        if (!open) {
            await getLogs(deploymentId, projectId);
        }
        setLoading(false);
    }

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                handleGetLogs();
            }}
            className='flex flex-col relative w-full justify-between text-base items-center bg-neutral-300 p-3 rounded-xl cursor-pointer'>
            <div className='flex justify-between w-full'>
                <div className='flex justify-center  items-center w-max'>
                    <ChevronRight strokeWidth={1} />
                    <span >{deploymentId}</span>
                </div>
                <span>{timeAgo(time)}</span>
            </div>
            <div
                style={{
                    fontFamily: "sans-serif"
                }}
                onClick={(e) => e.stopPropagation()} className={`${open ? "flex" : "hidden"} overflow-y-scroll max-h-[50vh] h-full w-full  flex mt-2 flex-col gap-1 bg-gray-500 p-1 rounded-sm text-white cursor-auto`}>
                {
                    loading ?
                        <span className='top-5 absolute'><Loader2 className='animate-spin ' /></span>
                        : (
                            deploymentLogs[deploymentId] && deploymentLogs[deploymentId].length > 0 ? deploymentLogs[deploymentId].map((d, i) => (
                                <div className='flex gap-4 w-full' key={i}>
                                    <span className='text-nowrap'>{d.time}</span>
                                    <span>
                                        {d.log}
                                    </span>
                                </div>
                            )) :
                                (
                                    deployments[projectId].filter(d => d.id == deploymentId)[0] ?
                                        <span>waiting for build logs</span> :
                                        <span>No Logs found!</span>
                                )
                        )
                }
            </div>
        </div>
    )
}

export default Deployment