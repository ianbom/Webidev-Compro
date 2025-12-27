export default function DetailHero() {
    return (
        <div className="w-full max-w-7xl px-6 lg:px-20 py-6 mx-auto">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-text-main text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                        Redesain Aplikasi Mobile FinTech
                    </h1>
                    <p className="text-slate text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                        Merevolusi manajemen keuangan pribadi melalui desain intuitif,
                        arsitektur keamanan yang kuat, dan pengalaman pengguna yang mulus.
                    </p>
                </div>
                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl group mt-4">
                    <div
                        className="aspect-video w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCE5ENKFUzyEKcaTBtTbyP1qcRGLFh_V0VJzN0L8WYY0J1aOJrC4MhMvM_1Cq20QbjzjWq4fhF6zrtA8Sv2h9Mot9fUXIgmblj1evMyhblkvodMX89E5QIodQSrYkIE9V1l4op8TWfNnImmFgweX4FWL_0SDl1VYZVFwnsSsyb7HSepMuqxwLdO83RcOAbEqowdFrZPzuqA7Nu__19_lzX3HCzoRbxmIv_njdSsvcvs-pS-WSY55rdkVbjmhw08vehN1yNepX2PA')",
                        }}
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60"></div>
                    </div>
                    <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 flex gap-4">
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white text-accent-blue hover:bg-gray-50 text-base font-bold shadow-lg transition-all cursor-pointer">
                            <span className="mr-2 material-symbols-outlined">
                                open_in_new
                            </span>
                            Lihat Situs Langsung
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
