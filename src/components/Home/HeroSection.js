'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const contents = [
    {
        text: "Explore the mountains",
        description:
            "Experience breathtaking views and fresh air as you hike through stunning mountain trails. Experience breathtaking views and fresh air as you hike through stunning mountain trails.",
        img: "/images/avatar.png",
    },
    {
        text: "Relax at the beach",
        description:
            "Sunbathe, swim, or simply unwind with the sound of waves on pristine sandy beaches.Experience breathtaking views and fresh air as you hike through stunning mountain trails.",
        img: "/images/avatar.png",
    },
    {
        text: "Discover city life",
        description:
            "Dive into vibrant urban scenes, rich culture, and endless entertainment options.Experience breathtaking views and fresh air as you hike through stunning mountain trails",
        img: "/images/avatar.png",
    },
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    const prevContent = () => {
        setIndex((prev) => (prev === 0 ? contents.length - 1 : prev - 1));
    };

    const nextContent = () => {
        setIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextContent();
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center w-full h-full px-4 py-10">
            <div className="flex flex-col items-center relative mt-20">
                <button onClick={prevContent} aria-label="Previous content" className="p-2 rounded-full bg-transparent text-white hover:bg-gray-200 hover:text-gray-800 transition" >
                    <KeyboardArrowLeftIcon fontSize="large" />
                </button>

                <div className="flex flex-col space-y-3 mt-4">
                    {contents.map((_, i) => (
                        <span key={i} className={`w-4 h-4 rounded-full border border-white cursor-pointer ${index === i ? 'bg-white' : 'bg-transparent'}`} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} />
                    ))}
                </div>
            </div>

            <div className="mx-6 w-full max-w-6xl overflow-hidden rounded-lg">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}  >
                    {contents.map((item, i) => (
                        <div key={i} className="min-w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
                            <div className="p-6 flex-[2] flex items-center justify-start text-left">
                                <div className="flex flex-col gap-10">
                                    <h2 className="text-2xl font-dmSans md:text-4xl font-semibold text-white">{item.text}</h2>
                                    <p className="font-dmSans font-medium text-[18px] leading-[28px] text-white">{item.description}</p>
                                    <button className="self-start px-8 py-4 bg-white darkGrey rounded-lg transition">
                                        Read More
                                    </button>
                                </div>
                            </div>

                            <div className="flex-[1] flex items-center justify-center p-4">
                                <div className="relative aspect-square w-full bg-lightBrown">
                                    <Image
                                        src={item.img}
                                        alt={`Slide ${i + 1}`}
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={nextContent} aria-label="Next content" className="p-2 rounded-full bg-transparent text-white hover:bg-gray-200 hover:text-gray-800 transition">
                <KeyboardArrowRightIcon fontSize="large" />
            </button>
        </div>
    );
}