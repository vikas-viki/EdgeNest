"use client";
import Loader from '@/app/components/Loader';
import Logo from '@/app/components/Logo'
import ProjectCard from '@/app/components/ProjectCard'
import { userStore } from '@/app/stores/user';
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useStore } from 'zustand';

const Dashboard = () => {
    const { getUserData, userData } = useStore(userStore);

    useEffect(() => {
        getUserData();
    }, []);

    if (!userData) return <Loader />;

    return (
        <div className='flex flex-col justify-start items-start w-screen h-full px-20 py-10 rocoleta'>
            <Logo />
            <div className='flex justify-between pt-7 pb-2 w-full items-center border-b-1 border-gray-500'>
                <div className='flex items-end justify-end gap-2'>
                    <Image src={userData.avatar} alt='user' width={30} height={30} className='rounded-full' />
                    <span className='text-lg text-gray-800 font-medium'>{userData.username}</span>
                </div>
                <Link href="/dashboard/new" className='rounded-sm bg-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-50 hover:text-black cursor-pointer font-semibold px-3 text-base transition-all duration-200 text-white'><Plus size={20} /><span>New Project</span></Link>
            </div>
            <div className='flex flex-wrap w-full justify-start items-start pt-6 gap-6'>
                {
                    userData.projects.length > 0 ?
                        userData.projects.map((e, i) => (
                            <ProjectCard project={e} key={i} />
                        ))
                        : <span className='text-gray-500'>No Projects Yet!</span>
                }
            </div>
        </div>
    )
}

export default Dashboard