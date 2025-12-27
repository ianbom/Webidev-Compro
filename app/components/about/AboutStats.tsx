export default function AboutStats() {
    return (
        <section className="bg-background-light py-12 border-t border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stat Card 1 */}
                    <div className="group relative flex flex-col gap-2 p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/50 transition-colors shadow-sm">
                        <div className="absolute top-6 right-6 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-text-main transition-colors">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                        <p className="text-4xl font-black text-text-main tracking-tight">
                            50+
                        </p>
                        <p className="text-base font-medium text-text-muted">
                            Pengembang Ahli
                        </p>
                        <p className="text-sm text-gray-500">
                            Spesialisasi dalam solusi full-stack
                        </p>
                    </div>
                    {/* Stat Card 2 */}
                    <div className="group relative flex flex-col gap-2 p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/50 transition-colors shadow-sm">
                        <div className="absolute top-6 right-6 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-text-main transition-colors">
                            <span className="material-symbols-outlined">
                                sentiment_satisfied
                            </span>
                        </div>
                        <p className="text-4xl font-black text-text-main tracking-tight">
                            98%
                        </p>
                        <p className="text-base font-medium text-text-muted">
                            Kepuasan Klien
                        </p>
                        <p className="text-sm text-gray-500">
                            Berdasarkan lebih dari 200 ulasan
                        </p>
                    </div>
                    {/* Stat Card 3 */}
                    <div className="group relative flex flex-col gap-2 p-6 rounded-xl bg-white border border-gray-200 hover:border-primary/50 transition-colors shadow-sm">
                        <div className="absolute top-6 right-6 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-text-main transition-colors">
                            <span className="material-symbols-outlined">public</span>
                        </div>
                        <p className="text-4xl font-black text-text-main tracking-tight">
                            Global
                        </p>
                        <p className="text-base font-medium text-text-muted">
                            Jangkauan Klien
                        </p>
                        <p className="text-sm text-gray-500">
                            Melayani bisnis di 12 negara
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
