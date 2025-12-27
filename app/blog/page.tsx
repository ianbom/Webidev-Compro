"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogHero from "../components/blog/BlogHero";
import BlogFilter from "../components/blog/BlogFilter";
import BlogList from "../components/blog/BlogList";
import BlogNewsletter from "../components/blog/BlogNewsletter";

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-background-light">
            <Header />
            <main className="grow">
                <BlogHero />
                <BlogFilter />
                <BlogList />
                <BlogNewsletter />
            </main>
            <Footer />
        </div>
    );
}
