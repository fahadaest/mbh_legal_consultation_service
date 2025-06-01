'use client'
import { useState } from "react";
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useGetTeamQuery } from "@/store/api";

export default function OurTeam({ locale }) {
    const [index, setIndex] = useState(0);
    const { data, error, isLoading } = useGetTeamQuery(locale);

    const visibleCards = 3;

    const nextSlide = () => {
        setIndex((prevIndex) =>
            prevIndex + visibleCards >= (data?.length || 0) ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex - 1 < 0 ? Math.max((data?.length || 0) - visibleCards, 0) : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 space-y-8">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-darkBrown mb-4">Our Team</h2>
                <p className="text-darkGrey max-w-2xl">
                    Meet the dedicated professionals behind our success. With diverse expertise and a shared commitment to excellence, our team works collaboratively to deliver outstanding results and drive innovation.
                </p>
            </div>

            <div className="flex items-center justify-center w-full">
                <button
                    aria-label="Previous content"
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-transparent text-darkBrown hover:bg-gray-200 hover:text-gray-800 transition"
                >
                    <KeyboardArrowLeftIcon fontSize="large" />
                </button>

                <div className="mx-6 w-full max-w-6xl overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}>
                        {(data || []).map((member, i) => (
                            <div key={i} className="flex-none w-1/3 px-2">
                                <div className=" p-4 text-center">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        width={300}
                                        height={100}
                                        className="mx-auto rounded object-cover"
                                    />
                                    <h3 className="mt-4 text-2xl font-semibold text-darkBrown">{member.name}</h3>
                                    <p className="text-base text-lightGrey">{member.position}</p>

                                    <div className="flex justify-center gap-4 mt-3 text-gray-600">
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <Image src="/images/whatsapp.svg" alt="Logo" width={24} height={24} className="inline-block" />
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <Image src="/images/phone.svg" alt="Logo" width={24} height={24} className="inline-block" />
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <Image src="/images/email.svg" alt="Logo" width={24} height={24} className="inline-block" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    aria-label="Next content"
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-transparent text-darkBrown hover:bg-gray-200 hover:text-gray-800 transition"
                >
                    <KeyboardArrowRightIcon fontSize="large" />
                </button>
            </div>
        </div>
    );
}