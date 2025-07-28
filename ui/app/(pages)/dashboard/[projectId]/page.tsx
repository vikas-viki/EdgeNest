"use client";
import Deployment from '@/app/components/Deployment';
import Loader from '@/app/components/Loader';
import Logo from '@/app/components/Logo';
import { SITE_URL } from '@/app/lib/constants';
import { authStore } from '@/app/stores/auth';
import { userStore } from '@/app/stores/user';
import { Settings } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useEffect } from 'react'
import { useStore } from 'zustand';

const ProjectDeployment = ({ params }: { params: Promise<{ projectId: string }> }) => {
    const project = use(params);
    const router = useRouter();
    const { authenticated } = useStore(authStore);
    const { selectedProject, getProjectDeployments, deployments, userData, setSelectedProject, getUserData } = useStore(userStore);

    useEffect(() => {
        if (!deployments[project.projectId]) {
            getProjectDeployments(project.projectId);
        }
    }, [deployments, project.projectId]);

    useEffect(() => {
        console.log({ selectedProject, userData });
        if (!selectedProject) {
            if (!userData) {
                getUserData();
            } else {
                const proj = userData?.projects.filter(p => p.id == project.projectId);
                if (proj) {
                    setSelectedProject(proj[0]);
                }
            }
        }
    }, [authenticated, userData]);

    if (!selectedProject) return <Loader />;

    return (
        <div className='flex flex-col justify-start items-start w-screen h-full px-20 py-10 rocoleta'>
            <Logo />
            <div className='flex  justify-between gap-4 flex-col w-full items-center my-5'>
                <div className='flex w-full justify-between items-center p-4 px-8 border-gray-500 border-1 rounded-lg'>
                    <span className='text-xl font-bold'>
                        {selectedProject.name}
                    </span>
                    <span className='font-bold'>URL: <Link href={`https://${selectedProject.subDomain + SITE_URL}`} target='_blank' className='underline font-normal'>{selectedProject.subDomain}{SITE_URL}</Link></span>
                    <span><span className='font-bold'>Deployments:</span> {deployments[project.projectId]?.length || 0}</span>

                    <div className='flex gap-4'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/dashboard/${selectedProject.id}/settings`);
                            }}
                            className='rounded-lg bg-inherit text-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-100 hover:text-black cursor-pointer font-medium px-3 text-sm transition-all duration-200'><Settings size={20} /><span>Settings</span></button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/dashboard/${selectedProject.id}/settings`);
                            }}
                            className='rounded-lg font-semibold text-white bg-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-100 hover:text-black cursor-pointer px-3 text-sm transition-all duration-200'><span>Deploy Again</span></button>

                    </div>
                </div>
                <div className='flex w-full flex-col gap-4'>
                    <span className='text-lg font-medium select-none'>Deployments</span>

                    <div className='w-full flex flex-col gap-4'>
                        {
                            deployments[project.projectId] && (
                                deployments[project.projectId].map((d, i) => (
                                    <Deployment deploymentId={d.id} time={d.time} key={i} />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDeployment;