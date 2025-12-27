export default function AboutStory() {
    return (
        <div className="w-full px-4 py-20 lg:px-20 bg-white">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-16">
                <div className="text-center mb-4">
                    <h2 className="text-3xl md:text-4xl font-black text-text-main mb-4">
                        Perjalanan Kami
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                    {/* Item 1: Left */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative group">
                        <div className="w-full md:w-[calc(50%-2rem)] md:text-right order-2 md:order-1 p-6 bg-background-light border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 justify-start md:justify-end mb-2 text-primary-dark">
                                <span className="material-symbols-outlined">warehouse</span>
                                <span className="font-bold">2018</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-2">
                                Awal Mula
                            </h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                Didirikan di garasi kecil hanya dengan dua laptop dan mesin
                                kopi. Kami mulai dengan visi untuk menyederhanakan masalah yang
                                kompleks.
                            </p>
                        </div>
                        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10 size-16 md:size-4 flex items-center justify-center order-1 md:order-2">
                            <div className="hidden md:block size-4 bg-primary rounded-full border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                            <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-16 bottom-[-8rem] w-0.5 bg-gray-200"></div>
                        </div>
                        <div className="hidden md:block w-[calc(50%-2rem)] order-3"></div>
                    </div>

                    {/* Item 2: Right */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative group">
                        <div className="hidden md:block w-[calc(50%-2rem)] order-1"></div>
                        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10 size-16 md:size-4 flex items-center justify-center order-1 md:order-2">
                            <div className="hidden md:block size-4 bg-primary rounded-full border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                            <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-16 bottom-[-8rem] w-0.5 bg-gray-200"></div>
                        </div>
                        <div className="w-full md:w-[calc(50%-2rem)] order-2 md:order-3 p-6 bg-background-light border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-2 text-primary-dark">
                                <span className="material-symbols-outlined">handshake</span>
                                <span className="font-bold">2020</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-2">
                                Klien Perusahaan Besar Pertama
                            </h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                Mendapatkan kontrak Fortune 500 pertama kami. Momen penting ini
                                membuktikan kemampuan teknis kami dan menyiapkan panggung untuk
                                pertumbuhan pesat.
                            </p>
                        </div>
                    </div>

                    {/* Item 3: Left */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative group">
                        <div className="w-full md:w-[calc(50%-2rem)] md:text-right order-2 md:order-1 p-0 md:p-6 rounded-xl transition-all">
                            <div className="rounded-xl overflow-hidden h-48 md:h-64 shadow-md mb-4 relative group-hover:-translate-y-1 transition-transform">
                                <div className="absolute inset-0 bg-text-main/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCr_FW84t7-yOeZ-xuxxhDTkVI-Ek4XeiX1mtoK3Doll3eoAaoFCtWhUXy5wETdVXVwe_9nQt88W9EZiiDvZXP3C_gJOdvLo3xp1juLVC_9LPmNlNIPSRMONiUMbV4dzthWm6M6oCokSKCF4UxdxC35Et7rc4KY2Coeiwmjve_oMuEZ0FmkrpA0sR-Vw8QeUxtRb5ZftwEOuLOubHBl-T69SnPL5n81jnDiiHzKV_pcRalqyMrudFwwBvL8MaE0V6m9sCXooB7AeQ')",
                                    }}
                                ></div>
                            </div>
                            <div className="p-6 bg-background-light border border-gray-100 rounded-xl">
                                <div className="flex items-center gap-2 justify-start md:justify-end mb-2 text-primary-dark">
                                    <span className="material-symbols-outlined">groups</span>
                                    <span className="font-bold">2021</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main mb-2">
                                    Memperbesar Tim
                                </h3>
                                <p className="text-text-muted leading-relaxed text-sm">
                                    Pindah ke kantor pusat baru di pusat kota dan mengembangkan
                                    tim menjadi 30+ pengembang, desainer, dan ahli strategi.
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10 size-16 md:size-4 flex items-center justify-center order-1 md:order-2">
                            <div className="hidden md:block size-4 bg-primary rounded-full border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                            <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-16 bottom-[-8rem] w-0.5 bg-gray-200"></div>
                        </div>
                        <div className="hidden md:block w-[calc(50%-2rem)] order-3"></div>
                    </div>

                    {/* Item 4: Right */}
                    <div className="flex flex-col md:flex-row items-center justify-between relative group">
                        <div className="hidden md:block w-[calc(50%-2rem)] order-1"></div>
                        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10 size-16 md:size-4 flex items-center justify-center order-1 md:order-2">
                            <div className="hidden md:block size-4 bg-primary rounded-full border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                        </div>
                        <div className="w-full md:w-[calc(50%-2rem)] order-2 md:order-3 p-6 bg-background-light border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-2 mb-2 text-primary-dark">
                                <span className="material-symbols-outlined">public</span>
                                <span className="font-bold">2025</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main mb-2">
                                Menuju Global
                            </h3>
                            <p className="text-text-muted leading-relaxed text-sm">
                                Memperluas layanan kami ke pasar internasional dengan kantor
                                satelit baru di London dan Singapura.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
