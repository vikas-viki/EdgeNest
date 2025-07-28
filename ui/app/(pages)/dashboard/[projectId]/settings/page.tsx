"use client";
import Loader from '@/app/components/Loader';
import Logo from '@/app/components/Logo'
import { SITE_URL } from '@/app/lib/constants'
import { NewDeploymentData } from '@/app/lib/types';
import { userStore } from '@/app/stores/user'
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { useStore } from 'zustand';

const ProjectSettings = () => {
    const { newDeployment, loading, subDomainExists, subdomainValid, selectedProject, setSubdomainValid } = useStore(userStore);
    const [subDomain, setSubDomain] = useState(selectedProject?.subDomain || "");

    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current as NodeJS.Timeout);
        }

        if (subDomain.length > 0 && subDomain != selectedProject?.subDomain) {
            timer.current = setTimeout(() => {
                subDomainExists(subDomain);
            }, 700);
        }
    }, [subDomain]);

    const isValidSubdomain = (domain: string) => {
        return domain.length == 0 || /^[a-zA-Z0-9-]+$/.test(domain);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (loading || !selectedProject) return;
        const formData = new FormData(e.target as HTMLFormElement);

        const data: NewDeploymentData = {
            id: selectedProject!.id,
            name: formData.get("project_name")?.toString() || "",
            gitUrl: formData.get("github_url")?.toString() || "",
            repoBranch: formData.get("github_branch")?.toString() || "",
            subDomain: formData.get("sub_domain")?.toString() || "",
            env: formData.get("env_file")?.toString() || "",
            outputFolder: formData.get("output_folder")?.toString() || ""
        };

        await newDeployment(data);
    }

    useEffect(() => {
        setSubdomainValid(true);

        return () => {
            setSubdomainValid(false);
        }
    }, []);
    if (!selectedProject) return <Loader />;
    return (
        <div className='flex flex-col justify-start items-start w-full overflow-hidden h-full px-20 py-10 rocoleta'>
            <Logo />
            <div className='flex flex-col gap-1 py-8 w-full'>
                <Link href={`/dashboard/${selectedProject.id}`} className='flex w-full justify-start items-center gap-3'>
                    <ArrowLeft size={20} className='hover:bg-gray-300 cursor-pointer transition-all duration-300 rounded-sm' />
                    <span className='text-xl font-semibold'>{selectedProject.name}</span>
                </Link>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
                    <div className='flex flex-col'>
                        <label htmlFor="project_name" className='font-medium text-base'>Project Name*</label>
                        <input required type="text" name="project_name" id="project_name" defaultValue={selectedProject.name} className='border-1 rounded-lg py-2 text-base px-3 outline-none ' placeholder='EdgeNext' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="github_url" className='font-medium text-base'>Github URL*</label>
                        <input required type="text" name="github_url" id="github_url" defaultValue={selectedProject.gitUrl} className='border-1 rounded-lg py-2 text-base px-3 outline-none ' placeholder='https://github.com/hkirat/react-boilerplate' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="github_branch" className='font-medium text-base'>Branch*</label>
                        <input required type="text" name="github_branch" id="github_branch" defaultValue={selectedProject.repoBranch} className='border-1 rounded-lg py-2 text-base px-3 outline-none ' placeholder='main' />
                        <span className='text-gray-600 select-none text-sm'>can&apos;t be changed later</span>
                    </div>
                    <div className='flex flex-col relative'>
                        <label htmlFor="sub_domain" className='font-medium text-base'>Sub Domain*</label>
                        {loading && <Loader2 className='absolute animate-spin top-8 left-5' />}
                        <input disabled={loading} required type="text" value={subDomain} onChange={(e) => {
                            if (isValidSubdomain(e.target.value)) {
                                setSubDomain(e.target.value)
                            }
                        }} name="sub_domain" id="sub_domain"
                            className={`border-1 rounded-lg py-2 text-base px-3 outline-none ${subdomainValid ? "border-green-500" : "border-red-300"} ${loading && "opacity-50"}`} placeholder='edgenext' />
                        <span className='text-gray-600 select-none text-sm'><strong>{subDomain}</strong>{SITE_URL} will be the site url.</span>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="env_file" className='font-medium text-base'>Environment variables <span className='text-gray-600 text-sm'>(optional)</span></label>
                        <textarea rows={5} name="env_file" defaultValue={selectedProject.env || ""} id="env_file" className='border-1 rounded-lg py-2 text-base px-3  w-full outline-none ' placeholder='.env content here'></textarea>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="output_folder" className='font-medium text-base'>Output Folder*</label>
                        <input required type="text" name="output_folder" defaultValue={selectedProject.outputFolder} id="output_folder" className='border-1 rounded-lg py-2 text-base px-3 outline-none ' placeholder='dist' />
                        <span className='text-gray-600 select-none text-sm'>build output folder</span>
                    </div>
                    {/* <div className={`flex gap-2 items-center checkbox-wrapper cursor-pointer  select-none`} >
                        <input type='checkbox' id="auto_deployments" />
                        <span className={`custom-checkbox`}></span>
                        <label htmlFor={"auto_deployments"} className={`cursor-pointer pt-[3px] `}>Auto Deployments</label>
                    </div> */}
                    <button type='submit' className='font-semibold flex justify-center items-center text-white bg-black rounded-lg border-1 border-black hover:bg-orange-100 transition-all duration-300 px-4 py-3 cursor-pointer hover:text-black outline-none'>
                        {loading ? <Loader2 className='animate-spin' /> : "Re Deploy"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProjectSettings