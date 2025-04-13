import React from "react";

const WhatsAppFloatingIcon: React.FC = () => {
    return (
        <div className="fixed bottom-4 right-4 group flex items-center">
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
                <span className="relative bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                    Call me
                    {/* Tooltip Arrow */}
                    <span className="absolute top-1/2 right-[-8px] -translate-y-1/2 border-4 border-transparent border-l-gray-800"></span>
                </span>
            </div>
            <a
                href="https://wa.me/358456011488"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 relative group"
                aria-label="Contact me on WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    role="img"
                    aria-labelledby="whatsappIconTitle"
                >
                    <title id="whatsappIconTitle">WhatsApp Icon</title>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.105 1.515 5.84L0 24l6.293-1.515A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.29 17.71c-.26.73-1.52 1.39-2.09 1.48-.55.09-1.22.13-1.97-.15-.45-.18-1.03-.34-1.76-.67-3.09-1.34-5.1-4.5-5.26-4.71-.15-.21-1.25-1.66-1.25-3.17 0-1.51.79-2.26 1.07-2.57.26-.3.57-.37.77-.37.2 0 .39.002.56.01.18.01.42-.07.66.51.26.6.88 2.07.96 2.22.08.15.13.33.03.54-.09.21-.14.33-.28.51-.15.18-.3.39-.43.52-.15.15-.3.31-.13.6.17.3.75 1.23 1.61 2 .99.88 1.83 1.15 2.13 1.28.3.13.47.11.65-.07.18-.18.75-.87.95-1.17.2-.3.4-.25.66-.15.26.1 1.66.78 1.95.92.3.15.5.22.57.34.08.12.08.73-.18 1.46z" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppFloatingIcon;