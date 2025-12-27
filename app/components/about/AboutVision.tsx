export default function AboutVision() {
    return (
        <div className="w-full max-w-[1280px] px-6 lg:px-10 py-20 mx-auto">
            <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-2 mb-2">
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                    <h2 className="text-accent-blue text-sm font-bold uppercase tracking-wider">Tujuan Kami</h2>
                </div>
                <h1 className="text-text-main text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                    Mendorong Inovasi Digital
                </h1>
                <p className="text-text-muted text-lg font-normal leading-relaxed max-w-2xl mx-auto mt-4">
                    Kami menggabungkan keahlian teknis dengan visi kreatif untuk memberikan produk digital yang luar biasa.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Vision Card */}
                <div className="group flex flex-col gap-6 rounded-2xl bg-white p-8 lg:p-10 border border-gray-200 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center size-14 rounded-xl bg-blue-50 text-accent-blue group-hover:bg-primary group-hover:text-text-main transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl">
                                visibility
                            </span>
                        </div>
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">
                            arrow_forward
                        </span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-text-main text-2xl font-bold leading-tight">
                            Visi Kami
                        </h2>
                        <p className="text-text-muted text-base leading-relaxed">
                            Menjadi standar global untuk solusi perangkat lunak intuitif,
                            menjembatani kesenjangan antara teknologi yang kompleks dan
                            pengalaman manusia. Kami melihat masa depan di mana perangkat lunak
                            berkerja untuk semua orang.
                        </p>
                    </div>
                </div>
                {/* Mission Card */}
                <div className="group flex flex-col gap-6 rounded-2xl bg-white p-8 lg:p-10 border border-gray-200 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center size-14 rounded-xl bg-blue-50 text-accent-blue group-hover:bg-primary group-hover:text-text-main transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl">
                                rocket_launch
                            </span>
                        </div>
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">
                            arrow_forward
                        </span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-text-main text-2xl font-bold leading-tight">
                            Misi Kami
                        </h2>
                        <p className="text-text-muted text-base leading-relaxed">
                            Kami memberdayakan bisnis dengan membuat aplikasi web yang tangguh,
                            dapat diskalakan, dan indah yang memecahkan masalah dunia nyata
                            dengan keanggunan dan efisiensi. Kesuksesan Anda adalah kode kami.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
