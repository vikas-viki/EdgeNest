import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="font-black text-xl rocoleta flex justify-center gap-1">
            <Image unoptimized src={"/icon.png"} width={20} height={10} alt=">" />
            <span className='block pt-[2px]'>EDGE NEST</span>
        </Link>
    )
}

export default Logo