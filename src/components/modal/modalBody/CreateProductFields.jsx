import EditableInput from "./EditableInput.jsx";
import CategorySelect from "./CategorySelect.jsx";

const CreateProductFields = () => {
    return (
        <div className="grid grid-cols-2 gap-3">
            {/* Product Name Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Product Name:
                            <EditableInput name="product_name" isEditable={true} />
                        </label>
                    </div>
                </div>
            </div>

            {/* Product Image Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Product Image URL
                            <EditableInput
                                name="product_image"
                                isEditable={true}
                                type="text"
                            />
                        </label>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Description
                            <EditableInput
                                name="product_description"
                                isEditable={true}
                                type="text"
                            />
                        </label>
                    </div>
                </div>
            </div>

            {/* Category Section */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Category
                            <CategorySelect
                                name="product_category"
                                isEditable={true}
                            />
                        </label>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Price
                        </label>
                        <EditableInput
                            name="product_price"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Stock */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Stock
                        </label>
                        <EditableInput
                            name="stock"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Calories */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Calories
                        </label>
                        <EditableInput
                            name="calories"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Carbs */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Carbs (g)
                        </label>
                        <EditableInput
                            name="carbs"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Protein */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Protein (g)
                        </label>
                        <EditableInput
                            name="protein"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Fat */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Fat (g)
                        </label>
                        <EditableInput
                            name="fat"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Minerals */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Minerals
                        </label>
                        <EditableInput
                            name="minerals"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Vitamins */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Vitamins
                        </label>
                        <EditableInput
                            name="vitamins"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Micronutrients */}
            <div className="relative bg-linear-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Micronutrients
                        </label>
                        <EditableInput
                            name="micronutrients"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProductFields;
