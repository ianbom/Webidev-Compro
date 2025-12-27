export default function DetailContent() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
            {/* Sticky Sidebar (Share) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center">
                <div className="sticky top-32 flex flex-col gap-4">
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1 text-center">
                        Bagikan
                    </p>
                    <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0077b5] hover:border-[#0077b5] transition-all bg-white cursor-pointer">
                        {/* LinkedIn Icon approximation */}
                        <span className="material-symbols-outlined text-[20px]">work</span>
                    </button>
                    <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-all bg-white cursor-pointer">
                        {/* X/Twitter Icon approximation */}
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                    <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1877f2] hover:border-[#1877f2] transition-all bg-white cursor-pointer">
                        {/* Facebook Icon approximation */}
                        <span className="material-symbols-outlined text-[20px]">public</span>
                    </button>
                    <button
                        className="size-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all bg-white mt-4 cursor-pointer"
                        title="Salin Tautan"
                    >
                        <span className="material-symbols-outlined text-[20px]">link</span>
                    </button>
                </div>
            </div>
            {/* Main Text Column */}
            <div className="col-span-1 lg:col-span-11 lg:pl-10">
                <article className="prose prose-lg max-w-none text-text-main leading-relaxed font-body">
                    <p className="text-xl md:text-2xl leading-relaxed text-text-muted font-light mb-10">
                        Seiring kita melangkah lebih jauh ke tahun 2024, lanskap komputasi
                        awan bergeser secara dramatis. Arsitektur serverless bukan lagi
                        sekadar kata kunci—ini menjadi standar untuk pengembangan aplikasi
                        yang dapat diskalakan dan efisien.
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main mt-12 mb-6">
                        Mengapa Kecepatan Lebih Penting Dari Sebelumnya
                    </h2>
                    <p className="mb-6">
                        Pada masa awal adopsi cloud, pendorong utamanya adalah pengurangan
                        biaya. Beralih dari pusat data on-premise ke cloud berarti
                        menghilangkan belanja modal. Namun, hari ini, percakapan telah
                        bergeser. Ini bukan lagi hanya tentang menghemat uang; ini tentang{" "}
                        <span className="bg-primary/30 px-1 rounded">
                            kecepatan inovasi
                        </span>
                        .
                    </p>
                    <p className="mb-8">
                        Pengembang menemukan bahwa mengelola infrastruktur adalah gangguan
                        dari misi utama mereka: membangun fitur yang menyenangkan pengguna.
                        Serverless menghilangkan gesekan itu sepenuhnya.
                    </p>
                    <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-xl md:text-2xl text-text-main font-serif bg-gray-50 py-4 pr-4 rounded-r-lg">
                        "Optimasi bukanlah kemewahan, itu suatu keharusan. Milidetik yang
                        kita hemat dalam cold start diterjemahkan langsung ke retensi
                        pengguna."
                    </blockquote>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main mt-12 mb-6">
                        Implementasi Teknis: Pendekatan Modern
                    </h2>
                    <p className="mb-6">
                        Mari kita lihat contoh praktis. Server Express.js tradisional
                        memerlukan uptime konstan. Fungsi serverless, sebaliknya, hanya
                        menyala saat dibutuhkan. Berikut adalah pola yang kami adopsi di
                        WebIDev untuk menangani pemrosesan peristiwa asinkron menggunakan
                        AWS Lambda dan Node.js.
                    </p>
                    <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-gray-700 shadow-2xl my-10 group">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-xs text-gray-400 font-mono">
                                handler.js
                            </span>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="font-mono text-sm leading-6 text-gray-300">
                                <code>
                                    <span className="text-purple-400">export</span>{" "}
                                    <span className="text-blue-400">const</span>{" "}
                                    <span className="text-yellow-300">handler</span> ={" "}
                                    <span className="text-purple-400">async</span> (event) =&gt;{" "}
                                    {"{"}
                                    {"\n"}
                                    <span className="text-gray-500">
                                        {"  // Log event masuk untuk debugging"}
                                    </span>
                                    {"\n"}
                                    {"  "}console.
                                    <span className="text-blue-300">log</span>(
                                    <span className="text-green-300">&apos;Event received:&apos;</span>,
                                    JSON.<span className="text-blue-300">stringify</span>(event));
                                    {"\n\n"}
                                    {"  "}
                                    <span className="text-purple-400">try</span> {"{"}
                                    {"\n"}
                                    {"    "}
                                    <span className="text-blue-400">const</span> {"{"} body {"}"}{" "}
                                    = event;
                                    {"\n"}
                                    {"    "}
                                    <span className="text-blue-400">const</span> parsedBody =
                                    JSON.<span className="text-blue-300">parse</span>(body);
                                    {"\n\n"}
                                    <span className="text-gray-500">
                                        {"    // Simulasikan delay pemrosesan"}
                                    </span>
                                    {"\n"}
                                    {"    "}
                                    <span className="text-purple-400">await</span>{" "}
                                    <span className="text-blue-300">processData</span>
                                    (parsedBody);
                                    {"\n\n"}
                                    {"    "}
                                    <span className="text-purple-400">return</span> {"{"}
                                    {"\n"}
                                    {"      "}statusCode: <span className="text-orange-300">200</span>
                                    ,{"\n"}
                                    {"      "}body: JSON.
                                    <span className="text-blue-300">stringify</span>({"{"}{" "}
                                    message: <span className="text-green-300">&apos;Success&apos;</span>{" "}
                                    {"}"}),
                                    {"\n"}
                                    {"    "}
                                    {"}"};{"\n"}
                                    {"  "}
                                    {"}"} <span className="text-purple-400">catch</span> (error){" "}
                                    {"{"}
                                    {"\n"}
                                    {"    "}
                                    <span className="text-purple-400">return</span> {"{"}
                                    {"\n"}
                                    {"      "}statusCode: <span className="text-orange-300">500</span>
                                    ,{"\n"}
                                    {"      "}body: JSON.
                                    <span className="text-blue-300">stringify</span>({"{"} error:
                                    error.message {"}"}),
                                    {"\n"}
                                    {"    "}
                                    {"}"};{"\n"}
                                    {"  "}
                                    {"}"}
                                    {"}"};
                                </code>
                            </pre>
                        </div>
                    </div>
                    <p className="mb-6">
                        Pola ini memastikan bahwa penanganan kesalahan kuat dan kami
                        mencatat data yang dapat ditindaklanjuti tanpa mengacaukan sistem
                        pemantauan kami. Fungsi `processData` di sini mewakili logika bisnis
                        inti Anda, terpisah dari lapisan transportasi.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-text-main mt-10 mb-4">
                        Melihat ke Depan
                    </h3>
                    <p className="mb-6">
                        Alat-alat semakin matang. Kerangka kerja seperti SST dan Serverless
                        Stack membuatnya lebih mudah dari sebelumnya untuk mendefinisikan
                        infrastruktur sebagai kode. Di WebIDev, kami percaya bahwa pada
                        tahun 2025, lebih dari 60% aplikasi perusahaan baru akan dibangun di
                        atas primitif serverless.
                    </p>
                </article>
            </div>
        </div>
    );
}
