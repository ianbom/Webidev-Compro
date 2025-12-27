import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioComparison from "../components/portfolio/PortfolioComparison";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="grow">
                <PortfolioHero />
                <PortfolioGrid />
                 <PortfolioComparison />
                <PortfolioCTA />
            </main>
            <Footer />
        </div>
    );
}
