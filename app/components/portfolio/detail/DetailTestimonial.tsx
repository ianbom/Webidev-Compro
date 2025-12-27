export default function DetailTestimonial() {
    return (
        <div className="w-full max-w-4xl px-6 py-12 text-center mx-auto">
            <span className="material-symbols-outlined text-6xl text-primary/40 mb-4">
                format_quote
            </span>
            <blockquote className="text-2xl font-medium text-text-main leading-normal mb-8">
                "WebIDev mengubah visi kami menjadi produk terkemuka di pasar. Perhatian
                mereka terhadap detail dan kemampuan untuk menyelesaikan tantangan
                teknis yang kompleks sangat mengesankan. Aplikasi baru ini telah
                sepenuhnya merevitalisasi keterlibatan pelanggan kami."
            </blockquote>
            <div className="flex flex-col items-center">
                <div
                    className="w-12 h-12 rounded-full bg-gray-200 mb-3 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbke7Z0wf3vdH1bklWWPpDMpETA5K0zhm98YMhEjF8dkC17kU9w_yk8H-v2brfEUFmq1sMNfeoLe69ilHJMxWIKJOjYO5naSTUOMRGB1utEA4OU4XjhjumfG29zt5XRTvxeWIZJf1Zz5huMu-ezL9aFnlrEhQozKbyvbSY2ybu6vqUbyPO14Bp6-5h-qTsItGzojWVEvO2lp3wBUjnYuYqlDyfsbT9osKODyvUNMBbck1H6VDpfYNwytSsCSdfryu4jozz0FI4Zg')",
                    }}
                ></div>
                <cite className="not-italic font-bold text-text-main">Sarah Jenkins</cite>
                <span className="text-sm text-text-muted">CTO, FinanceCo</span>
            </div>
        </div>
    );
}
