"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { homestays } from "@/data/homestays";

export interface BookingFormProps {
  /** Pre-selects a homestay, e.g. when opened from that homestay's "Book Request" button. */
  defaultHomestay?: string;
  /** Called after the WhatsApp link is opened — lets a hosting modal close itself. */
  onSubmitted?: () => void;
}

function BookingForm({ defaultHomestay = "", onSubmitted }: BookingFormProps) {
  const uid = React.useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = [
      "Hi! I'd like to plan a stay at The Pine Getaways.",
      "",
      `Name: ${data.get("name")}`,
      `Phone / WhatsApp: ${data.get("phone")}`,
      `Check-in: ${data.get("checkIn")}`,
      `Check-out: ${data.get("checkOut")}`,
      `Guests: ${data.get("guests") || "—"}`,
      `Rooms: ${data.get("rooms")}`,
      `Preferred homestay: ${data.get("homestay") || "No preference"}`,
    ];
    const message = data.get("message");
    if (message) lines.push(`Message: ${message}`);

    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    onSubmitted?.();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor={`${uid}-name`} required>
          <Input id={`${uid}-name`} name="name" required placeholder="Your full name" />
        </FormField>
        <FormField label="Phone / WhatsApp" htmlFor={`${uid}-phone`} required>
          <Input id={`${uid}-phone`} name="phone" type="tel" required placeholder="+91 00000 00000" />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Check-in" htmlFor={`${uid}-checkIn`} required>
          <Input id={`${uid}-checkIn`} name="checkIn" type="date" required />
        </FormField>
        <FormField label="Check-out" htmlFor={`${uid}-checkOut`} required>
          <Input id={`${uid}-checkOut`} name="checkOut" type="date" required />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Guests" htmlFor={`${uid}-guests`}>
          <Input id={`${uid}-guests`} name="guests" type="number" min={1} placeholder="2" />
        </FormField>
        <FormField label="No. of Rooms" htmlFor={`${uid}-rooms`} required>
          <Input id={`${uid}-rooms`} name="rooms" type="number" min={1} required placeholder="1" />
        </FormField>
      </div>

      <FormField label="Preferred homestay" htmlFor={`${uid}-homestay`}>
        <Select id={`${uid}-homestay`} name="homestay" defaultValue={defaultHomestay}>
          <option value="">No preference</option>
          {homestays.map((homestay) => (
            <option key={homestay.slug} value={homestay.name}>
              {homestay.name}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Message" htmlFor={`${uid}-message`}>
        <Textarea id={`${uid}-message`} name="message" placeholder="Anything else we should know?" />
      </FormField>

      <Button type="submit" variant="whatsapp" size="lg" className="mt-2 w-full sm:w-auto">
        <MessageCircle className="h-4 w-4" />
        Send via WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground">
        Sends your details straight to us on WhatsApp — we typically reply within a few hours.
      </p>
    </form>
  );
}

export { BookingForm };
