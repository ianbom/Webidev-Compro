export default function Portfolio() {
    const projects = [
        {
            title: "FinFlow Dashboard",
            category: "Aplikasi Web Fintech",
            description:
                "Aplikasi web teknologi finansial komprehensif yang dirancang untuk visualisasi data real-time dan manajemen transaksi yang kompleks.",
            tags: [
                { name: "React", bg: "bg-primary", text: "text-black" },
                {
                    name: "Python",
                    bg: "bg-white/10 backdrop-blur-md border border-white/20",
                    text: "text-white",
                },
            ],
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBsLYdImCrx68p_CpocbHZCn1_hiaQGzaKBoNRCosNEM8LG_e4J53oBqX-ZHmZYFuDr_iNoIVvMWYYCSryjhpFRsafHKrT6qBDlTj-teW6YskVlf8NFSJ4WNx3lSuPVYfoUkli03JWdhn1FHMfjgHYIrIeJkwHJQrIE101MjV6Q3hfDg_pNt54aB7RbhZlgSg-yY06jCXNHs6DBIbTHYLXn54yB_ecFXNTC6pft-aB0n0E5WCT80wtO1E-N-pcRzW4JWtU5Dm-7mw",
            alt: "Modern fintech dashboard showing data analytics graphs on a screen",
        },
        {
            title: "Shopify Plus Theme",
            category: "Kustomisasi E-commerce",
            description:
                "Pengembangan tema e-commerce kustom berkinerja tinggi yang meningkatkan tingkat konversi dan keterlibatan pengguna untuk merek ritel global.",
            tags: [
                { name: "Liquid", bg: "bg-primary", text: "text-black" },
                {
                    name: "JavaScript",
                    bg: "bg-white/10 backdrop-blur-md border border-white/20",
                    text: "text-white",
                },
            ],
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCIunKGwq6XfOUQNS06rrISO3MbJUXsqWMZodk46H9Jcw0F5bAYz427Ky1LxjROuXHHpdZahGnDxSAgLeSx_bR2ZOEiz1f3mH6ABWBv9AdPTALt92TrvPxWzInNuLHmlqgZ-zXVGqhQKKeIrvPrc8S0R-kOQ8wYmfOcpRi04q2WyYDLZ4DTcu94WWC9dQSHUeeYWgYmjLEDsClxeAbUC_-UEUIS0NUvEVB75SI4fwIVh3Zm2vV3ZDKTGrFu4UHBK7sj2obgNTXaXg",
            alt: "E-commerce payment interface on a laptop with credit card",
        },
        {
            title: "HealthTrack Mobile",
            category: "Platform Telemedisin",
            description:
                "Platform telemedisin aman yang menghubungkan pasien dengan penyedia layanan kesehatan melalui konsultasi video real-time.",
            tags: [
                { name: "Flutter", bg: "bg-primary", text: "text-black" },
                {
                    name: "Firebase",
                    bg: "bg-white/10 backdrop-blur-md border border-white/20",
                    text: "text-white",
                },
            ],
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDCeRnpCzUc0cJVMLn4oCPKC04zk-jaizUnzmgGJXqJrAzyFXD3xu8gfm50wnqqOIn2CIPA9gEuGjP4sC0AESxt-Q8U7acG0HKJShESG0IJRopbg4A8P1xwO4j0x4Qwt9dpvJWLegGZAcsVIKC3ve3ucbopzKnMy0ZeYwnUkHuWgvdMCLlJ8m8LpcndX7w9t1Fmjxc1n8d0skCjWU0hdR3AdO160OEw9EO-SexLMXFV91WtKKIjTYSQ3qnZLM_VIyL6bdb0dmSuRQ",
            alt: "Person holding smartphone displaying health tracking app",
        },
        {
            title: "CorpDash Analytics",
            category: "Solusi Korporat",
            description:
                "Dasbor analitik tingkat perusahaan yang menyederhanakan pengambilan keputusan untuk tim pemasaran korporat.",
            tags: [
                { name: "Next.js", bg: "bg-primary", text: "text-black" },
                {
                    name: "Tailwind",
                    bg: "bg-white/10 backdrop-blur-md border border-white/20",
                    text: "text-white",
                },
            ],
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDVRU2vcdi7adWFhms9b7gH4gpUneE_ZQ0irC9__gts6YdTi2RBVVl1_fik2sO6CDJ4_kDN_pqBTgYMlMhXyKWCrXUyiLkXK8qrAsE1FFykhP6mwr_sjqZJy08tvOQkh_T-AV-UBiNuwiCgbTjpHo_gi9rxnRLqBBgun5n0zgrySZzkLj8HJuP-XjHDA3anjXcMktcv2SsJWFuD0dS7h4OBhaR_zHGrFJuLiR3wMSVEqYfv6DPjhVp_1D9j6ncMJiHv1sixDYmQGg",
            alt: "Business analytics charts and graphs displayed on a monitor",
        },
    ];

    return (
        <section className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light">
            <div className="layout-container flex h-full grow flex-col justify-center">
                {/* Main Content Container */}
                <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 flex-col justify-center py-12 md:py-24">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-slate-600">
                                    Karya Pilihan
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#181710]">
                                Menciptakan Keunggulan <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-yellow-600">
                                    Digital
                                </span>
                            </h2>
                            <p className="text-slate-600 text-lg font-normal leading-relaxed mt-2 max-w-lg">
                                Pilihan solusi perangkat lunak kami yang paling berdampak bagi
                                klien global, dengan fokus pada skalabilitas dan pengalaman
                                pengguna.
                            </p>
                        </div>
                        {/* Desktop Action Button */}
                        <button className="hidden md:flex group relative min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-[#ffe668] transition-all duration-300 text-[#181710] text-base font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            <span className="relative z-10 flex items-center gap-2">
                                Lihat Semua Proyek
                                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </span>
                        </button>
                    </div>

                    {/* Carousel Slider Section */}
                    <div className="w-full relative group/slider">
                        {/* Navigation Hints (Optional Visual Decoration) */}
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-gray-400 opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 pointer-events-none">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </div>
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-gray-400 opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 pointer-events-none">
                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>

                        {/* Scroll container */}
                        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 gap-6 snap-x snap-mandatory scrollbar-hide">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="snap-center md:snap-start shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] h-[360px] md:h-[420px] relative group rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ring-1 ring-black/5"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${project.image}")` }}
                                    ></div>
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                    {/* Card Content */}
                                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                                        {/* Top Tags */}
                                        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                                            <div className="flex gap-2">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className={`px-3 py-1.5 text-xs font-semibold ${tag.text} ${tag.bg} rounded-full shadow-sm`}
                                                    >
                                                        {tag.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom Info */}
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-primary font-bold text-sm tracking-wide mb-1 uppercase">
                                                {project.category}
                                            </p>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-2 max-w-md">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center text-white font-medium text-sm group/link w-fit border-b border-primary/0 hover:border-primary transition-all pb-0.5">
                                                <span className="mr-2">Lihat Studi Kasus</span>
                                                <span className="material-symbols-outlined text-[18px] bg-primary text-black rounded-full p-0.5 transition-transform duration-300 group-hover/link:rotate-45">
                                                    arrow_outward
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradient Fade for Scroll Indication (Right side) */}
                        <div className="hidden md:block absolute right-0 top-0 bottom-8 w-24 bg-linear-to-l from-background-light to-transparent pointer-events-none z-10"></div>
                    </div>

                    {/* Mobile Button (visible only on small screens) */}
                    <div className="mt-8 flex md:hidden justify-center">
                        <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#181710] text-sm font-bold leading-normal shadow-sm">
                            Lihat Semua Proyek
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
