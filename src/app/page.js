'use client'
import HeroSection from "@/components/Home/HeroSection";
import OurTeam from "@/components/Home/OurTeam";
import Clients from "@/components/Home/Clients";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

export default function Home() {
    const [language, setLocalLanguage] = useState('EN');
    useEffect(() => {
        const cookieLang = Cookies.get('language') || 'EN';
        setLocalLanguage(cookieLang.toLocaleLowerCase());
    }, []);

    return (
        <>
            <main>
                <section className="h-screen">
                    <HeroSection locale={language} />
                </section>

                <section className="h-screen bg-offWhite">
                    <OurTeam locale={language} />
                </section>

                <section id="third-section" className="h-screen bg-darkBrown">
                    <Clients locale={language} />
                </section>
            </main>
        </>
    );
}