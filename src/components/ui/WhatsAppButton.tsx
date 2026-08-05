import * as React from "react";
import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export interface WhatsAppButtonProps extends Omit<ButtonProps, "variant" | "asChild"> {
  message?: string;
}

function WhatsAppButton({ message, children, ...props }: WhatsAppButtonProps) {
  return (
    <Button variant="whatsapp" asChild {...props}>
      <a href={buildWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        {children ?? "WhatsApp Us"}
      </a>
    </Button>
  );
}

export { WhatsAppButton };
