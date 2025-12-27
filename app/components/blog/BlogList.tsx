import Link from "next/link";

export default function BlogList() {
    const posts = [
        {
            id: 1,
            category: "Teknik",
            date: "24 Okt 2023",
            readTime: "5 menit baca",
            title: "Mengoptimalkan Performa React untuk Skala Besar",
            excerpt:
                "Temukan strategi kunci yang kami gunakan di WebIDev untuk memastikan aplikasi perusahaan kami berjalan lancar di bawah beban berat, berfokus pada memoization dan virtualisasi.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuA2lm1rM74RBVOzFBZCB21_XjEBZgIk7mmQGCMIpWSpQXeWtUaUm2qpeuvUmv0TpctkRUdCGaHRpW1PzSxZuRbgTXwYgAtjI9fedBH2sP7q12noyaaAXuuF8LjQevGw-TrrSqPRa3u-V5wlrMbAM8_fWvnQMylA8aLqg6o4mSoUW0vWZJ80Dw6afJbAUb-MI0rq4b4-G52wO01Z3ZN9cpKnYFabWKIlmF5diXi9y70pBk2YXs5ThPbM8Nv3sNEvUbIAoJu1MmSlIQ",
            slug: "mengoptimalkan-performa-react",
        },
        {
            id: 2,
            category: "Desain",
            date: "02 Nov 2023",
            readTime: "7 menit baca",
            title: "Masa Depan UI: Melampaui Desain Flat",
            excerpt:
                "Menjelajahi neumorphism, glassmorphism, dan kembalinya kedalaman dalam antarmuka pengguna. Bagaimana kami mengadaptasi sistem desain kami untuk tahun 2024.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCZdNb530kKfpPKrk_uIpj1CsaGo3_U9T_HNiKJ1783mz8GhJJufFl-NWDEllaVAFIKZLgy_bgrw5-uVczHwMOB9yVmQAfgv9GkdYr5X06LCn7xeSt3ya26012w6d-1yWeTW7DiOvAKR_ZGTRPZYQaXbNo-mcVcdkvspYvDJnGQV7JwioZGfmBhh9alWjqMaxnCBRQPuGdW7_n_B5GHNWvVpPqVyanA89xF7gY_4icrdFYQM2dLI3eVWLQreLX3bv1BqKQcl2IKrw",
            slug: "masa-depan-ui",
        },
        {
            id: 3,
            category: "Budaya",
            date: "15 Nov 2023",
            readTime: "4 menit baca",
            title: "Membangun Tim Teknik yang Utamakan Remote",
            excerpt:
                "Pelajaran yang dipetik dari menskalakan tim kami di 4 zona waktu sambil mempertahankan budaya yang kohesif dan produktivitas tinggi.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBQt9z9kfC5FdTxEQ7VZSts1Dw9dFWjSBw1RGyJipBZ5Mn5NMRea9rPxaG7cXTbIizz9u5cnqRtSn-4E8LrvjrWX6a1T_burlX1ytskiRc7aqWD9PbyZ7KKBMvnlEwsNmBhFZ2W26VWgxGOOc7OC8SMbombInoLZ6P2XaQmYzXzYW5kC6_YM3dVi-MZ3ZtU_tzwmKbIQc4duG9yi50UXM0DnfvWngohP4fJm2WV8nqh-doRNgxx955weQdogZ7Lik5mAxA7Cfcw_A",
            slug: "membangun-tim-remote",
        },
        {
            id: 4,
            category: "Produk",
            date: "01 Des 2023",
            readTime: "6 menit baca",
            title: "Metrik yang Benar-Benar Penting",
            excerpt:
                "Bergerak melampaui metrik kesombongan untuk memahami keterlibatan dan retensi pengguna yang sebenarnya dalam produk SaaS.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuApyrjysd9_WcYwtQf936qqV3fCwbNYSOKslRjWDJTGutxztkDc-eEuft3HnfIXqHstUqie-AzDHgCh0ZPg_d4HHXarvSJWoe2MwksAimKvp3rjfhJAx80-nnE07SY6cL4HMDyR5zQQkMi5u2eLYmmKDYM668qBQR-vQjfG5cJQoByZGhnesjHDtp9pQVLv6hHnYSqqcl75VK_7zoIgz5F32WFfCP2-_LIGEJXmw2vV5VzGP70bH1kh5ckGiGtilGnijul667_Otg",
            slug: "metrik-yang-penting",
        },
        {
            id: 5,
            category: "Teknik",
            date: "10 Des 2023",
            readTime: "8 menit baca",
            title: "Menguasai Desain Skema GraphQL",
            excerpt:
                "Praktik terbaik untuk merancang skema GraphQL yang dapat diskalakan, mudah dipelihara, dan efisien untuk aplikasi yang kompleks.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAiSE6hSquHTzCNL7aCcwYGfeIz2vh5quB5jKvvIMFJib7cRqzCXlCPLi7uvWATk2q_4w7GqqB5vud9hsNxSBUZxSESw7r1geNL4fDI2BZOoemjISvMkb6FE4F47hztai70Fh0J6QNg4uJ6kuNGreGUETzgwVCDX4vv6MCn0_SJZZZz0BtYrbJ8z5G9rcq2IGZC8NwINdVXCAVNKuq8VN7VkgImshpzTArjlbb-0z4toVF2hhRu6K6YefDtuhFgFFkoDIznL-Mw-g",
            slug: "menguasai-graphql",
        },
        {
            id: 6,
            category: "Desain",
            date: "18 Des 2023",
            readTime: "6 menit baca",
            title: "Pengujian Pengguna dalam Sprint Agile",
            excerpt:
                "Cara menggabungkan siklus pengujian pengguna yang cepat tanpa memperlambat proses pengembangan agile Anda.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAPIZkv9cwALJ4Wgz4HP9BGd4Rp_hF25exRA11i_wA1WgDnjWHbz49X6C-qwprAiJxUgaZit5QHbgqorbMviEtPiBYS9sac5SYM3_beOe-eQrTIBm3Ihr7sWWVh_L22IWmbIC8I75dqZ9IZ3oxzScy7DLC6VoE2YEqnYglMqjV5--c_0TxIyudNuyiiKGBA3gyIR7ajfyz34fC6JgpvOVEEocnm4sER7nGtix2GRjuF_d2C7YD9FRyRsS6b1y0C--0qep3tO9Q5Mg",
            slug: "user-testing-agile",
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 group h-full cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${post.image}')` }}
                                ></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-secondary font-medium mb-3">
                                    <span className="material-symbols-outlined text-sm">
                                        calendar_today
                                    </span>
                                    <span>{post.date}</span>
                                    <span className="mx-1 text-gray-300">•</span>
                                    <span className="material-symbols-outlined text-sm">
                                        schedule
                                    </span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-sm font-semibold text-text-main group-hover:underline">
                                        Baca Artikel
                                    </span>
                                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                                        arrow_right_alt
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav
                        aria-label="Pagination"
                        className="inline-flex rounded-md shadow-sm isolate gap-2"
                    >
                        <a
                            className="relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-500 hover:text-text-main hover:bg-gray-100 transition-colors"
                            href="#"
                        >
                            <span className="sr-only">Previous</span>
                            <span className="material-symbols-outlined text-lg">
                                chevron_left
                            </span>
                        </a>
                        <a
                            aria-current="page"
                            className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-accent-blue focus:z-20"
                            href="#"
                        >
                            1
                        </a>
                        <a
                            className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-text-main ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                            href="#"
                        >
                            2
                        </a>
                        <a
                            className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-text-main ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
                            href="#"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
                            ...
                        </span>
                        <a
                            className="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-500 hover:text-text-main hover:bg-gray-100 transition-colors"
                            href="#"
                        >
                            <span className="sr-only">Next</span>
                            <span className="material-symbols-outlined text-lg">
                                chevron_right
                            </span>
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    );
}
