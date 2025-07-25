import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <span className="font-black text-xl rocoleta flex justify-center">
            <Image unoptimized src={"/icon.png"} width={20} height={10} alt=">" />
            <span>EDGE NEST</span>
        </span>
    )
}

export default Logo