export default function DetailFeedback() {
    return (
        <div className="my-16 py-10 border-y border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                    <p className="font-bold text-lg text-text-main mb-1">
                        Apakah artikel ini bermanfaat?
                    </p>
                    <p className="text-sm text-text-muted">
                        Bantu kami meningkatkan konten kami dengan memberikan suara.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-green-50 hover:border-green-500 hover:text-green-600 transition-all cursor-pointer">
                        <span className="material-symbols-outlined">thumb_up</span>
                        <span className="font-medium">Ya</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-red-50 hover:border-red-500 hover:text-red-600 transition-all cursor-pointer">
                        <span className="material-symbols-outlined">thumb_down</span>
                        <span className="font-medium">Tidak</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
