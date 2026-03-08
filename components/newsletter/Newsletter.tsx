"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Iscrizione completata con successo!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "C'è stato un errore. Riprova.");
      }
    } catch (err) {
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="La tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white border-white/10"
            disabled={status === "loading" || status === "success"}
          />
          <Button
            type="submit"
            variant="default"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "..." : "Iscriviti"}
          </Button>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-500 text-xs">
            <AlertCircle className="w-3 h-3" />
            {message}
          </div>
        )}

        {status === "success" && (
          <div className="flex items-center gap-2 text-green-500 text-xs">
            <CheckCircle2 className="w-3 h-3" />
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
