import { CallFloatingButton } from "@/components/ui/CallFloatingButton";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

/** Bottom-right stack of persistent contact actions — call, then chat. */
function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <CallFloatingButton />
      <WhatsAppFloatingButton />
    </div>
  );
}

export { FloatingActions };
