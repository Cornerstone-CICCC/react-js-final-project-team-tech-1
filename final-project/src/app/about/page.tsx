'use client'

import Image from "next/image";
import Background from "./Background"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import BurgerMenu from "@/components/BurgerMenu";

const girls = [
    'girl1_.png',
    'girl2_.png',
    'girl3_.png',
]

const titleClass = 'text-7xl text-center mb-5'
const sectionClass = 'my-10'

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div className="relative mt-20">
        <Header setMenuOpen={setMenuOpen} />
        <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="flex flex-col justify-center items-center">
            <section className={sectionClass}>
                <div className={titleClass}>
                    Who are we?
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                    <div className="w-[200px] aspect-[2/3] overflow-hidden flex justify-center items-center">
                        <Image 
                            className="rounded-lg"
                            src="/about/who_are_we.png" 
                            width={400} 
                            height={600} 
                            alt="who are we" 
                        />
                    </div>
                    <div className="w-xs lg:w-lg text-lg font-bold">
                        At Rent-A-Girlfriend, we believe that companionship should be accessible, respectful, and... fun! Whether it’s a weekend walk, a movie night, or just a good chat over coffee—we’re here to help you connect.
                    </div>
                </div>
                
            </section>
            <section className={sectionClass}>
                <div className={titleClass}>Meet Our Cast</div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-0 rounded-lg overflow-hidden">
                    {
                        girls.map((girl, index) => (
                            <div key={index} className="w-[200px] aspect-[2/3] overflow-hidden flex justify-center items-center">
                                <Image 
                                    className="object-cover w-full h-full block "
                                    src={`/about/${girl}`} alt="girl1" width={400} height={600} 
                                />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
            <section className={sectionClass}>
                <div className={titleClass}>Our Values</div>
                <div className="flex justify-center items-center gap-10 flex-col lg:flex-row px-8">
                    <ul className="text-lg font-bold">
                        <li>💖 Respect First：Every date is built on mutual respect and boundaries.</li>
                        <li>🧠 Real Personality：Every cast member is unique, creative, and independent.</li>
                        <li>🕒 Flexible & Transparent：Easy to schedule. No hidden fees. No weird vibes.</li>
                    </ul>
                    <div className="w-[200px] aspect-[2/3] overflow-hidden flex justify-center items-center">
                        <Image 
                            className="rounded-lg"
                            src="/about/our_values.png" 
                            width={400} 
                            height={600} 
                            alt="who are we" 
                        />
                    </div>
                </div>
            </section>
        
            <section className={sectionClass}>
                <div className={titleClass}>Safety & Boundaries</div>
                <div className="flex justify-center items-center gap-10 flex-col lg:flex-row">
                    <div className="w-[200px] aspect-[2/3] overflow-hidden flex justify-center items-center">
                        <Image 
                            className="rounded-lg"
                            src="/about/respectful.png" 
                            width={400} 
                            height={600} 
                            alt="respectful" 
                        />
                    </div>
                    <div className="w-xs lg:w-lg text-lg font-bold">
                        Our service is strictly non-sexual. Our girlfriends are here to accompany you for casual, respectful, and friendly experiences. We uphold a zero-tolerance policy toward harassment or inappropriate behavior.
                    </div>
                    <div className="w-[200px] aspect-[2/3] overflow-hidden flex justify-center items-center">
                        <Image 
                            className="rounded-lg"
                            src="/about/friendly.png" 
                            width={400} 
                            height={600} 
                            alt="respectful" 
                        />
                    </div>
                </div>
            </section>
        </div>
        <Footer />
        <Background />
    </div>
}