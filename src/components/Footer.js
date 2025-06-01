import { FaTwitter, FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-darkBrown text-white px-8 py-12 text-sm">
            <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-700 pb-6 mb-6w-full">
                <div></div>
                <div className="flex items-center gap-6 ml-auto">
                    <span className="hidden md:inline-block">Contacts</span>

                    <form className="flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 pr-24 rounded text-black"
                            />
                            <button
                                type="submit"
                                className="absolute top-1/2 right-1 -translate-y-1/2 bg-darkBrown rounded-md text-white px-4 py-1"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>


                    <div className="flex gap-4 text-black">
                        <a href="#" aria-label="Twitter" className="hover:text-gray-700">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-gray-700">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" aria-label="Google" className="hover:text-gray-700">
                            <FaGoogle size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center text-gray-400">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Our Strategy</a>
                    <a href="#" className="hover:text-white">Our Advantages</a>
                    <a href="#" className="hover:text-white">Social Responsibility</a>
                    <a href="#" className="hover:text-white">Our Services</a>
                </div>

                <div>© 2024. All rights reserved.</div>
            </div>
        </footer>
    );
}
