export default function DetailOverview() {
    return (
        <div className="w-full max-w-7xl px-6 lg:px-20 py-12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Meta Data Sidebar (Left on Desktop) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2 text-text-main">
                            Detail Proyek
                        </h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <span className="text-text-muted text-sm font-medium">
                                    Klien
                                </span>
                                <span className="text-text-main text-sm font-semibold">
                                    FinanceCo
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-text-muted text-sm font-medium">
                                    Industri
                                </span>
                                <span className="text-text-main text-sm font-semibold">
                                    FinTech
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-text-muted text-sm font-medium">
                                    Durasi
                                </span>
                                <span className="text-text-main text-sm font-semibold">
                                    4 Bulan
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 pt-2">
                                <span className="text-text-muted text-sm font-medium">
                                    Layanan
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-background-light rounded-full text-xs font-semibold text-accent-blue border border-accent-blue/20">
                                        Desain UI/UX
                                    </span>
                                    <span className="px-3 py-1 bg-background-light rounded-full text-xs font-semibold text-accent-blue border border-accent-blue/20">
                                        Pengembangan Mobile
                                    </span>
                                    <span className="px-3 py-1 bg-background-light rounded-full text-xs font-semibold text-accent-blue border border-accent-blue/20">
                                        API Backend
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 text-text-main">
                            Teknologi
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 text-sm font-medium">
                                <span className="material-symbols-outlined text-base">
                                    smartphone
                                </span>{" "}
                                React Native
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-green-50 text-green-700 text-sm font-medium">
                                <span className="material-symbols-outlined text-base">
                                    terminal
                                </span>{" "}
                                Python
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-50 text-orange-700 text-sm font-medium">
                                <span className="material-symbols-outlined text-base">
                                    cloud
                                </span>{" "}
                                AWS
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-purple-50 text-purple-700 text-sm font-medium">
                                <span className="material-symbols-outlined text-base">
                                    payments
                                </span>{" "}
                                Stripe
                            </span>
                        </div>
                    </div>
                </div>
                {/* Content (Right on Desktop) */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                    {/* Challenge Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full block"></span>
                            Tantangan
                        </h2>
                        <p className="text-text-muted text-base leading-relaxed mb-6">
                            Aplikasi seluler FinanceCo yang ada menderita hutang teknis yang
                            signifikan dan antarmuka pengguna yang ketinggalan zaman yang
                            menyebabkan tingkat churn tinggi selama orientasi. Pengguna
                            melaporkan bahwa menavigasi portofolio keuangan yang kompleks itu
                            membingungkan dan lambat. Tujuan utamanya adalah memodernisasi
                            bahasa visual sambil memastikan backend dapat menangani data
                            transaksi real-time dengan aman dan cepat.
                        </p>
                        <p className="text-text-muted text-base leading-relaxed">
                            Kami perlu membuat solusi yang menyeimbangkan kepatuhan terhadap
                            peraturan dengan pengalaman pengguna yang tanpa hambatan, mengurangi
                            "waktu untuk mendapatkan nilai" bagi pelanggan baru.
                        </p>
                    </div>
                    {/* Solution Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-accent-blue rounded-full block"></span>
                            Solusi
                        </h2>
                        <p className="text-text-muted text-base leading-relaxed mb-6">
                            Kami mendekati desain ulang dengan pola pikir "mobile-first".
                            Dengan menyederhanakan arsitektur informasi, kami mengurangi
                            jumlah ketukan yang diperlukan untuk melakukan tindakan utama—seperti
                            mentransfer dana atau memeriksa kinerja investasi—sebesar 40%.
                            Desain visual menggunakan palet kontras tinggi yang bersih untuk
                            memastikan aksesibilitas.
                        </p>
                        <div className="rounded-xl overflow-hidden mb-6 border border-gray-100 shadow-lg">
                            <img
                                alt="Tampilan rinci antarmuka aplikasi seluler yang menunjukkan grafik investasi"
                                className="w-full h-auto object-cover max-h-[400px]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP-c5tVE81KVCctfgTnVV9EE2QuAV9tCOAB2On1Eroq41j3XxHkLFctjvhfFg7_iPVhUXYhGC2PaubxlO7S0ZXQcJ0fIPEAEpY3jwyxfzRIsI5dzHir4Scyynz8v0ECrkAaapAF3fUTj_0Ue9GZP9w2SnNH1hOXjQFVI7uUmXPVxbXxQD-dEhNrTb4h1ttaU1EaVLdt2sJhfkeimLPVES-wX11QR8kPpqkcrhMul5gG56AIcgg08mYgjuXV0hjc4oHdf6TdvhKjQ"
                            />
                        </div>
                        <p className="text-text-muted text-base leading-relaxed">
                            Di sisi teknis, kami memigrasikan monolit lama ke arsitektur
                            layanan mikro di AWS, yang memungkinkan penskalaan independen
                            mesin pemrosesan transaksi. Ini memastikan 99,99% uptime selama
                            jam perdagangan puncak.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
