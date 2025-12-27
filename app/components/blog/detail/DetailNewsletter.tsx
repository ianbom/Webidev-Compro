export default function DetailNewsletter() {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-text-main text-white p-8 md:p-12 mb-20">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wide mb-4">
                        <span className="material-symbols-outlined text-sm">mail</span>{" "}
                        Newsletter
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                        Tingkatkan keterampilan teknis Anda
                    </h3>
                    <p className="text-gray-400 text-lg">
                        Bergabunglah dengan 10.000+ pengembang yang mendapatkan wawasan
                        mingguan kami.
                    </p>
                </div>
                <div className="w-full md:w-auto flex-1 max-w-md">
                    <form className="flex flex-col gap-3">
                        <input
                            className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="Masukkan email Anda"
                            type="email"
                        />
                        <button
                            className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-text-main shadow-lg hover:bg-yellow-400 hover:shadow-primary/20 transition-all cursor-pointer"
                            type="button"
                        >
                            Langganan Sekarang
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
                        Tanpa spam, berhenti berlangganan kapan saja.
                    </p>
                </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>
    );
}
