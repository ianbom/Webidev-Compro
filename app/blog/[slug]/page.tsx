import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailHeader from "../../components/blog/detail/DetailHeader";
import DetailContent from "../../components/blog/detail/DetailContent";
import DetailFeedback from "../../components/blog/detail/DetailFeedback";
import DetailNewsletter from "../../components/blog/detail/DetailNewsletter";
import RelatedPosts from "../../components/blog/detail/RelatedPosts";

// For now, we are rendering static content regardless of the slug, 
// matching the user's request to convert the specific HTML template.
export async function generateStaticParams() {
    return [{ slug: "serverless-architecture" }];
}

export default function BlogDetailPage() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-background-light font-display text-text-main antialiased">
            {/* Sticky Header Wrapper (handled by Header component, assuming layout) */}
            <Header />

            {/* Reading Progress Bar (Simulated) */}
            <div className="fixed top-20 left-0 right-0 z-40 w-full h-1 bg-gray-100">
                <div className="h-full bg-primary w-[35%] rounded-r-full"></div>
            </div>

            <main className="flex-grow w-full pt-10 pb-20">
                <div className="layout-container px-5 md:px-10 max-w-[960px] mx-auto w-full">
                    <DetailHeader />
                    <DetailContent />
                    <DetailFeedback />
                    <DetailNewsletter />
                </div>

                {/* Related Posts is full width, so it's outside the max-w container */}
                <RelatedPosts />
            </main>

            <Footer />
        </div>
    );
}
