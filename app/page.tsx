import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-linear-to-b from-blue-50/50 via-white to-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
