'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';

export default function Header() {
    const [language, setLocalLanguage] = useState('EN');
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [darkText, setDarkText] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const t = useTranslations();

    useEffect(() => {
        const cookieLang = Cookies.get('language') || 'EN';
        setLocalLanguage(cookieLang);
    }, []);

    const selectLanguage = (langs) => {
        Cookies.set('language', langs, { expires: 365 });
        setLocalLanguage(langs);
        setShowDropdown(false);
        window.location.reload();
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const thirdSection = document.getElementById("third-section");
            const thirdSectionTop = thirdSection?.getBoundingClientRect().top;

            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);

            if (thirdSectionTop !== undefined && thirdSectionTop <= 100) {
                setDarkText(false);
            } else if (currentScrollY > viewportHeight) {
                setDarkText(true);
            } else {
                setDarkText(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <header className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${showHeader ? "translate-y-0" : "-translate-y-full"} bg-transparent`}>
            <div className="max-w-8xl mx-auto px-8 py-4 flex items-center justify-between">
                <div>
                    <Image src="/images/logo.png" alt="Logo" width={74} height={42} />
                </div>

                <nav className={`hidden text-sm md:flex items-center space-x-6 ${darkText ? "text-darkBrown" : "text-white"}`}>
                    <a href="#home">{t('home')}</a>
                    <a href="#about">{t('about')}</a>
                    <div className="relative group flex items-center">
                        <button className="flex items-center space-x-1">
                            <span>{t('services')}</span>
                        </button>
                    </div>
                    <a href="#team">{t('ourTeam')}</a>
                    <a href="#blogs">{t('blogs')}</a>
                    <a href="#contact">{t('contact')}</a>
                </nav>

                <div className="flex items-center space-x-4 relative">
                    <div className="relative">
                        <button onClick={toggleDropdown} className={`flex items-center justify-between px-3 py-2  font-medium text-sm gap-1 ${darkText ? "text-darkBrown" : "text-white"} hover:bg-opacity-10`} >
                            <span>{language}</span>
                            {showDropdown ? (
                                <KeyboardArrowUpIcon className="w-4 h-4" />
                            ) : (
                                <KeyboardArrowDownIcon className="w-4 h-4" />
                            )}
                        </button>
                        {showDropdown && (
                            <div className={`absolute right-0 mt-2 w-24 rounded-md shadow-lg z-10 ${darkText ? "bg-white text-black" : "bg-white text-black"}`}>
                                <button onClick={() => selectLanguage("EN")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    EN
                                </button>
                                <button onClick={() => selectLanguage("AR")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    AR
                                </button>
                            </div>
                        )}
                    </div>

                    <button className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 border ${darkText ? "border-darkBrown text-darkBrown" : "border-white text-white hover:bg-white hover:text-black"}`}>
                        Book Appointment
                    </button>
                </div>
            </div>
        </header>
    );
}