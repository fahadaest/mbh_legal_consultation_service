'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useGetCustomerFeedbackQuery } from "@/store/api";

export default function Clients({ locale }) {
    const [index, setIndex] = useState(0);
    const { data, error, isLoading } = useGetCustomerFeedbackQuery(locale);
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setFeedbacks(data);
        }
    }, [data]);

    const prevTestimonial = () => {
        setIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    };

    const nextTestimonial = () => {
        setIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    };

    const current = feedbacks[index];

    return (
        <div className="p-6 px-40 space-y-10 flex flex-col items-center justify-center gap-10 text-white min-h-screen">
            <div className="space-y-4 max-w-2xl text-left self-start">
                <h2 className="text-3xl font-bold">What our clients are saying</h2>
                <p>
                    Our clients range from individual investors to international and Fortune 500 companies.
                </p>
            </div>

            {current && (
                <div className="flex flex-col md:flex-row items-stretch gap-8">
                    <div className="flex-none">
                        <Image
                            src={current.imageUrl}
                            alt={current.name}
                            width={300}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-between w-full md:w-2/3 text-left">
                        <p className="text-lg">{current.remarks}</p>

                        <div>
                            <h4 className="text-xl font-semibold">{current.name}</h4>
                            <span>{current.position}</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-end gap-6 w-full">
                <button onClick={prevTestimonial} className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                    <KeyboardArrowLeftIcon />
                </button>
                <button onClick={nextTestimonial} className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                    <KeyboardArrowRightIcon />
                </button>
            </div>
        </div>
    );
}