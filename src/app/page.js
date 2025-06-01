import HeroSection from "@/components/Home/HeroSection";
import OurTeam from "@/components/Home/OurTeam";
import Clients from "@/components/Home/Clients";

export default function Home() {
    return (
        <>
            <main>
                <section className="h-screen">
                    <HeroSection locale={"en"} />
                </section>

                <section className="h-screen bg-offWhite">
                    <OurTeam locale={"en"} />
                </section>

                <section id="third-section" className="h-screen bg-darkBrown">
                    <Clients locale={"en"} />
                </section>
            </main>
        </>
    );
}
