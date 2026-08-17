"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Ph.D. inquiry");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:${site.coordinator.email}?subject=${encodeURIComponent(
      `[Kean Computer Science Laboratory] ${topic}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm">
        Name
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border border-gold/20 bg-background px-3 py-2.5 outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-2 text-sm">
        Email
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border border-gold/20 bg-background px-3 py-2.5 outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-2 text-sm">
        Topic
        <select
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="border border-gold/20 bg-background px-3 py-2.5 outline-none focus:border-gold"
        >
          <option>Ph.D. inquiry</option>
          <option>Faculty collaboration</option>
          <option>Research visit</option>
          <option>Press / speaking</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        Message
        <textarea
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="border border-gold/20 bg-background px-3 py-2.5 outline-none focus:border-gold"
          placeholder="Name the research program you read, the question you want to work on, and one paper that changed your mind."
        />
      </label>
      <button
        type="submit"
        className="justify-self-start bg-gold px-5 py-2.5 text-sm font-medium text-navy-deep transition-opacity hover:opacity-90"
      >
        Open email to the coordinator
      </button>
      <p className="text-xs leading-5 text-muted">
        Opens your mail client addressed to {site.coordinator.email}. Nothing is
        stored on this site.
      </p>
    </form>
  );
}
