import Link from "next/link";

interface BlogPost {
    id: number;
    category: string;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
}

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    if (posts.length === 0) {
        return (
            <section className="py-12 md:py-16 bg-white min-h-[50vh] flex items-center justify-center">
                <div className="text-center text-gray-500">
                    <span className="material-symbols-outlined text-4xl mb-2">
                        search_off
                    </span>
                    <p>Tidak ada artikel yang ditemukan.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 group h-full cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${post.image}')` }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-secondary font-medium mb-3">
                                    <span className="material-symbols-outlined text-sm">
                                        calendar_today
                                    </span>
                                    <span>{post.date}</span>
                                    <span className="mx-1 text-gray-300">•</span>
                                    <span className="material-symbols-outlined text-sm">
                                        schedule
                                    </span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-sm font-semibold text-text-main group-hover:underline">
                                        Baca Artikel
                                    </span>
                                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                                        arrow_right_alt
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav
                        aria-label="Pagination"
                        className="inline-flex rounded-md shadow-sm isolate gap-2"
                    >
                        <a
                            className="relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-500 hover:text-text-main hover:bg-gray-100 transition-colors"
                            href="#"
                        >
                            <span className="sr-only">Previous</span>
                            <span className="material-symbols-outlined text-lg">
                                chevron_left
                            </span>
                        </a>
                        <a
                            aria-current="page"
                            className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-accent-blue focus:z-20"
                            href="#"
                        >
                            1
                        </a>
                        <a
                            className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-text-main ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                            href="#"
                        >
                            2
                        </a>
                        <a
                            className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-text-main ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                            href="#"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
                            ...
                        </span>
                        <a
                            className="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-500 hover:text-text-main hover:bg-gray-100 transition-colors"
                            href="#"
                        >
                            <span className="sr-only">Next</span>
                            <span className="material-symbols-outlined text-lg">
                                chevron_right
                            </span>
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    );
}
