export default function Footer() {
    return (
        <footer className="bg-darkBrown text-white px-8 py-12 text-sm">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-700 pb-6 mb-6">
                {/* Email Subscribe Form */}
                <form className="mb-4 md:mb-0 flex items-center gap-2">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="px-4 py-2 rounded text-black"
                    />
                    <button
                        type="submit"
                        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
                    >
                        Subscribe
                    </button>
                </form>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" aria-label="Google" className="hover:text-gray-400">
                        <i className="fab fa-google"></i>
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row md:justify-between items-center text-gray-400">
                {/* Left Menu Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Our Strategy</a>
                    <a href="#" className="hover:text-white">Our Advantages</a>
                    <a href="#" className="hover:text-white">Social Responsibility</a>
                    <a href="#" className="hover:text-white">Our Services</a>
                </div>

                {/* Copyright */}
                <div>© 2024. All rights reserved.</div>
            </div>
        </footer>
    );
}
