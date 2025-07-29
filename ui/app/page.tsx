"use client"
import { Loader2 } from "lucide-react";
import "./globals.css"
import Link from "next/link";
import Logo from "./components/Logo";
import { useStore } from "zustand";
import { authStore } from "./stores/auth";
import DeployCard from "./components/DeployCard";

export default function Home({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
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
        <DeployCard searchParams={searchParams} />
      </div>
    </div>
  );
}
