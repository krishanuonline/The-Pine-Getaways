"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Persistent call entry point, paired with the WhatsApp floating button. */
function CallFloatingButton() {
  const phone = siteConfig.contact.phones[0].replace(/\s+/g, "");

  return (
    <motion.a
      href={`tel:${phone}`}
      aria-label="Call us"
      className="flex items-center gap-2.5 rounded-full bg-forest-800 px-5 py-3.5 text-sm font-semibold text-cream-50 shadow-lg"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(27,59,44,0.55)",
          "0 0 0 16px rgba(27,59,44,0)",
          "0 0 0 16px rgba(27,59,44,0)",
        ],
      }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <Phone className="h-5 w-5 shrink-0" />
      Call us
    </motion.a>
  );
}

export { CallFloatingButton };
