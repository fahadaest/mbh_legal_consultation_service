import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
    return (
        <>
            <main>
                <section className="h-screen">
                    <HeroSection />
                </section>

                <section className="h-screen bg-offWhite">
                    Second Section
                </section>

                <section id="third-section" className="h-screen bg-darkBrown">
                    Third Section
                </section>
            </main>
        </>
    );
}
