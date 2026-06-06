"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", occasion: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-5 py-3 rounded-xl bg-white/80 border border-braun/15 font-body text-base text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-rose/40 focus:border-rose/40 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block font-body text-sm font-medium text-braun mb-1.5"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            className={inputClasses}
            placeholder="Euer Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-body text-sm font-medium text-braun mb-1.5"
          >
            E-Mail *
          </label>
          <input
            id="email"
            type="email"
            required
            className={inputClasses}
            placeholder="eure@email.de"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="occasion"
          className="block font-body text-sm font-medium text-braun mb-1.5"
        >
          Anlass
        </label>
        <select
          id="occasion"
          className={inputClasses}
          value={formData.occasion}
          onChange={(e) =>
            setFormData({ ...formData, occasion: e.target.value })
          }
        >
          <option value="">Bitte wählen...</option>
          <option value="Heiratsantrag">Heiratsantrag</option>
          <option value="Freie Trauung">Freie Trauung</option>
          <option value="Taufe / Kinderwillkommensfest">
            Taufe / Kinderwillkommensfest
          </option>
          <option value="Trauerfeier">Trauerfeier</option>
          <option value="Eheversprechen erneuern">
            Eheversprechen erneuern
          </option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm font-medium text-braun mb-1.5"
        >
          Nachricht *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className={inputClasses}
          placeholder="Schreibt gerne ein paar Infos / Wünsche zu eurem Anliegen..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
      </Button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            className="font-body text-salbei text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Vielen Dank! Wir melden uns bei euch.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="font-body text-rose text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Es gab einen Fehler. Bitte versucht es erneut oder schreibt uns
            direkt an momentsinvoice@gmx.de.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
