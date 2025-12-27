export default function AboutHero() {
    return (
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col gap-8 text-left max-w-2xl">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 w-fit border border-blue-100">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                                    Tentang Perusahaan Kami
                                </span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-text-main leading-[1.1]">
                                Kami Adalah <br />
                                <span className="relative inline-block z-10">
                                    WebIDev
                                    <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/40 -z-10 rounded-sm"></span>
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-lg">
                                Kami adalah tim inovator, pengembang, dan pencipta yang
                                berdedikasi untuk mengubah ide menjadi solusi perangkat lunak yang
                                tangguh. Merancang pengalaman digital dengan presisi dan hasrat
                                sejak 2018.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-text-main text-base font-bold hover:bg-yellow-300 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-lg cursor-pointer">
                                Baca Cerita Kami
                            </button>
                            <button className="flex items-center justify-center h-12 px-6 gap-2 rounded-lg bg-white border border-gray-200 text-text-main text-base font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all group cursor-pointer">
                                <span>Lihat Karya Kami</span>
                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                        {/* Trust Indicators Strip */}
                        <div className="pt-8 border-t border-gray-100 mt-2">
                            <p className="text-sm font-medium text-text-muted mb-4">
                                Dipercaya oleh perusahaan modern
                            </p>
                            <div className="flex gap-6 opacity-60 grayscale transition-all hover:grayscale-0">
                                <div className="flex items-center gap-1 font-bold text-gray-400">
                                    <span className="material-symbols-outlined">hexagon</span>{" "}
                                    Acella
                                </div>
                                <div className="flex items-center gap-1 font-bold text-gray-400">
                                    <span className="material-symbols-outlined">
                                        change_history
                                    </span>{" "}
                                    Vertex
                                </div>
                                <div className="flex items-center gap-1 font-bold text-gray-400">
                                    <span className="material-symbols-outlined">
                                        all_inclusive
                                    </span>{" "}
                                    Infinity
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Visual */}
                    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                        {/* Background Decor Blob */}
                        <div className="absolute inset-0 bg-linear-to-tr from-blue-50 to-primary/20 rounded-[2.5rem] rotate-3 transform scale-95 z-0"></div>
                        {/* Main Image */}
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 min-h-[500px]"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9qzMfoMSGVRRONoVF-JpasoE-jWLm6HDFjlZVnpToqejPAV1EM56i99pxZbJ5QKGSpVPD6Da6T4LnUWGx5CSUdhgP3ONTe-vDp4XVFxx7iGxus8u8tkimosTgFbZV6SwNRtT4xXrFdw6AxgzIsyan8Td-lUNAdTX869EzuU9Mpna5TRDU3mhbvXyDFy4atzpA_wtelHynF_MFub3vrF-evjyidOmBJudcLa04aY9F_aoicQddtzznwem6yWDnf_E0Kmw63e214Q')",
                                }}
                            ></div>
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 max-w-[240px]">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted font-medium">
                                        Keahlian Terverifikasi
                                    </p>
                                    <p className="text-sm font-bold text-text-main">
                                        Agensi Peringkat Teratas
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Pattern Dots */}
                        <div className="absolute -bottom-6 -right-6 z-0 text-primary/40">
                            <svg
                                fill="currentColor"
                                height="100"
                                viewBox="0 0 100 100"
                                width="100"
                            >
                                <pattern
                                    height="20"
                                    id="dots"
                                    patternUnits="userSpaceOnUse"
                                    width="20"
                                    x="0"
                                    y="0"
                                >
                                    <circle cx="2" cy="2" r="2"></circle>
                                </pattern>
                                <rect fill="url(#dots)" height="100" width="100"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
