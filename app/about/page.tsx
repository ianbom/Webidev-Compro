import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutVision from "../components/about/AboutVision";
import AboutStory from "../components/about/AboutStory";
import CTASection from "../components/services/CTASection";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="grow">
                <AboutHero />
                <AboutStats />
                <AboutVision />
                <AboutStory />
                <div className="py-20">
                    <CTASection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
