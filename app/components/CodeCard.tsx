"use client";

import Image from "next/image";

export default function CodeCard() {
    return (
        <Image className="scale-100 origin-center opacity-80" 
        src="/code3.png"
        alt="Code Image"
        width={400}
        height={400}
        />
    )
}