'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';

export default function Header() {
    const [language, setLocalLanguage] = useState('EN');
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [darkText, setDarkText] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = useTranslations();
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const cookieLang = Cookies.get('language') || 'EN';
        setLocalLanguage(cookieLang);
    }, []);

    const selectLanguage = (langs) => {
        Cookies.set('language', langs, { expires: 365 });
        setLocalLanguage(langs);
        setShowDropdown(false);
        setMobileMenuOpen(false);
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
            setIsAtTop(currentScrollY <= 10);

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
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <header
            className={`
          fixed top-0 left-0 w-full transition-transform duration-300 z-50
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
          ${!isAtTop ? "bg-transparent bg-opacity-80 backdrop-blur-md" : "bg-transparent"}
        `}
        >
            <div className="max-w-8xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                <div>
                    <Image src="/images/logo.png" alt="Logo" width={74} height={42} />
                </div>

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex text-sm items-center space-x-6 ${darkText ? "text-darkBrown" : "text-white"}`}>
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

                {/* Mobile menu toggle */}
                <button
                    className={`md:hidden focus:outline-none ${darkText ? "text-darkBrown" : "text-white"}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>

                {/* Right side: language selector and book button */}
                <div className="hidden md:flex items-center space-x-4 relative">
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className={`flex items-center justify-between px-3 py-2 font-medium text-sm gap-1 ${darkText ? "text-darkBrown" : "text-white"} hover:bg-opacity-10`}
                            aria-haspopup="true"
                            aria-expanded={showDropdown}
                        >
                            <span>{language}</span>
                            {showDropdown ? (
                                <KeyboardArrowUpIcon className="w-4 h-4" />
                            ) : (
                                <KeyboardArrowDownIcon className="w-4 h-4" />
                            )}
                        </button>
                        {showDropdown && (
                            <div className={`absolute right-0 mt-2 w-24 rounded-md shadow-lg z-10 bg-white text-black`}>
                                <button onClick={() => selectLanguage("EN")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    EN
                                </button>
                                <button onClick={() => selectLanguage("AR")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    AR
                                </button>
                            </div>
                        )}
                    </div>

                    <button className={`px-3 py-3 rounded-md text-sm font-medium transition-colors duration-200 border ${darkText ? "border-darkBrown text-darkBrown" : "border-white text-white hover:bg-white hover:text-black"}`}>
                        {t('bookAppointment')}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <nav
                    className={`md:hidden bg-white text-black shadow-lg w-full absolute top-full left-0 z-40`}
                >
                    <div className="flex flex-col px-4 py-4 space-y-4">
                        <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block">
                            {t('home')}
                        </a>
                        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block">
                            {t('about')}
                        </a>
                        <div className="relative group">
                            <button className="w-full text-left flex items-center justify-between" disabled>
                                <span>{t('services')}</span>
                                {/* If you want dropdown for services here, can add */}
                            </button>
                        </div>
                        <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block">
                            {t('ourTeam')}
                        </a>
                        <a href="#blogs" onClick={() => setMobileMenuOpen(false)} className="block">
                            {t('blogs')}
                        </a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block">
                            {t('contact')}
                        </a>

                        {/* Language Selector */}
                        <div className="border-t border-gray-300 pt-4">
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center justify-between w-full px-3 py-2 font-medium text-sm text-black bg-gray-100 rounded-md"
                                    aria-haspopup="true"
                                    aria-expanded={showDropdown}
                                >
                                    <span>{language}</span>
                                    {showDropdown ? (
                                        <KeyboardArrowUpIcon className="w-4 h-4" />
                                    ) : (
                                        <KeyboardArrowDownIcon className="w-4 h-4" />
                                    )}
                                </button>
                                {showDropdown && (
                                    <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white text-black z-50">
                                        <button onClick={() => selectLanguage("EN")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                            EN
                                        </button>
                                        <button onClick={() => selectLanguage("AR")} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                            AR
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Book Appointment Button */}
                        <button
                            className="w-full mt-4 px-3 py-3 rounded-md text-sm font-medium border border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('bookAppointment')}
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}
