export default function ServicesHero() {
    return (
        <section className="relative flex w-full flex-col justify-center overflow-hidden py-16 md:py-24 lg:py-32 bg-background-light">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 bg-dot-pattern opacity-50"></div>
            {/* Gradient Overlay for Softness */}
            <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent via-background-light/50 to-background-light"></div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6">

                    {/* Page Heading */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-black tracking-tight text-text-main sm:text-5xl md:text-6xl">
                            Layanan Kami
                        </h1>
                        <div className="mt-6 flex flex-col gap-4 border-l-4 border-primary pl-6">
                            <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                                Mengubah ide menjadi realitas digital. Kami menyediakan solusi
                                pengembangan perangkat lunak ujung-ke-ujung yang disesuaikan
                                dengan tujuan bisnis Anda, memastikan skalabilitas dan performa.
                            </p>
                        </div>
                    </div>

                    {/* Abstract Visual/Illustration Placeholder */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 lg:opacity-20 pointer-events-none hidden lg:block">
                        {/* Decorative Circle */}
                        <div className="h-96 w-96 rounded-full border-[24px] border-blue-900/20 blur-xl"></div>
                        <div className="absolute top-10 left-10 h-72 w-72 rounded-full border-[24px] border-primary/30 blur-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
