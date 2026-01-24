import EditableInput from "./EditableInput.jsx";

const CreateUserFields = () => {
    return (
        <div className="grid grid-cols-2 gap-3">
            {/* User Name Section */}
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
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Full Name:
                            <EditableInput name="user_name" isEditable={true} />
                        </label>
                    </div>
                </div>
            </div>

            {/* Email Section */}
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
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Email Address
                            <EditableInput name="user_email" isEditable={true} type="email" />
                        </label>
                    </div>
                </div>
            </div>

            {/* Password Section */}
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
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Password
                            <EditableInput name="password" isEditable={true} type="password" />
                        </label>
                    </div>
                </div>
            </div>

            {/* Phone Number Section */}
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
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-s font-light text-gray-500 tracking-wide block mb-0.5 sm:mb-1">
                            Phone Number
                            <EditableInput name="phone_number" isEditable={true} type="tel" />
                        </label>
                    </div>
                </div>
            </div>

            {/* User Role Section */}
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
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            User Role
                        </label>
                        <select
                            name="user_role"
                            className="w-full px-3 py-1.5 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-sm text-sm focus:outline-none focus:border-amber-500/50"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Age Section */}
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Age
                        </label>
                        <EditableInput
                            name="age"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Height Section */}
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
                                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                            />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                            Height (cm)
                        </label>
                        <EditableInput
                            name="height_cm"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>

            {/* Weight Section */}
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
                            Weight (kg)
                        </label>
                        <EditableInput
                            name="weight_kg"
                            isEditable={true}
                            type="number"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUserFields;
