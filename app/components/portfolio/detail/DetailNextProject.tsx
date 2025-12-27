export default function DetailNextProject() {
    return (
        <div className="w-full bg-text-main text-white py-16 mt-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold">
                        Siap membangun kisah sukses Anda?
                    </h3>
                    <p className="text-gray-400 max-w-md">
                        Mari diskusikan bagaimana kami dapat membantu Anda mencapai tujuan
                        bisnis dengan solusi perangkat lunak mutakhir.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-white/20 text-white hover:bg-white/10 text-sm font-bold transition-all cursor-pointer">
                        Proyek Selanjutnya
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-main hover:bg-[#fcdc29] text-sm font-bold shadow-lg shadow-primary/20 transition-all cursor-pointer">
                        Hubungi Kami
                    </button>
                </div>
            </div>
        </div>
    );
}
