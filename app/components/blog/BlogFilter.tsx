interface BlogFilterProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    searchQuery: string;
    onSearch: (query: string) => void;
}

export default function BlogFilter({
    selectedCategory,
    onSelectCategory,
    searchQuery,
    onSearch,
}: BlogFilterProps) {
    const categories = [
        "Semua Artikel",
        "Teknik",
        "Desain",
        "Produk",
        "Budaya",
    ];

    return (
        <section className="py-8 bg-white sticky top-[73px] z-40 border-b border-gray-100 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Chips */}
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide mask-gradient">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onSelectCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${selectedCategory === category
                                        ? "bg-black text-white"
                                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    {/* Search */}
                    <div className="w-full md:w-72 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400">
                                search
                            </span>
                        </div>
                        <input
                            value={searchQuery}
                            onChange={(e) => onSearch(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                            placeholder="Cari topik..."
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
