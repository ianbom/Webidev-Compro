export default function Services() {
    const services = [
        {
            title: "Pengembangan Web",
            description:
                "Aplikasi web yang tangguh dan skalabel dibangun dengan framework modern seperti React dan Next.js.",
            icon: "terminal",
        },
        {
            title: "Solusi Mobile",
            description:
                "Aplikasi mobile native dan lintas platform untuk iOS dan Android yang menjamin performa mulus.",
            icon: "smartphone",
        },
        {
            title: "Desain Produk",
            description:
                "Antarmuka UI/UX yang berpusat pada pengguna untuk meningkatkan keterlibatan, retensi, dan loyalitas merek.",
            icon: "design_services",
        },
        {
            title: "Infrastruktur Cloud",
            description:
                "Pengaturan dan manajemen arsitektur cloud yang aman, skalabel, dan andal di AWS/Azure.",
            icon: "cloud",
        },
    ];

    return (
        <section className="flex flex-col w-full">
            {/* Hero / Intro */}
            <div className="relative py-16 px-4 sm:px-6 lg:px-8 flex justify-center bg-white">
                <div className="max-w-[960px] w-full flex flex-col items-center text-center gap-6">
                    <div className="inline-flex items-center rounded-full border border-border-light bg-background-light px-3 py-1 text-xs font-medium text-text-muted">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        Tersedia untuk proyek baru
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-main max-w-3xl">
                        Membangun masa depan{" "}
                        <span className="relative whitespace-nowrap">
                            <span className="absolute -bottom-1 left-0 h-3 w-full bg-primary/40 -rotate-1"></span>
                            <span className="relative">pengalaman digital</span>
                        </span>
                    </h1>
                    <p className="max-w-xl text-lg text-text-muted">
                        Kami menciptakan solusi perangkat lunak yang disesuaikan untuk membantu bisnis
                        berkembang dengan percaya diri. Dari web hingga mobile, kami siap membantu Anda.
                    </p>
                </div>
            </div>

            {/* Feature Section (Services) */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light">
                <div className="mx-auto max-w-[960px]">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                                Solusi Perangkat Lunak Terpadu
                            </h2>
                            <p className="text-base text-slate-600 max-w-2xl">
                                Keahlian kami mencakup seluruh siklus hidup produk digital.
                                Kami menghidupkan ide Anda dengan rekayasa presisi dan
                                desain yang matang.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative flex flex-col gap-4 rounded-xl border border-border-light bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-text-main group-hover:bg-primary transition-colors duration-300">
                                        <span className="material-symbols-outlined text-[28px]">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-bold text-text-main">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-text-muted">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-4 flex items-center text-sm font-bold text-text-main opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        Pelajari lebih lanjut{" "}
                                        <span className="material-symbols-outlined text-sm ml-1">
                                            arrow_forward
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
