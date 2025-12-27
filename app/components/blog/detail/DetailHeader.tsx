import Link from "next/link";

export default function DetailHeader() {
    return (
        <>
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap gap-2 py-4 mb-2 text-sm">
                <Link className="text-text-muted hover:text-primary transition-colors" href="/">
                    Beranda
                </Link>
                <span className="text-text-muted">/</span>
                <Link className="text-text-muted hover:text-primary transition-colors" href="/blog">
                    Blog
                </Link>
                <span className="text-text-muted">/</span>
                <Link className="text-text-muted hover:text-primary transition-colors" href="#">
                    Teknik
                </Link>
                <span className="text-text-muted">/</span>
                <span className="text-text-main font-medium truncate max-w-[200px] md:max-w-none">
                    Arsitektur Serverless
                </span>
            </nav>
            {/* Page Heading */}
            <div className="py-2 mb-6">
                <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-[-0.02em] text-text-main mb-6">
                    Masa Depan Arsitektur Serverless di Tahun 2024
                </h1>
            </div>
            {/* Author Header */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-4">
                    <div className="relative size-12 md:size-14 rounded-full overflow-hidden bg-gray-200 ring-2 ring-primary/20">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQqdyHuQPP30CdoTq_QAusNpBDl5uOBZ97HlHPPxKGqbCfKvbhNwbrYMrkU25i57M4xs1XyucbpP-5wAxJ3Fjd8rWQBqqW9RkFmAed63nz0wtE0swNwow5Dp3G5wdEQZL5sj-9pTSixaLHXFsmPjs7cdBQ8Yu5Yn0y09xuVgHdzlcnhgJry2HAco4yc06zWVw-OmEEzPjDffNyJMtVLhPRPHGIZ2p1BP_It_SsWur7HTTnXeaUO7gheEZK6OinT6c9W859Q2B1jQ')",
                            }}
                        ></div>
                    </div>
                    <div>
                        <p className="text-text-main text-lg font-bold leading-tight">
                            Sarah Jenkins
                        </p>
                        <div className="flex items-center gap-2 text-text-muted text-sm mt-1">
                            <span>Kepala Arsitek</span>
                            <span>•</span>
                            <span>12 Okt 2023</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">
                                    schedule
                                </span>{" "}
                                5 menit baca
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:flex gap-2">
                    <button className="size-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">
                            bookmark_border
                        </span>
                    </button>
                    <button className="size-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">
                            ios_share
                        </span>
                    </button>
                </div>
            </div>
            {/* Hero Image */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-lg">
                <div
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCT7dtZfmGLNc9qyqmzcyPTtMZ97bb52U1g_VTKtmLDqdSX_gX2oTEzfvDxi2QfKbbmHSh5FA5xtwbCA3ScHtDfXr6IPZvB21YFsri7B_jZwW2SgxNr2FrVTs95ZLjPRhy6ecpsn0lqLw0g31TnjVQ0RvZ97fO51BxgT0u7DitHay-HbjXOAmPkH1lkr5pMoQwLAWmYJDW3lK3CDikNMZMBRqyLZ2YXviwU0MjBwCMVqrz5h3nXY1MdtEqeSyNYi7dRYf-zwsbQuQ')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div>
        </>
    );
}
