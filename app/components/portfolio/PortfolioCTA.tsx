export default function PortfolioCTA() {
    return (
        <section className="bg-accent-blue text-white py-16 px-4 md:px-10 lg:px-40">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <h2 className="text-3xl font-black tracking-tight">
                        Siap membangun sesuatu yang hebat?
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Mari diskusikan bagaimana kami dapat mengubah kehadiran digital
                        Anda.
                    </p>
                </div>
                <button className="shrink-0 bg-primary text-black hover:bg-white hover:text-accent-blue px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer">
                    <span>Mulai Proyek</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </section>
    );
}
