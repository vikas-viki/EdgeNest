"use client"
import { Info, Loader2, Send } from "lucide-react";
import "./globals.css"
import Link from "next/link";
import Logo from "./components/Logo";
import { useStore } from "zustand";
import { authStore } from "./stores/auth";

export default function Home() {
  const { authenticated, loading } = useStore(authStore);
  return (
    <div className="px-20 py-10 w-screen h-screen flex flex-col items-center overflow-hidden">
      <div className="max-w-[1400px] w-full items-center flex justify-between">
        <Logo />
        <Link href={authenticated ? "/dashboard" : "/auth"} className="rounded-full text-base cursor-pointer font-medium rocoleta hover:bg-orange-50 transition-all duration-300 border-1 hover:text-black hover:border-gray-800 bg-gray-800 px-6 py-2 text-white">
          {
            loading ?
              <span><Loader2 className="animate-spin" /></span>
              :
              authenticated ? "Dashboard" : "Sign in"
          }
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-40">
        <span className="text-5xl font-bold rocoleta text-center">One click to go live, <br />scale and create impact.</span>
        <span className="avenir text-xl font-medium text-center">Launch high-performing websites in seconds built to scale, convert<br /> and grow your impact.</span>
        <div className="px-4 py-4 bg-white text-black border-1 rounded-lg w-[450px] h-[125px] rocoleta flex flex-col justify-between">
          <input type="text" className="outline-none " placeholder="Github Repo URL" />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button className="text-xs bg-gray-300 cursor-pointer rounded-sm p-1">Env</button>
              <button className="text-xs bg-gray-300 cursor-pointer rounded-sm p-1 ">
                <Info strokeWidth={1.3} size={19} className="text-gray-800 p-[1px]" />
              </button>
            </div>
            <button className="cursor-pointer bg-gray-800 text-white transition-all duration-300 rounded-sm text-xs px-[1px]" ><Send className="p-1" size={25} strokeWidth={1} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
