import Image from "next/image";

export default function Hero() {
    return (
        <main className="grow flex items-center justify-center relative">
            <div className="container mx-auto w-full flex justify-center">
                <div className="max-w-[1280px] w-full px-4 md:px-10 py-12 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Text Content */}
                        <div className="flex flex-col gap-6 md:gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
                            {/* Chip / Tagline */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm">
                                    <span className="material-symbols-outlined text-blue-500 text-[18px]">
                                        verified
                                    </span>
                                    <span className="font-outfit text-sm font-medium text-slate-600">
                                        Mitra Teknologi Anda
                                    </span>
                                </div>
                            </div>

                            {/* Headlines */}
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#181710]">
                                    Kami Membangun{" "}
                                    <span className="relative whitespace-nowrap z-10">
                                        Solusi Digital
                                        <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/40 -z-10 rounded-sm"></span>
                                    </span>{" "}
                                </h1>
                                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    WebIDev mengubah tantangan kompleks menjadi perangkat lunak yang
                                    elegan. Dari aplikasi web kustom hingga sistem tingkat
                                    perusahaan, kami merekayasa masa depan bisnis Anda.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                                <button className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-[#181710] hover:bg-[#fcd61d] transition-colors shadow-lg shadow-primary/20 group cursor-pointer">
                                    <span className="text-base font-bold">Mulai Sekarang</span>
                                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                                        arrow_forward
                                    </span>
                                </button>
                                <button className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-white border border-gray-200 text-[#181710] hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                                    <span className="text-base font-bold">Lihat Karya Kami</span>
                                    <span className="material-symbols-outlined text-[20px]">
                                        grid_view
                                    </span>
                                </button>
                            </div>

                            {/* Trust Indicator */}
                            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 opacity-80">
                                <div className="flex -space-x-3">
                                    <img
                                        alt="Team member portrait"
                                        className="w-8 h-8 rounded-full border-2 border-white"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXk8m-AyFdoD-IrPbQ8sqdxD9kd4uFPstEGVgAHZGkH3gtQj2l5RhmAnMHRla8-6Bf0P94Bo6uGDUcp-ZUXdU3i8fGvlKvtTGIlbUAkgkJmeXh1ZKtzr2G7FYc02hBj5MnhfwRnxNDaHavv2FxAagGbaKmef2lzRaycTmOU65ihweXbrlBdXwDkvPuV8twqw8710E5fZOjpeEvt5xVOlWZ2qmjCUf62KnmJa8emvcrYlSBlPl3qPGlsdWZzYPTl41WATMjipzGAA"
                                    />
                                    <img
                                        alt="Team member portrait"
                                        className="w-8 h-8 rounded-full border-2 border-white"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGZYFwJTSSLaxwHWLdr_bKXyGQy2qK9RQUty02EkJ_WEFiAx3_ARXPZTwzLEsl8XrnLPe6eRSWXoxnIE2xsIOVUUUacyQZn7TSpM1AN4BYm_2-UxEfnfi7FG2kUlRk8m4OHydGU8CBENo9eO-ILhtjN7tUjx3qoqi6jJDW-DUKZq-u9HCdJ8qFE7ILfKk3TQlAk4NcUZszmcDx4AuVgCdoERfsBg0MU02yM6LmLV8GWbK3VfD8jBO9QQSAvCGK31lGWnQrV1quWg"
                                    />
                                    <img
                                        alt="Team member portrait"
                                        className="w-8 h-8 rounded-full border-2 border-white"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8R1hY4IptKSektlUH3wzhLnb1WvZWZz8vqWUewVxMhxqLnWC1td_EeWtABO3Soklbbjz_K_8LmOr_kIsQBnuoMEA7QOs9l73HCF9Eh0IxQKFSYh1dR5p1VRbxVRLQq5VZ3RqtsANphzmbxD8RacilJrTWemIMrw2QSqFgZijucCpdiNXZppp-gVqUNdbhW6pSxHOXZEp0Qd4YDEMbQunKRENbsfS0aOCORaeIZP-jC_OI2CMiJwG52j-eHhiW53noEmoQaoy0Aw"
                                    />
                                </div>
                                <div className="text-xs font-medium text-slate-500">
                                    Dipercaya oleh{" "}
                                    <span className="font-bold text-[#181710]">
                                        50+ perusahaan
                                    </span>{" "}
                                    di seluruh dunia
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Visual Illustration */}
                        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end animate-float">
                            {/* Abstract Background Blobs */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-blue-100/50 to-primary/20 rounded-full blur-3xl -z-10"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full max-w-[600px] aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm bg-white/30">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe-GsKv29OZGP4D3LkX1-frfjQwpLTyCfWUyTmi-mJiiCxvu-3htGLgmxrm_82vtC6sSXP4BOuhYDcb7lRGCUFnif1ceniB-f5X3nAlyF3AbL8l4SS_JbxUbLItLGfML0JqRKrUDyk3CqCVOqBT3PX4u7M491uFQJyOySVwBQlA9ZfFewbOFDZGMVS0Awkh18p9IlUCkLEbqdbZA0PUvSUi0ely2LcnKSzsXtRdhZSpigFx0FWu8GRVVNmjWjBmhvFW4rIV4G96g')",
                                    }}
                                ></div>

                                {/* Floating UI Elements (Overlay) */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-xl shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <span className="material-symbols-outlined">code</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="h-2 w-1/3 bg-slate-200 rounded mb-2"></div>
                                            <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                                        </div>
                                        <div className="px-3 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">
                                            Aktif
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -right-4 size-20 bg-primary rounded-xl flex items-center justify-center shadow-lg rotate-12 z-20 hidden md:flex">
                                    <span className="material-symbols-outlined text-4xl text-[#181710]">
                                        rocket_launch
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
