export default function CTASection() {
    return (
        <section className="w-full px-4 py-20 lg:py-32 bg-background-light">
            <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-[#181710] px-6 py-16 sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 shadow-2xl">
                    {/* Decorative abstract background */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            viewBox="0 0 1024 1024"
                        >
                            <circle
                                cx="512"
                                cy="512"
                                fill="url(#gradient)"
                                fillOpacity="0.7"
                                r="512"
                            ></circle>
                            <defs>
                                <radialGradient id="gradient">
                                    <stop stopColor="#fddf49"></stop>
                                    <stop offset="1" stopColor="#2563EB"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Butuh Solusi Khusus?
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Mari diskusikan bagaimana kami dapat mewujudkan visi Anda dengan
                                tim ahli kami. Kami siap memulai perjalanan Anda.
                            </p>
                        </div>
                        <div className="flex items-center justify-center lg:justify-end shrink-0">
                            <button className="rounded-lg bg-primary px-8 py-4 text-base font-bold text-text-main shadow-sm hover:bg-[#ebd044] transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer">
                                Hubungi Kami
                                <span className="material-symbols-outlined text-[20px]">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
