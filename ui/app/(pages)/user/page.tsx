import Logo from '@/app/components/Logo'
import ProjectCard from '@/app/components/ProjectCard'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col justify-start items-start w-screen h-full px-20 py-10 rocoleta'>
            <Logo />
            <div className='flex justify-between pt-5 w-full items-center border-b-1 border-gray-500'>
                <div className='flex items-center justify-start'>
                    <Image src={""} alt='user' width={50} height={50} className='rounded-full' />
                    <span>vikas-viki</span>
                </div>
                <button className='rounded-sm bg-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-50 hover:text-black cursor-pointer font-semibold px-3 text-base transition-all duration-200 text-white'><Plus size={20} /><span>New Project</span></button>
            </div>
            <div className='flex flex-wrap w-full justify-start items-start pt-6 gap-6'>
                <ProjectCard title='EdgeNest' subdomain='edgenest' updatedAt='2 hours ago' id="sdf" />
                <ProjectCard title='EdgeNest' subdomain='edgenest' updatedAt='2 hours ago' id="sdf" />
                <ProjectCard title='EdgeNest' subdomain='edgenest' updatedAt='2 hours ago' id="sdf" />
            </div>
        </div>
    )
}

export default page