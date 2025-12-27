export default function ProcessTimeline() {
    const steps = [
        {
            title: "Penemuan",
            description:
                "Memahami tujuan, kebutuhan, dan target pasar Anda melalui analisis mendalam.",
            icon: "search",
        },
        {
            title: "Desain",
            description:
                "Membuat antarmuka intuitif yang berpusat pada pengguna dan prototipe presisi tinggi yang indah.",
            icon: "design_services",
        },
        {
            title: "Pengembangan",
            description:
                "Menulis kode yang bersih, skalabel, dan efisien untuk menghidupkan desain.",
            icon: "code",
        },
        {
            title: "Peluncuran",
            description:
                "Pengujian ketat, pengerahan, dan merilis produk Anda ke dunia.",
            icon: "rocket_launch",
        },
        {
            title: "Dukungan",
            description:
                "Pemeliharaan berkelanjutan, optimalisasi, dan dukungan untuk memastikan kesuksesan jangka panjang.",
            icon: "support_agent",
        },
    ];

    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <header className="w-full pb-12 flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-primary/20 text-text-main text-xs font-bold tracking-wider uppercase">
                        Alur Kerja
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-main mb-4 max-w-2xl">
                        Proses Pengembangan Kami
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
                        Kami mengikuti metodologi terstruktur dan gesit untuk memastikan
                        proyek Anda diselesaikan tepat waktu dan melebihi ekspektasi.
                    </p>
                </header>

                {/* Desktop Horizontal Timeline (Hidden on small screens) */}
                <div className="hidden lg:grid grid-cols-5 gap-4 relative">
                    {/* Connector Line Behind */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
                        >
                            <div className="relative mb-6">
                                <div className="w-24 h-24 rounded-full bg-white border-2 border-primary flex items-center justify-center text-text-main transition-all duration-300 z-10 shadow-sm group-hover:bg-primary group-hover:text-black group-hover:scale-110">
                                    <span className="material-symbols-outlined text-[40px]">
                                        {step.icon}
                                    </span>
                                </div>
                                <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-text-main group-hover:text-blue-600 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="lg:hidden flex flex-col gap-8 pl-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-4 relative">
                            {/* Vertical Line (except for last item) */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-6 top-14 bottom-[-32px] w-0.5 bg-gray-200 z-0"></div>
                            )}
                            <div className="flex-shrink-0 z-10">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-white shadow-md">
                                    <span className="material-symbols-outlined text-text-main text-xl">
                                        {step.icon}
                                    </span>
                                </div>
                            </div>
                            <div className="pb-2">
                                <h3 className="text-lg font-bold text-text-main">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-text-muted mt-1">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
