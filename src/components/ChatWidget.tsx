import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";

declare global {
  interface Window {
    Tawk_API?: {
      toggle?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      onLoad?: () => void;
      onStatusChange?: (status: string) => void;
      onChatMaximized?: () => void;
      onChatMinimized?: () => void;
      onChatStarted?: () => void;
      onChatEnded?: () => void;
      isChatMaximized?: () => boolean;
      getStatus?: () => string;
      visitor?: {
        name?: string;
        email?: string;
      };
    };
    Tawk_LoadStart?: Date;
  }
}

const ChatWidget: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Hide the default widget on load
    window.Tawk_API.onLoad = () => {
      setIsLoaded(true);
      // Hide the default Tawk bubble
      if (window.Tawk_API?.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };

    // Track chat state
    window.Tawk_API.onChatMaximized = () => {
      setIsChatOpen(true);
    };

    window.Tawk_API.onChatMinimized = () => {
      setIsChatOpen(false);
      // Hide widget again after minimizing
      setTimeout(() => {
        if (window.Tawk_API?.hideWidget) {
          window.Tawk_API.hideWidget();
        }
      }, 100);
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6962e25c1d5b7c197ccfa9c9/1jel48e7d";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    script.id = "tawk-script";

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => {
      clearTimeout(tooltipTimer);
      const existingScript = document.getElementById("tawk-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleClick = () => {
    if (!isLoaded) return;

    if (isChatOpen) {
      window.Tawk_API?.minimize?.();
    } else {
      window.Tawk_API?.maximize?.();
    }
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999999]">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-20 right-0 whitespace-nowrap"
          >
            <div className="relative">
              <div className="glass-card px-4 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium">
                    <span className="dark:text-white text-gray-800">
                      Hi! Need help or Want Collaborate?{" "}
                    </span>
                    <span className="text-primary-400">
                      Chat with Me (Hafiz)
                    </span>
                  </span>
                </div>
              </div>
              {/* Arrow */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 rotate-45 glass-card border-t-0 border-l-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={!isLoaded}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
      >
        {/* Pulse ring animation */}
        {!isChatOpen && isLoaded && (
          <>
            <span className="absolute inset-0 rounded-full bg-primary-500/30 animate-ping" />
            <span
              className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)",
                filter: "blur(8px)",
              }}
            />
          </>
        )}

        {/* Button */}
        <div
          className={`
                        relative w-14 h-14 rounded-full flex items-center justify-center
                        transition-all duration-300 ease-out
                        ${
                          isLoaded ? "cursor-pointer" : "cursor-wait opacity-70"
                        }
                    `}
          style={{
            background: isChatOpen
              ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
              : "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #8b5cf6 100%)",
            boxShadow: isHovered
              ? isChatOpen
                ? "0 8px 32px rgba(239, 68, 68, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.1)"
                : "0 8px 32px rgba(99, 102, 241, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), 0 0 0 2px rgba(255, 255, 255, 0.1)"
              : isChatOpen
                ? "0 4px 20px rgba(239, 68, 68, 0.3)"
                : "0 4px 20px rgba(99, 102, 241, 0.4), 0 0 20px rgba(139, 92, 246, 0.2)",
          }}
        >
          {/* Icon */}
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                {/* AI sparkle indicator */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading spinner */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow:
              isHovered && !isChatOpen
                ? [
                    "0 0 20px rgba(99, 102, 241, 0.4)",
                    "0 0 40px rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(99, 102, 241, 0.4)",
                  ]
                : "0 0 0px rgba(99, 102, 241, 0)",
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      {/* Status indicator */}
      {isLoaded && !isChatOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-dark-900 shadow-lg"
          style={{
            boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
          }}
        />
      )}
    </div>
  );
};

export default ChatWidget;
