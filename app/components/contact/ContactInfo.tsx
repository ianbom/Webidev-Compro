export default function ContactInfo() {
    return (
        <div className="flex flex-col h-full gap-8">
            {/* Info Cards */}
            <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-text-main">Informasi Kontak</h3>
                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 transition-all group">
                    <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-accent-blue">
                            location_on
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-text-main mb-1">Kantor Kami</p>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Jl. Teknologi No. 123, Kebayoran Baru
                            <br />
                            Jakarta Selatan, DKI Jakarta 12190
                        </p>
                    </div>
                </div>
                {/* Contact */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 transition-all group">
                    <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-accent-blue">
                            call
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-text-main mb-1">
                            Hubungi Kami
                        </p>
                        <a
                            className="block text-text-muted text-sm hover:text-accent-blue transition-colors"
                            href="tel:+6281234567890"
                        >
                            +62 812-3456-7890 (WhatsApp)
                        </a>
                        <a
                            className="block text-text-muted text-sm hover:text-accent-blue transition-colors"
                            href="mailto:hello@webidev.com"
                        >
                            hello@webidev.com
                        </a>
                    </div>
                </div>
                {/* Social Media */}
                <div className="flex items-center gap-4 mt-2 pl-4">
                    <a
                        className="group flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 hover:border-accent-blue hover:text-accent-blue transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-blue text-xl">
                            work
                        </span>{" "}
                        {/* LinkedIn proxy */}
                    </a>
                    <a
                        className="group flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 hover:border-accent-blue hover:text-accent-blue transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-blue text-xl">
                            photo_camera
                        </span>{" "}
                        {/* Instagram proxy */}
                    </a>
                    <a
                        className="group flex items-center justify-center size-10 rounded-full bg-white border border-gray-200 hover:border-accent-blue hover:text-accent-blue transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-blue text-xl">
                            public
                        </span>{" "}
                        {/* Website/FB proxy */}
                    </a>
                </div>
            </div>
            {/* Map Embed Placeholder */}
            <div className="relative w-full flex-grow min-h-[250px] rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-4 group">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyi-jVfKcAyBwttmpKT-iqwmsP-9AlMwU9tZfz4JyxmOTWKvBkuuPkBZpUQxlaEHme1BipKulj3pHsXC60Y7ywwuCFPQohqqMOJeI0Dz51_Ltohf5b2UtSkw5LZJCHR_wRYkX7bi88cjOfzEsy54IoT-Qrvyjb1gMtu4vRvSAMdiWQ5EZluS_aT3lKITjqrK5NaXKHcIFbMJe95yYqJXxoW9lBi7F_jnP0Qn5pnzIc3_kBVqmEPQSc-iyTxZsNeALnqGUQFNAYsw')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-red-500 text-lg">
                            pin_drop
                        </span>
                        <span className="text-xs font-semibold text-text-main">
                            WebIDev HQ
                        </span>
                    </div>
                    <a
                        className="text-xs font-bold text-accent-blue hover:underline"
                        href="#"
                    >
                        Lihat di Google Maps
                    </a>
                </div>
            </div>
        </div>
    );
}
