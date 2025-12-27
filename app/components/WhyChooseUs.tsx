export default function WhyChooseUs() {
    const stats = [
        { value: "150+", label: "Proyek Selesai", icon: "deployed_code" },
        { value: "85+", label: "Mitra Jangka Panjang", icon: "handshake" },
        { value: "10+", label: "Tahun di Teknologi", icon: "schedule" },
    ];

    const features = [
        {
            title: "Arsitektur Skalabel",
            description:
                "Sistem yang dibangun untuk berkembang bersama bisnis Anda. Kami merancang untuk beban tinggi dan ekspansi masa depan sejak hari pertama.",
            icon: "architecture",
        },
        {
            title: "Desain Berpusat UX",
            description:
                "Antarmuka yang dipahami pengguna secara intuitif. Kami memprioritaskan aksesibilitas, alur, dan kepuasan pengguna.",
            icon: "touch_app",
        },
        {
            title: "Standar Kode Bersih",
            description:
                "Basis kode yang mudah dipelihara, terdokumentasi, dan efisien yang menetapkan standar kualitas industri baru.",
            icon: "terminal",
        },
        {
            title: "Metodologi Agile",
            description:
                "Iterasi cepat dan komunikasi transparan. Kami membuat Anda terus mendapat informasi di setiap sprint.",
            icon: "sync_alt",
        },
    ];

    return (
        <section className="flex flex-col w-full bg-background-light">
            {/* Section Header */}
            <div className="px-6 py-16 md:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-text-main">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Mengapa Memilih Kami
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main mb-6">
                        Merekayasa{" "}
                        <span className="relative whitespace-nowrap">
                            <span className="absolute -bottom-2 left-0 h-4 w-full bg-primary/40 -rotate-1"></span>
                            <span className="relative">Keunggulan Digital</span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                        Kami tidak hanya menulis kode; kami membangun ekosistem digital
                        yang tangguh dan skalabel yang disesuaikan dengan tujuan bisnis Anda.
                    </p>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="w-full bg-white border-y border-border-light py-12">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border-light">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-4"
                            >
                                <span className="material-symbols-outlined text-4xl text-primary mb-2">
                                    {stat.icon}
                                </span>
                                <p className="text-5xl font-extrabold text-text-main tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="text-sm font-medium uppercase tracking-wider text-text-muted mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <div className="px-6 py-20 md:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col gap-4 rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-text-main group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl">
                                        {feature.icon}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-text-main leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="pb-24 px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="rounded-2xl bg-text-main p-12 relative overflow-hidden">
                        {/* Decorative gradient background */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <h2 className="text-3xl font-bold text-white leading-tight">
                                Siap meningkatkan kehadiran digital Anda?
                            </h2>
                            <p className="text-gray-300 max-w-xl">
                                Mari diskusikan bagaimana kami dapat mewujudkan visi Anda dengan
                                keahlian kami dalam rekayasa dan desain.
                            </p>
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-text-main text-base font-bold leading-normal tracking-wide shadow-[0_0_20px_rgba(253,223,73,0.3)] hover:shadow-[0_0_30px_rgba(253,223,73,0.5)] hover:scale-105 transition-all">
                                <span className="truncate">Lihat Layanan Kami</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
