import React from "react";
import Card from "./Card.jsx";

export default function Steps({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((s, idx) => (
        <Card key={idx} className="p-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 h-9 w-9 shrink-0 rounded-xl bg-ink-900 text-ink-50 grid place-items-center text-sm font-semibold shadow-soft">
              {idx + 1}
            </div>
            <div>
              <div className="text-base font-semibold text-ink-900">{s.title}</div>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.body}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}