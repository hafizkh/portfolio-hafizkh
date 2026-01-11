import { useEffect } from "react";

declare global {
    interface Window {
        Tawk_API?: {
            toggle?: () => void;
            maximize?: () => void;
            minimize?: () => void;
            hideWidget?: () => void;
            showWidget?: () => void;
        };
        Tawk_LoadStart?: Date;
    }
}

const TawkToChat: React.FC = () => {
    useEffect(() => {
        // Initialize Tawk.to
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/6962e25c1d5b7c197ccfa9c9/1jel48e7d";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode?.insertBefore(script, firstScript);

        return () => {
            // Cleanup on unmount
            script.remove();
        };
    }, []);

    return null; // Tawk.to handles its own UI
};

export default TawkToChat;
