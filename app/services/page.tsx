import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ProcessTimeline from "../components/services/ProcessTimeline";
import CTASection from "../components/services/CTASection";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="grow">
                <ServicesHero />
                <ServicesGrid />
                <ProcessTimeline />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
