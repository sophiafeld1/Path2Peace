"use client";

import { useState } from "react";
import Button from "./ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please call us at 703-340-6920."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-teal-50 rounded-lg p-10 text-center">
        <h3 className="font-heading text-2xl font-bold text-ink mb-4">
          Thank You!
        </h3>
        <p className="text-body">
          Thank you for reaching out to us, we will be in touch with you as soon
          as possible! If you would like to speak with us over the phone, our
          number is{" "}
          <a
            href="tel:+17033406920"
            className="text-teal-600 font-semibold hover:text-teal-700"
          >
            703-340-6920
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-ink focus:border-teal-500 focus:ring-2 focus:ring-teal-300 outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-ink focus:border-teal-500 focus:ring-2 focus:ring-teal-300 outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-ink focus:border-teal-500 focus:ring-2 focus:ring-teal-300 outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please provide information about yourself or your child/teen and describe how we can help."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-ink focus:border-teal-500 focus:ring-2 focus:ring-teal-300 outline-none transition-colors resize-vertical"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-sm text-gray-500">
        Expect a response within one business day.
      </p>
    </form>
  );
}
