"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function PortfolioGrid() {
    const [activeFilter, setActiveFilter] = useState("Semua");

    const projects = [
        {
            title: "FinFlow Dashboard",
            category: "SaaS",
            description: "Platform analitik keuangan komprehensif untuk perusahaan.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCWvX8HdwCOG6lF7nlffQ9js_95VVfBjhmvuWPO7rEG5BnXoXcAF2b1xFxNPniuU584fQqLG7WiQ5LTlNDl0jQolaOizYHnrtNeiGva5Y1cKQsUmVA7AkOpbrWapQszue9SBQlJoQqGV_cVRrBeFo0YcelZ0rQLN7dxoS0guaGgAIwlWij2_vqfOsVMc2wl6ITqHOMEB96TygTDfOJM8vF5oelt-N86K6i-TPV6zvd3sEVkiPZKmrjo5TO0rdn_IRE86GuGiSzSBg",
            tagColor: "bg-blue-100 text-accent-blue",
        },
        {
            title: "Aplikasi MediCare",
            category: "Kesehatan",
            description: "Portal komunikasi dokter-pasien dan penjadwalan.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCvjHotbcm_oGKthdyEkjdXvzrze2VyJixggy_Sxcqdz_85wt2Kfr0x4NWRYkPyCIPqewVHiifOKh8nUfq0TgdJqamLSXzzekr_Qa-I7aSns1ZZtszqwt9lr2Rd3m02t4yo0fkbFIe7SkdbFULD2ZTopAjry083yKDOmqyusHlS0Ug9nDEeRwc_7E7xm1sAi1tuiXSZgwIBEXgVqzeAexU90ttvhhB3doOxEHtwboLJqpJshaiB7-rit-cQlj4S1ovRxeEwrkqPfg",
            tagColor: "bg-green-100 text-green-800",
        },
        {
            title: "Redesain Shopify",
            category: "E-Commerce",
            description:
                "Pengembangan tema kustom untuk pengecer bervolume tinggi.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAoKhqowuCKidged5oNODIZHkS70muuQ_htrrBZK_DLnGbqxTEiAoG9IqWlxAdmxabhl4FY-e-gJKfED04QaqnR6a49n3yw9pgr1YzIZqYEp7XzvLQFPcCKtobrpIpSjgMIs-zoOU2Sb_IeAtQpHF6uiiBhNtyq9OYCdkrNJSvGGLf3eW_-ZR8I36UR_s2mWngELCimHDEUHO7X5bBNB0DnB6GglD0_SzIfXE9edJXTTjXMrKs5UEcgF0nc5s0pI5aukj2SbpfNGw",
            tagColor: "bg-purple-100 text-purple-800",
        },
        {
            title: "Platform EduLearn",
            category: "Pendidikan",
            description: "Sistem manajemen pembelajaran interaktif untuk sekolah.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBBjSA3jVmRscKsOlLpctd28LgR80T4reKstP20xNgdJTuljKCXhOOYp6XGq_hnKTCrou0lRSiC9s0VtnSmC1l2X1Ekp2293AjBnseODaC3Iz0JctbS31HVrdY1lxcFmtVewofQmqTOUjWKNzeDUbXqnoWBbfeh8DHl3o3DUsGRPLeCF8dPKOG-f_SQnuuXf8Hl5w-_GwqWs_bpNX3f3M-H9I6-QjHocol-QZdHQkwF2JeDukHJwmvc1yAkSWYdu3fn4PtLGkoHpw",
            tagColor: "bg-yellow-100 text-yellow-800",
        },
        {
            title: "CryptoWallet Pro",
            category: "FinTech",
            description:
                "Dompet digital aman dengan fitur perdagangan waktu nyata.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC2lGSySNjqZ5LNQnG2B71fKqgDqhUNtuI92-k48MCYEEnjp0fWMNpT1O9FnyOTy_OT9L9NX5bFrh4MxSwfw9LVcCqIlELrUBCjo79vtWoVK-aiLd65qGGua0MxRqk5kHMqikYh16vOzXsZAeyAa-E6rnBuCKi_AOpo5WXfGk4Co5YZGEKLl9Gw9JjL_xQPbVdzA17y4xO5uzDokV7dL-Hb7SL7YVJhrmHZiPIHdl7UXod24igqRcLYRT_LRCw41De--w5QsSkYIg",
            tagColor: "bg-blue-100 text-accent-blue",
        },
        {
            title: "POS Restoran",
            category: "Enterprise",
            description: "Sistem kasir berbasis cloud untuk jaringan perhotelan.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC77qhPSCMIOJ69DMSu3_JxWi72pjyHwPkmL-Ncni_oOYvW3nkaIV6Tmz_4app8rZWCjAlysoIgPaBOTfN76a1xjxtha4uwFIF-YBC6fD-bleQfhFlUMtix2tiidocKoy9z1GR68PVBo5JHxYEcrcGKPmdSoTDgDdvOqV5QP7bJhEaMKbaBkLZpTTF26Nb6JPoWPU4wR3eQ5j_SojdPhrtmM7jBNqjtuLKEStXry7_i5BRW4cZ-VaiU9pJ9MVEPcQbKwElUpYMkpw",
            tagColor: "bg-gray-200 text-gray-800",
        },
    ];

    const categories = [
        "Semua",
        "FinTech",
        "E-Commerce",
        "Kesehatan",
        "Pendidikan",
        "SaaS",
    ];

    const filteredProjects =
        activeFilter === "Semua"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <>
            {/* Filters */}
            <section className="px-4 md:px-10 lg:px-40 py-8 sticky top-[65px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-[960px] mx-auto overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex gap-3 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`group flex h-9 items-center justify-center gap-x-2 rounded-full px-6 transition-all shadow-sm ring-offset-1 ${activeFilter === cat
                                    ? "bg-primary text-black font-bold ring-2 ring-primary"
                                    : "bg-gray-100 text-text-main font-medium hover:bg-gray-200 border border-transparent hover:border-gray-300"
                                    }`}
                            >
                                <span className="text-sm">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Grid */}
            <section className="px-4 md:px-10 lg:px-40 py-8 pb-20">
                <div className="max-w-[960px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredProjects.map((project, index) => (
                            <Link
                                key={index}
                                href="/portfolio/finflow-dashboard"
                                className="group relative flex flex-col gap-4 cursor-pointer"
                            >
                                <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-gray-100 shadow-sm transition-shadow hover:shadow-lg">
                                    <div
                                        className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${project.image}")` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-white">
                                            <span>Lihat Detail</span>
                                            <span className="material-symbols-outlined text-lg">
                                                arrow_outward
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-bold text-text-main group-hover:text-accent-blue transition-colors">
                                            {project.title}
                                        </h3>
                                        <span
                                            className={`${project.tagColor} text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wider`}
                                        >
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-text-muted">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Load More */}
            <section className="px-4 md:px-10 lg:px-40 pb-20">
                <div className="flex justify-center">
                    <button className="flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-text-main px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg active:scale-95 group">
                        <span>Muat Lebih Banyak</span>
                        <span className="material-symbols-outlined group-hover:animate-bounce">
                            expand_more
                        </span>
                    </button>
                </div>
            </section>
        </>
    );
}
