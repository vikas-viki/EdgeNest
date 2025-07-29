"use client";
import React from 'react'
import { useStore } from 'zustand';
import { tempStore } from '../stores/temp';

const PSettings = () => {

    const { branch, setBranch, env, modalOpen, setModalOpen, setEnv, outputFolder, setOutputFolder } = useStore(tempStore);

    return (
        <div className={`${modalOpen ? 'opacity-100 pointer-events-auto' : "opacity-0 pointer-events-none"} slim-slider shadow-2xl border-1 border-white absolute bg-orange-100 p-5 rounded-xl w-full md:w-[50vw] h-[50vh] overflow-y-scroll z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transition-all duration-300 flex-col gap-1 py-5 `}>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="github_branch" className='font-medium text-base'>Branch*</label>
                    <input required type="text" value={branch} onChange={(e) => setBranch(e.target.value)} name="github_branch" id="github_branch" className='border-1 rounded-lg py-2 text-base px-3 outline-none ' placeholder='main' />
                    <span className='text-gray-600 select-none text-sm'>(default <strong>main</strong>)</span>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="env_file" className='font-medium text-base'>Environment variables <span className='text-gray-600 text-sm'>(optional)</span></label>
                    <textarea value={env} onChange={e => setEnv(e.target.value)} rows={5} name="env_file" id="env_file" className='border-1 rounded-lg py-2 text-base px-3  w-full outline-none ' placeholder='.env content here'></textarea>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="output_folder" className='font-medium text-base'>Output Folder*</label>
                    <input required type="text" value={outputFolder} onChange={e => setOutputFolder(e.target.value)} name="output_folder" id="output_folder" className='border-1 rounded-lg py-2 text-base px-3 outline-none ' placeholder='dist' />
                    <span className='text-gray-600 select-none text-sm'>build output folder (default <strong>dist</strong>)</span>
                </div>
                <button onClick={(e) => {
                    e.stopPropagation();
                    setModalOpen(false);
                }} className='font-semibold flex justify-center items-center text-white bg-black rounded-lg border-1 border-black hover:bg-orange-100 transition-all duration-300 px-4 py-3 cursor-pointer hover:text-black outline-none'>
                    Save
                </button>
            </div>
        </div>
    );
}

export default PSettings