import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-10 py-12 lg:py-20">
                {/* Section Header */}
                <div className="flex flex-col items-center max-w-[960px] mx-auto mb-16">
                    <h1 className="text-text-main tracking-tight text-4xl lg:text-5xl font-bold leading-tight text-center pb-4">
                        Hubungi Kami
                    </h1>
                    <p className="text-text-muted text-lg font-normal leading-relaxed text-center max-w-2xl">
                        Siap mewujudkan ide digital Anda? Diskusikan proyek Anda bersama tim
                        ahli kami. Kami siap membantu mentransformasi visi Anda menjadi
                        realitas.
                    </p>
                </div>
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </main>
            <Footer />
        </div>
    );
}
