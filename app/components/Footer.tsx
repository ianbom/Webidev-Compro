import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-footer-bg text-slate-300 pt-12 pb-6 border-t-4 border-primary">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Column 1: Brand & About */}
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/favicon-webidev.png"
                                    alt="WebIDev Logo"
                                    width={48}
                                    height={48}
                                    className="h-12 w-auto object-contain"
                                />
                                <h3 className="tracking-tight text-2xl font-bold leading-tight">
                                    <span className="text-blue-400">Web</span>
                                    <span className="text-white">I</span>
                                    <span className="text-primary">Dev</span>
                                </h3>
                            </div>
                            <p className="text-slate-400 text-sm font-normal leading-relaxed pr-2">
                                Membangun masa depan digital. Kami fokus pada desain modern dan
                                pengalaman pengguna yang optimal untuk membantu bisnis
                                berkembang di era digital.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            {[
                                "public",
                                "work",
                                "terminal",
                                "chat",
                            ].map((icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="group flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-footer-bg text-[18px]">
                                        {icon}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col space-y-5">
                        <h4 className="text-white text-lg font-bold tracking-tight flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded-full"></span>
                            Layanan
                        </h4>
                        <ul className="space-y-2">
                            {[
                                "Pengembangan Software",
                                "Desain UI/UX",
                                "Solusi Cloud",
                                "QA & Pengujian",
                                "Analisis Data",
                            ].map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href="/services"
                                        className="text-slate-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="material-symbols-outlined text-[16px] text-primary/50 group-hover:text-primary transition-colors">
                                            chevron_right
                                        </span>
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links & Contact */}
                    <div className="flex flex-col space-y-5">
                        <h4 className="text-white text-lg font-bold tracking-tight flex items-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded-full"></span>
                            Tautan Cepat
                        </h4>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-2">
                            {[
                                { name: "Tentang Kami", url: "/about" },
                                { name: "Portofolio", url: "/portfolio" },
                                { name: "Karir", url: "#" },
                                { name: "Blog", url: "/blog" },
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="text-slate-400 text-sm hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-white/10">
                            <h5 className="text-white text-sm font-semibold mb-3">
                                Hubungi Kami
                            </h5>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-slate-400 text-sm group">
                                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-[18px] text-primary">
                                            location_on
                                        </span>
                                    </div>
                                    <span className="mt-1">123 Taman Tekno, Kota Inovasi</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-400 text-sm group">
                                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-[18px] text-primary">
                                            mail
                                        </span>
                                    </div>
                                    <a
                                        href="mailto:hello@webidev.com"
                                        className="hover:text-primary transition-colors mt-0.5"
                                    >
                                        hello@webidev.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="flex flex-col p-6 rounded-2xl bg-footer-card border border-white/5 space-y-5 h-fit">
                        <div>
                            <h4 className="text-white text-lg font-bold tracking-tight mb-2">
                                Buletin
                            </h4>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Dapatkan update terbaru tren teknologi dan berita perusahaan.
                            </p>
                        </div>
                        <form className="flex flex-col gap-3">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-500 text-[18px]">
                                        mail
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Masukkan email Anda"
                                    className="w-full pl-10 pr-4 py-2.5 bg-footer-bg border border-slate-700 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2.5 px-4 bg-primary hover:bg-primary-hover text-footer-bg font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(253,223,73,0.39)] hover:shadow-[0_6px_20px_rgba(253,223,73,0.23)] cursor-pointer"
                            >
                                Berlangganan
                                <span className="material-symbols-outlined text-[18px]">
                                    arrow_forward
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section: Legal & Copyright */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        © 2024 WebIDev. Hak Cipta Dilindungi.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="#"
                            className="text-slate-500 hover:text-primary text-xs transition-colors"
                        >
                            Kebijakan Privasi
                        </Link>
                        <Link
                            href="#"
                            className="text-slate-500 hover:text-primary text-xs transition-colors"
                        >
                            Syarat & Ketentuan
                        </Link>
                        <Link
                            href="#"
                            className="text-slate-500 hover:text-primary text-xs transition-colors"
                        >
                            Pengaturan Cookie
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
