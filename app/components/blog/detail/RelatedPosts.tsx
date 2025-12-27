import Link from "next/link";

export default function RelatedPosts() {
    return (
        <section className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main">
                            Lebih banyak dari WebIDev
                        </h2>
                        <p className="text-text-muted mt-2">
                            Pemikiran terbaru tentang desain dan teknik
                        </p>
                    </div>
                    <Link
                        className="hidden md:flex items-center gap-1 text-primary-dark font-bold hover:gap-2 transition-all"
                        href="/blog"
                    >
                        Lihat semua tulisan{" "}
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <Link className="group flex flex-col gap-4" href="#">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
                            <div
                                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPWvSSyv_0ctr8se4J8Lk8ZQFo-lQBtNWZgq-DKzshSLoCSrVE9E2v_ffAhvVeT1lKIKnkB5W27YxDmqUKp6QmssnuCXXldovuZxM5g3RQHpIzaJM2zpKgUvUZ3CB9JQ-EGbFV3VikVOayfVdtmAa3s1KUkY6WD2HNti1bzWBVUYMZV1w')",
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-primary-dark uppercase tracking-wide">
                                Desain
                            </span>
                            <h3 className="text-xl font-bold leading-tight text-text-main group-hover:text-primary-dark transition-colors">
                                Tren UX untuk 2024: Apa yang Diharapkan
                            </h3>
                            <p className="text-sm text-text-muted line-clamp-2">
                                Menjelajahi pergeseran menuju komputasi spasial dan antarmuka
                                berbasis AI.
                            </p>
                        </div>
                    </Link>
                    {/* Card 2 */}
                    <Link className="group flex flex-col gap-4" href="#">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
                            <div
                                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTJHfthnfpDGLlq4Na-TKO321SKWuQwNmCVb_dx4N1EmtGHV8-JqCH4Lvkb5OYfVSK8SF34VeAgFL8IuXbLBuKbd0pMcRUo4PWvDpD0xnK09Wz2wDD9YMpY7kVSgfBDl9KFt9v1C65ZAl9dCHWZa8pE7GMHzVOuC0kYiZoTpq5V-poRqKcTw22QpZDB0ESUeDJKs97q5uKO2B2mNQcnOUnJsZ3HLw7JuJhhPDuDV7p74AOa74jIH3lOVl848NRW8JMkPmzjRMsIg')",
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-primary-dark uppercase tracking-wide">
                                Budaya
                            </span>
                            <h3 className="text-xl font-bold leading-tight text-text-main group-hover:text-primary-dark transition-colors">
                                Bagaimana kami membangun WebIDev: Pendekatan Budaya Pertama
                            </h3>
                            <p className="text-sm text-text-muted line-clamp-2">
                                Membangun rumah perangkat lunak adalah tentang orang-orang,
                                bukan hanya kode.
                            </p>
                        </div>
                    </Link>
                    {/* Card 3 */}
                    <Link className="group flex flex-col gap-4" href="#">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
                            <div
                                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ8tB6Gv-8mUu0T0LfypUpMrqIyZm0N-shOmgFuZJE0KCxJ_seTpMMM0QC7_rckawV2SqetEu880jZRXfzjHZdvfk6U7vg8ogzFgbqOnlMUwa32ikSoik-tuJWqm_7APuScLqOmSLOSwux6tjvMiBWSL9DO9AAzmnrz21mIXdmJ4sN5JvB5y5BfMM0GXP55tuPACN20YIkxbhLhcayX_p1FUd2jJosmmRvVUV3Mo4QlpPkhEh0fPCcWtXh62kCPza4DCosSvZPIw')",
                                }}
                            ></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-primary-dark uppercase tracking-wide">
                                Teknik
                            </span>
                            <h3 className="text-xl font-bold leading-tight text-text-main group-hover:text-primary-dark transition-colors">
                                Python vs Node.js untuk Pengembangan Backend
                            </h3>
                            <p className="text-sm text-text-muted line-clamp-2">
                                Tolok ukur komprehensif kinerja dan pengalaman pengembang.
                            </p>
                        </div>
                    </Link>
                </div>
                <Link
                    className="md:hidden mt-8 flex items-center justify-center gap-1 text-primary-dark font-bold"
                    href="/blog"
                >
                    Lihat semua tulisan{" "}
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
            </div>
        </section>
    );
}
