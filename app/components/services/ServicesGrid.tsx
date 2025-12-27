export default function ServicesGrid() {
    const services = [
        {
            title: "Website Kustom",
            description:
                "Bangun kehadiran online Anda dengan website berkinerja tinggi yang disesuaikan khusus dengan identitas merek dan tujuan bisnis Anda.",
            icon: "language",
            features: [
                "Struktur SEO Optimal",
                "Desain Responsif Mobile",
                "Integrasi CMS (WordPress/Custom)",
            ],
        },
        {
            title: "Toko Online",
            description:
                "Solusi e-commerce yang tangguh untuk membantu Anda menjual produk secara online dengan aman, efisien, dan ke audiens global.",
            icon: "shopping_cart",
            features: [
                "Gateway Pembayaran Aman",
                "Manajemen Inventaris Real-time",
                "Proses Checkout Aman",
            ],
        },
        {
            title: "Aplikasi Mobile",
            description:
                "Libatkan pelanggan Anda di mana saja dengan aplikasi seluler intuitif yang dibangun untuk platform Android dan iOS.",
            icon: "smartphone",
            features: [
                "Cross-Platform (Flutter/React Native)",
                "UI/UX Berpusat pada Pengguna",
                "Sistem Notifikasi Push",
            ],
        },
        {
            title: "Strategi Digital",
            description:
                "Strategi pemasaran digital komprehensif untuk meningkatkan kesadaran merek dan mendorong konversi untuk bisnis Anda.",
            icon: "campaign",
            features: [
                "Manajemen Media Sosial",
                "Kampanye Iklan Tertarget",
                "Analitik Performa",
            ],
        },
        {
            title: "Desain UI/UX",
            description:
                "Merancang antarmuka yang intuitif dan estetis yang meningkatkan kepuasan dan keterlibatan pengguna.",
            icon: "palette",
            features: ["Wireframing & Prototyping", "Riset Pengguna", "Sistem Desain"],
        },
        {
            title: "Solusi Cloud",
            description:
                "Pengaturan dan manajemen infrastruktur cloud yang skalabel untuk memastikan bisnis Anda selalu online dan aman.",
            icon: "cloud",
            features: ["Manajemen Server", "Backup & Pemulihan Data", "Migrasi Cloud"],
        },
    ];

    return (
        <section className="py-16 bg-[#f8f8f5]">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute top-[20%] -left-[10%] w-[300px] h-[300px] rounded-full bg-blue-100/30 blur-3xl"></div>
            </div>

            <div className="max-w-[960px] mx-auto px-4 sm:px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-text-main text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="size-2 rounded-full bg-primary"></span>
                    Layanan Kami
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-text-main mb-6 leading-tight">
                    Solusi Terkini untuk <br className="hidden sm:block" />
                    <span className="relative inline-block">
                        Bisnis Modern
                        <svg
                            className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60"
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
                <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                    Memberdayakan pertumbuhan UMKM dengan layanan digital mutakhir yang
                    dirancang untuk kesuksesan, skalabilitas, dan pengalaman pengguna yang
                    mulus.
                </p>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center text-text-main mb-6 group-hover:bg-primary transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-yellow-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-text-muted mb-6 text-sm leading-relaxed flex-grow">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start gap-3 text-sm text-gray-700"
                                    >
                                        <span className="material-symbols-outlined text-primary text-[20px]">
                                            check_circle
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#" // Use placeholder for now or specific links if available
                                className="inline-flex items-center gap-2 text-sm font-bold text-text-main group-hover:text-yellow-600 transition-colors mt-auto"
                            >
                                Pelajari Lebih Lanjut
                                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
