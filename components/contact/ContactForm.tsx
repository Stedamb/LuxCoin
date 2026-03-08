"use client";

import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          result.error || "Qualcosa è andato storto. Riprova più tardi.",
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("Errore di connessione. Controlla la tua rete.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-card border border-white/5 rounded-2xl p-8 shadow-2xl backdrop-blur-sm text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-serif font-bold mb-2">
          Messaggio Inviato!
        </h2>
        <p className="text-muted-foreground">
          Grazie per averci contattato. Ti risponderemo al più presto.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Invia un altro messaggio
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-white/5 rounded-2xl p-8 shadow-2xl backdrop-blur-sm text-card-foreground">
      <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
        <Send className="w-5 h-5 text-primary" /> Inviaci un Messaggio
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nome</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              placeholder="Il tuo nome"
              className="bg-background/50 border-white/10 h-10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Cognome</Label>
            <Input
              id="lastName"
              name="lastName"
              required
              placeholder="Il tuo cognome"
              className="bg-background/50 border-white/10 h-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="esempio@email.com"
            className="bg-background/50 border-white/10 h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Oggetto</Label>
          <Input
            id="subject"
            name="subject"
            required
            placeholder="Valutazione, Acquisto, Informazioni..."
            className="bg-background/50 border-white/10 h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Messaggio</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Scrivi qui la tua richiesta..."
            className="bg-background/50 border-white/10 min-h-[150px] resize-none"
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg text-sm border border-red-500/20">
            <AlertCircle className="w-4 h-4" />
            {errorMessage}
          </div>
        )}

        <Button
          variant="premium"
          type="submit"
          className="w-full h-12 text-lg"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Invio in corso..." : "Invia Richiesta"}
        </Button>
      </form>
    </div>
  );
}
