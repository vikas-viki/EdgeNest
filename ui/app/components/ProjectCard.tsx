"use client";
import { Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { SITE_URL } from '../lib/constants'
import { useRouter } from 'next/navigation'
import { getLiveLink, timeAgo } from '@/app/lib/helpers';
import { DeploymentStatus, UserProject } from '../lib/types'
import { useStore } from 'zustand';
import { userStore } from '../stores/user';

const ProjectCard = ({ project }: { project: UserProject }) => {
    const router = useRouter();
    const { setSelectedProject } = useStore(userStore);
    return (
        <div
            onClick={() => {
                setSelectedProject(project);
                router.push(`/dashboard/${project.id}`);
            }}
            className='border-1 rounded-2xl hover:shadow-2xl transition-all bg-neutral-50 gap-1 duration-300 cursor-pointer flex flex-col w-max min-w-[270px] p-4'>
            <span className='text-lg font-medium'>{project.name}</span>
            <div className='flex w-full gap-4 justify-between items-center'>
                <Link
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    href={getLiveLink(project.subDomain)} className='text-sm underline'>{project.subDomain}{SITE_URL}</Link>
                <span className='text-xs text-gray-700'>{timeAgo(project.updatedAt)}</span>
            </div>
            <div className='flex justify-between pt-3'>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                        router.push(`/dashboard/${project.id}/settings`);
                    }}
                    className='rounded-lg bg-inherit text-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-50 hover:text-black cursor-pointer font-medium px-3 text-sm transition-all duration-200'><Settings size={20} /><span>Settings</span></button>

                <button onClick={e => e.stopPropagation()} disabled={project.deploymentStatus == DeploymentStatus.IN_PROGRESS} className='rounded-lg bg-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-50 hover:text-black cursor-pointer font-medium px-3 text-sm transition-all duration-200 text-white'>
                    <span>{project.deploymentStatus == DeploymentStatus.IN_PROGRESS ? "Deploying..." : "Deploy Again"}</span>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard