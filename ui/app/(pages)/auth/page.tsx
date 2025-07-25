"use client"
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import Logo from '@/app/components/Logo'

const Auth = () => {
    const [permissionsOpen, setPermissionsOpen] = useState(false);
    return (
        <div className='w-screen h-screen flex flex-col px-20 py-10 items-center'>
            <div className='self-start'>
                <Logo />
            </div>
            <div className='border-1 rounded-lg p-5 w-max mt-60'>
                <span className='rocoleta text-2xl font-bold'>Connect Your Github Account to continue</span>
                <div className={`flex flex-col gap-1 avenir mt-5 transition-all duration-300 ${permissionsOpen ? "max-h-[300px]" : "max-h-[30px]"} overflow-hidden`}>
                    <button
                        onClick={() => {
                            setPermissionsOpen(prev => !prev);
                        }}
                        className='flex justify-start gap-4 cursor-pointer hover:bg-slate-50 rounded-sm  transition-all duration-200 w-max items-center'>
                        <span className='text-lg'>Permissions</span>
                        <span>
                            <ChevronDown size={20} className={`${permissionsOpen ? "-rotate-180" : "rotate-0"} transition-all duration-300`} />
                        </span>
                    </button>
                    <CustomCheckBox checked={true} reason='email and username' label='Profile' id="auth_profile" />
                    <CustomCheckBox checked={false} reason='auto deployments' label='Write Access' id="auth_write" />
                    <CustomCheckBox checked={false} reason='to deploy if any' label='Private Repos' id="auth_private" />
                </div>
                <button className='bg-black rocoleta text-white font-semibold text-base text-center w-full py-3 cursor-pointer rounded-sm mt-4'>
                    Continue With Github
                </button>
            </div>
        </div>
    )
}

const CustomCheckBox = ({ label, reason, checked, id }: { label: string, reason: string, checked: boolean, id: string }) => {
    return (
        <div className={`flex gap-2 items-center checkbox-wrapper cursor-pointer  select-none ${checked ? "pointer-events-none" : ""}`} >
            <input type='checkbox' id={id} readOnly={checked} />
            <span className={`custom-checkbox ${checked && "checked"}`}></span>
            <label htmlFor={id} className={`cursor-pointer pt-[3px] ${checked && "text-gray-500"}`}>{label} <span className='text-gray-600'>({reason})</span></label>
        </div>
    )
}
export default Auth