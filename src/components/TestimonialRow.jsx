import React from "react";
import Card from "./Card.jsx";

const placeholders = [
  {
    quote:
      "“Professional, direct, and fast. Clear communication from start to finish.”",
    who: "Property owner (placeholder)"
  },
  {
    quote:
      "“A clean process and serious execution—exactly what we needed.”",
    who: "Investor (placeholder)"
  },
  {
    quote:
      "“No fluff. Just clarity and a straightforward path to close.”",
    who: "Buyer (placeholder)"
  }
];

export default function TestimonialRow() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {placeholders.map((t, idx) => (
        <Card key={idx} className="p-6">
          <p className="text-sm text-ink-700 leading-relaxed">{t.quote}</p>
          <div className="mt-4 text-xs text-ink-500">{t.who}</div>
        </Card>
      ))}
    </div>
  );
}