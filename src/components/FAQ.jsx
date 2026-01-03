import React, { useState } from "react";
import Card from "./Card.jsx";

export default function FAQ({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item, idx) => (
        <FAQItem key={idx} item={item} />
      ))}
    </div>
  );
}

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="p-5">
      <button
        type="button"
        className="w-full text-left flex items-start justify-between gap-4"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-semibold text-ink-900">{item.q}</span>
        <span className="mt-0.5 text-ink-600 select-none">{open ? "—" : "+"}</span>
      </button>
      {open ? (
        <p className="mt-3 text-sm text-ink-600 leading-relaxed">{item.a}</p>
      ) : null}
    </Card>
  );
}