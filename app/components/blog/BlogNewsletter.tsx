export default function BlogNewsletter() {
    return (
        <section className="bg-primary/5 border-t border-primary/10 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">
                    mail_outline
                </span>
                <h2 className="text-2xl font-bold text-text-main mb-2">
                    Berlangganan newsletter kami
                </h2>
                <p className="text-text-muted mb-8">
                    Dapatkan wawasan terbaru yang dikirim langsung ke kotak masuk Anda.
                    Tanpa spam, selamanya.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        className="flex-1 rounded-lg border-gray-300 focus:ring-primary focus:border-primary px-4 py-2"
                        placeholder="Masukkan email Anda"
                        type="email"
                    />
                    <button
                        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer"
                        type="submit"
                    >
                        Langganan
                    </button>
                </form>
            </div>
        </section>
    );
}
