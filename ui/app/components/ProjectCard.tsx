import { Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { SITE_URL } from '../lib/constants'

const ProjectCard = (data: { title: string, subdomain: string, updatedAt: string, id: string }) => {
    return (
        <div className='border-1 rounded-2xl hover:shadow-2xl transition-all bg-neutral-50 gap-1 duration-300 cursor-pointer flex flex-col w-max min-w-[270px] p-4'>
            <span className='text-lg font-medium'>{data.title}</span>
            <div className='flex w-full justify-between items-center'>
                <Link href={`https://${data.subdomain}${SITE_URL}`} className='text-sm underline'>{data.subdomain}${SITE_URL}</Link>
                <span className='text-xs text-gray-700'>{data.updatedAt}</span>
            </div>
            <div className='flex justify-between pt-3'>
                <button className='rounded-lg bg-inherit text-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-50 hover:text-black cursor-pointer font-medium px-3 text-sm transition-all duration-200'><Settings size={20} /><span>Settings</span></button>

                <button className='rounded-lg bg-black flex justify-center items-center p-2 gap-1 outline-none border-black border-1 hover:bg-orange-50 hover:text-black cursor-pointer font-medium px-3 text-sm transition-all duration-200 text-white'><span>Deploy Again</span></button>
            </div>
        </div>
    )
}

export default ProjectCard