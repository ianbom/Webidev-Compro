"use strict";
"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogHero from "../components/blog/BlogHero";
import BlogFilter from "../components/blog/BlogFilter";
import BlogList from "../components/blog/BlogList";
import BlogNewsletter from "../components/blog/BlogNewsletter";

// Mock Data
const ALL_POSTS = [
    {
        id: 1,
        category: "Teknik",
        date: "24 Okt 2025",
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
        date: "02 Nov 2025",
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
        date: "15 Nov 2025",
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
        date: "01 Des 2025",
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
        date: "10 Des 2025",
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
        date: "18 Des 2025",
        readTime: "6 menit baca",
        title: "Pengujian Pengguna dalam Sprint Agile",
        excerpt:
            "Cara menggabungkan siklus pengujian pengguna yang cepat tanpa memperlambat proses pengembangan agile Anda.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAPIZkv9cwALJ4Wgz4HP9BGd4Rp_hF25exRA11i_wA1WgDnjWHbz49X6C-qwprAiJxUgaZit5QHbgqorbMviEtPiBYS9sac5SYM3_beOe-eQrTIBm3Ihr7sWWVh_L22IWmbIC8I75dqZ9IZ3oxzScy7DLC6VoE2YEqnYglMqjV5--c_0TxIyudNuyiiKGBA3gyIR7ajfyz34fC6JgpvOVEEocnm4sER7nGtix2GRjuF_d2C7YD9FRyRsS6b1y0C--0qep3tO9Q5Mg",
        slug: "user-testing-agile",
    },
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("Semua Artikel");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = ALL_POSTS.filter((post) => {
        const matchesCategory =
            selectedCategory === "Semua Artikel" ||
            post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-background-light">
            <Header />
            <main className="grow">
                <BlogHero />
                <BlogFilter
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    searchQuery={searchQuery}
                    onSearch={setSearchQuery}
                />
                <BlogList posts={filteredPosts} />
                <BlogNewsletter />
            </main>
            <Footer />
        </div>
    );
}
