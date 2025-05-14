import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png"

const WhatsAppModalLauncher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phone = "358456011488";
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const getStatus = () => {
        const hour = new Date().getHours();
        return hour >= 8 && hour < 22 ? "online" : "offline";
    };

    const isOnline = getStatus() === "online";

    return (
        <>
            {/* Floating WhatsApp Icon */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 focus:outline-none z-40"
                aria-label="Open WhatsApp modal"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.105 1.515 5.84L0 24l6.293-1.515A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.29 17.71c-.26.73-1.52 1.39-2.09 1.48-.55.09-1.22.13-1.97-.15-.45-.18-1.03-.34-1.76-.67-3.09-1.34-5.1-4.5-5.26-4.71-.15-.21-1.25-1.66-1.25-3.17 0-1.51.79-2.26 1.07-2.57.26-.3.57-.37.77-.37.2 0 .39.002.56.01.18.01.42-.07.66.51.26.6.88 2.07.96 2.22.08.15.13.33.03.54-.09.21-.14.33-.28.51-.15.18-.3.39-.43.52-.15.15-.3.31-.13.6.17.3.75 1.23 1.61 2 .99.88 1.83 1.15 2.13 1.28.3.13.47.11.65-.07.18-.18.75-.87.95-1.17.2-.3.4-.25.66-.15.26.1 1.66.78 1.95.92.3.15.5.22.57.34.08.12.08.73-.18 1.46z" />
                </svg>
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50">
                    <div
                        ref={modalRef}
                        className="bg-white rounded-2xl overflow-hidden w-80 shadow-2xl border border-gray-200 animate-fade-in"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 flex items-start justify-between">
                            {/* Logo + Name + Status */}
                            <div className="flex items-start space-x-3">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow"
                                />
                                <div>
                                    <div className="text-white font-semibold text-sm leading-tight">
                                        Hafiz
                                    </div>
                                    <div className={`text-xs ${isOnline ? "text-green-200" : "text-gray-300"}`}>
                                        {isOnline ? "🟢 online" : "⚪ offline"}
                                    </div>
                                </div>
                            </div>

                            {/* Close button */}
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-white text-xl font-bold hover:text-gray-300 transition"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-4 py-5 bg-white">
                            <div className="bg-gray-100 p-3 rounded-lg shadow-inner mb-5 border border-gray-200">
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    👋 Hey there, I'm <strong>Hafiz Javid</strong>!
                                    <br />
                                    Have a question or need help?
                                    <br />
                                    Let’s connect on WhatsApp.
                                </p>
                            </div>

                            <a
                                href={`https://wa.me/${phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 rounded-full shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform duration-200"
                            >
                                💬 Start Chat
                            </a>

                            <p className="text-center text-xs text-gray-400 mt-3">
                                🚀 Powered by{' '}
                                <a
                                    href="https://hafizkh.dev"
                                    className="text-blue-500 hover:underline transition"
                                >
                                    hafizkh.dev
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default WhatsAppModalLauncher;








<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.105 1.515 5.84L0 24l6.293-1.515A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.29 17.71c-.26.73-1.52 1.39-2.09 1.48-.55.09-1.22.13-1.97-.15-.45-.18-1.03-.34-1.76-.67-3.09-1.34-5.1-4.5-5.26-4.71-.15-.21-1.25-1.66-1.25-3.17 0-1.51.79-2.26 1.07-2.57.26-.3.57-.37.77-.37.2 0 .39.002.56.01.18.01.42-.07.66.51.26.6.88 2.07.96 2.22.08.15.13.33.03.54-.09.21-.14.33-.28.51-.15.18-.3.39-.43.52-.15.15-.3.31-.13.6.17.3.75 1.23 1.61 2 .99.88 1.83 1.15 2.13 1.28.3.13.47.11.65-.07.18-.18.75-.87.95-1.17.2-.3.4-.25.66-.15.26.1 1.66.78 1.95.92.3.15.5.22.57.34.08.12.08.73-.18 1.46z" />
</svg>