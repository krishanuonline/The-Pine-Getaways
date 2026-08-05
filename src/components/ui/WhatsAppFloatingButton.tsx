"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/** Persistent bottom-right chat entry point, with a soft recurring pulse to draw the eye. */
function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-lg sm:right-6 sm:bottom-6"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(37,211,102,0.55)",
          "0 0 0 16px rgba(37,211,102,0)",
          "0 0 0 16px rgba(37,211,102,0)",
        ],
      }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      Chat with us
    </motion.a>
  );
}

export { WhatsAppFloatingButton };
