import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailHero from "../../components/portfolio/detail/DetailHero";
import DetailOverview from "../../components/portfolio/detail/DetailOverview";
import DetailMetrics from "../../components/portfolio/detail/DetailMetrics";
import DetailGallery from "../../components/portfolio/detail/DetailGallery";
import DetailTestimonial from "../../components/portfolio/detail/DetailTestimonial";
import DetailNextProject from "../../components/portfolio/detail/DetailNextProject";
import Link from "next/link";

export async function generateStaticParams() {
    return [{ slug: "finflow-dashboard" }];
}

export default function PortfolioDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="flex flex-col items-center flex-1 w-full pb-20">
                {/* Breadcrumbs */}
                <div className="w-full max-w-7xl px-6 lg:px-20 pt-8 pb-4">
                    <div className="flex flex-wrap gap-2 items-center">
                        <Link
                            className="text-text-muted hover:text-accent-blue text-sm font-medium leading-normal transition-colors"
                            href="/portfolio"
                        >
                            Portofolio
                        </Link>
                        <span className="material-symbols-outlined text-text-muted text-base">
                            chevron_right
                        </span>
                        <span className="text-text-main text-sm font-medium leading-normal">
                            Redesain Aplikasi Mobile FinTech
                        </span>
                    </div>
                </div>

                <DetailHero />
                <DetailOverview />
                <DetailMetrics />
                <DetailGallery />
                <DetailTestimonial />
                <DetailNextProject />
            </main>
            <Footer />
        </div>
    );
}
