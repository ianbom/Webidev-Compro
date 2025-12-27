"use client";
import React, { useState } from "react";

export default function PortfolioComparison() {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value));
    };

    return (
        <section className="pb-20 px-4 md:px-10 lg:px-40">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2 md:p-4">
                    <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden group select-none cursor-ew-resize">
                        {/* After Image */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpRCpRINJWpGIyY2mNx3TP1Uiv_1IloAUb3FC2zQMM6c0uajPyEPnq0W3PG9iDRmQ20R5peKU1IFsnJXZi8UeA41XFNQF2MDU3B1toG3co0urMZNq2sj4icwb6BkLQxmw2s5ixEDbRo7irSygUnU9lVsLBq4GihPQPKjeuty-XcM6Kl3V1ry2qVak0wEOAnxSUiajQ8jJbxSnougkg6Y_GyQFdMw1IWYgxxYlsdRywbRLgz6C_sNMXkuMxt5MUHmV8veaeDnT6cA')",
                            }}
                        >
                            <div className="absolute top-4 right-4 z-20">
                                <div className="bg-accent-blue/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">
                                        check_circle
                                    </span>
                                    Sesudah: Solusi WebIDev
                                </div>
                            </div>
                        </div>

                        {/* Before Image */}
                        <div
                            className="absolute inset-0 h-full bg-cover bg-left-top border-r-4 border-primary shadow-[4px_0_24px_rgba(0,0,0,0.25)] overflow-hidden"
                            style={{
                                width: `${sliderValue}%`,
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0W1UzPK92-3WvSMAi7VFK7ay8irtb3JfzE3O3HD_UxqedLgnEISh28I3MWMvYHoxDWZg9qwrqWEl7fYn0iZQdwtj-pZL4k_5RnCGbmhT2IRjcN05yMzB1NgYiUm4-1wYSCFk6QSiAHLqAtRMiQWjJS4g_QE_3DQkZ74NDDxcDg-Ww5DLRMI8VOaFt4u7JECUMxqswWGKvYb40j2XSiOjoj5kf8idlFp4DCY5IH4pIfrJGAzdVXcyHiPB0RpZ2P5yzNRIndzUF_w')",
                            }}
                        >
                            <div className="absolute inset-0 w-[200vw] h-full">
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border border-gray-200">
                                        <span className="material-symbols-outlined text-sm">
                                            history
                                        </span>
                                        Sebelum: Proses Manual
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slider Input */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 z-30 cursor-ew-resize focus:outline-none"
                        />

                        {/* Handle */}
                        <div
                            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none size-10 rounded-full bg-primary shadow-xl flex items-center justify-center text-text-main"
                            style={{ left: `${sliderValue}%` }}
                        >
                            <span className="material-symbols-outlined">code</span>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-4 p-6 rounded-xl hover:bg-white transition-colors group">
                        <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-text-main group-hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-text-main mb-2">
                                Pendapatan Signifikan
                            </h3>
                            <p className="text-slate leading-relaxed">
                                Dengan mendigitalkan pelacakan inventaris dan penjualan, klien
                                kami melihat peningkatan rata-rata{" "}
                                <span className="font-bold text-text-main">50%</span> dalam
                                penjualan terkonfirmasi pada kuartal pertama.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-6 rounded-xl hover:bg-white transition-colors group">
                        <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-text-main mb-2">
                                Alur Kerja Lebih Cepat
                            </h3>
                            <p className="text-slate leading-relaxed">
                                Pelaporan otomatis dan dasbor waktu nyata memangkas tugas
                                administratif, menghasilkan{" "}
                                <span className="font-bold text-text-main">
                                    efisiensi operasional 3x lebih cepat
                                </span>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-6 rounded-xl hover:bg-white transition-colors group">
                        <div className="size-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">
                                sentiment_very_satisfied
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-text-main mb-2">
                                Kepuasan Pengguna
                            </h3>
                            <p className="text-slate leading-relaxed">
                                Desain UX/UI yang intuitif memastikan adopsi yang cepat. Kami
                                secara konsisten mencapai{" "}
                                <span className="font-bold text-text-main">
                                    tingkat kepuasan 98%
                                </span>{" "}
                                dari tim internal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
