export default function DetailMetrics() {
    return (
        <div className="w-full bg-white py-16 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                <div className="flex flex-col gap-2 mb-10 text-center">
                    <h2 className="text-3xl font-bold text-text-main">Hasil Terukur</h2>
                    <p className="text-slate">
                        Indikator kinerja utama pasca peluncuran
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Metric Card 1 */}
                    <div className="group relative overflow-hidden bg-primary rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <span className="material-symbols-outlined text-text-main text-4xl mb-2 opacity-80">
                            trending_up
                        </span>
                        <span className="text-5xl font-black text-text-main tracking-tighter mb-2">
                            +300%
                        </span>
                        <span className="text-text-main font-bold text-sm uppercase tracking-wide opacity-80">
                            Pengguna Aktif Harian
                        </span>
                    </div>
                    {/* Metric Card 2 */}
                    <div className="group relative overflow-hidden bg-white border-2 border-primary rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <span className="material-symbols-outlined text-primary text-4xl mb-2">
                            star_rate
                        </span>
                        <span className="text-5xl font-black text-text-main tracking-tighter mb-2">
                            4.8/5
                        </span>
                        <span className="text-text-muted font-bold text-sm uppercase tracking-wide">
                            Rating App Store
                        </span>
                    </div>
                    {/* Metric Card 3 */}
                    <div className="group relative overflow-hidden bg-white border-2 border-primary rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <span className="material-symbols-outlined text-primary text-4xl mb-2">
                            speed
                        </span>
                        <span className="text-5xl font-black text-text-main tracking-tighter mb-2">
                            &lt; 2d
                        </span>
                        <span className="text-text-muted font-bold text-sm uppercase tracking-wide">
                            Rata-rata Waktu Muat
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
