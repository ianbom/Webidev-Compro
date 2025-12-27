export default function BlogHero() {
    return (
        <section className="bg-background-light py-16 md:py-24 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main mb-6">
                        Jelajahi Pemikiran <br />
                        <span className="relative inline-block text-gray-800">
                            Terbaru Kami
                            <svg
                                className="absolute -bottom-2 w-full h-3 text-primary"
                                preserveAspectRatio="none"
                                viewBox="0 0 100 10"
                            >
                                <path
                                    d="M0 5 Q 50 10 100 5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                ></path>
                            </svg>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                        Wawasan, pendalaman teknis, dan filosofi desain dari tim WebIDev.
                        Tetap update dengan tren terbaru dalam pengembangan perangkat lunak.
                    </p>
                </div>
            </div>
        </section>
    );
}
