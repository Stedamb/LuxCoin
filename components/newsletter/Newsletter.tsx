"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("idle");
    setMessage("");
    setIsModalOpen(true);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      setStatus("error");
      setMessage("Devi accettare la Privacy Policy per procedere.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Iscrizione completata con successo!");
        setTimeout(() => {
          setIsModalOpen(false);
          setEmail("");
          setFirstName("");
          setLastName("");
          setPrivacyAccepted(false);
          setStatus("idle");
          setMessage("");
        }, 3000);
      } else {
        setStatus("error");
        setMessage(data.error || "C'è stato un errore. Riprova.");
      }
    } catch (_err) {
      setStatus("error");
      setMessage("Errore di connessione.");
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-bold text-foreground">Newsletter</h4>
      <p className="text-sm">
        Per te uno <strong className="text-primary">sconto del 15%</strong> sul
        tuo primo acquisto.
      </p>

      <form onSubmit={handleInitialSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="La tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white border-white/10"
          />
          <Button type="submit" variant="default">
            Iscriviti
          </Button>
        </div>
      </form>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Completa l'iscrizione
            </DialogTitle>
            <DialogDescription>
              Inserisci i tuoi dati per ricevere lo{" "}
              <strong className="text-primary">sconto del 15%</strong> sul tuo
              primo acquisto.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleFinalSubmit} className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="bg-white border-white/10"
                  placeholder="Mario"
                  disabled={status === "success"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Cognome</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="bg-white border-white/10"
                  placeholder="Rossi"
                  disabled={status === "success"}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-email">Email</Label>
              <Input
                id="modal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-white/10"
                disabled={status === "success"}
              />
            </div>
            <div className="flex items-start gap-2 pt-1">
              <Checkbox
                id="privacy"
                checked={privacyAccepted}
                onCheckedChange={(checked) =>
                  setPrivacyAccepted(checked === true)
                }
                disabled={status === "success"}
                className="mt-0.5"
              />
              <Label
                htmlFor="privacy"
                className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
              >
                Dichiaro di aver letto e compreso la{" "}
                <Link
                  href="/privacy"
                  className="text-primary hover:underline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Privacy Policy
                </Link>{" "}
                e acconsento al trattamento dei miei dati personali.
              </Label>
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {message}
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                {message}
              </div>
            )}

            <DialogFooter className="mt-2">
              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading"
                  ? "Invio in corso..."
                  : "Conferma Iscrizione"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
