export default function ContactForm() {
    return (
        <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-text-main mb-2">Kirim Pesan</h3>
            {/* Name Field */}
            <label className="flex flex-col w-full">
                <p className="text-text-main text-sm font-medium leading-normal pb-2">
                    Nama Lengkap
                </p>
                <input
                    className="w-full rounded-lg text-text-main border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder:text-gray-400 text-base transition-all"
                    placeholder="Masukkan nama lengkap"
                    type="text"
                />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Field */}
                <label className="flex flex-col w-full">
                    <p className="text-text-main text-sm font-medium leading-normal pb-2">
                        Alamat Email
                    </p>
                    <input
                        className="w-full rounded-lg text-text-main border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder:text-gray-400 text-base transition-all"
                        placeholder="contoh@email.com"
                        type="email"
                    />
                </label>
                {/* Phone Field */}
                <label className="flex flex-col w-full">
                    <p className="text-text-main text-sm font-medium leading-normal pb-2">
                        Nomor Telepon
                    </p>
                    <input
                        className="w-full rounded-lg text-text-main border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 placeholder:text-gray-400 text-base transition-all"
                        placeholder="+62 812 3456 789"
                        type="tel"
                    />
                </label>
            </div>
            {/* Service Dropdown */}
            <label className="flex flex-col w-full">
                <p className="text-text-main text-sm font-medium leading-normal pb-2">
                    Layanan yang Dibutuhkan
                </p>
                <div className="relative">
                    <select className="w-full rounded-lg text-text-main border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 pr-10 text-base appearance-none transition-all cursor-pointer">
                        <option disabled selected value="">
                            Pilih layanan...
                        </option>
                        <option value="web">Pengembangan Website</option>
                        <option value="mobile">Aplikasi Mobile</option>
                        <option value="uiux">Desain UI/UX</option>
                        <option value="consulting">Konsultasi IT</option>
                    </select>
                </div>
            </label>
            {/* Message Field */}
            <label className="flex flex-col w-full">
                <p className="text-text-main text-sm font-medium leading-normal pb-2">
                    Pesan Anda
                </p>
                <textarea
                    className="w-full rounded-lg text-text-main border border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary h-32 p-4 placeholder:text-gray-400 text-base resize-none transition-all"
                    placeholder="Ceritakan tentang proyek Anda..."
                ></textarea>
            </label>
            {/* Submit Button */}
            <button className="mt-2 w-full cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-yellow-400 text-text-main text-base font-bold leading-normal tracking-wide transition-colors shadow-sm active:scale-[0.99]">
                Kirim Pesan
            </button>
        </div>
    );
}
