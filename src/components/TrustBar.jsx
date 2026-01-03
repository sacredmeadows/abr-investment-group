import React from "react";

export default function TrustBar({ text }) {
  return (
    <div className="rounded-xl2 bg-white shadow-hairline px-4 py-3 text-black">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-700">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-black/40" />
          <span>{text}</span>
        </span>
        <span className="text-ink-500">•</span>
        <span className="text-ink-500">Clear process</span>
        <span className="text-ink-500">•</span>
        <span className="text-ink-500">Fast response</span>
        <span className="text-ink-500">•</span>
        <span className="text-ink-500">Professional execution</span>
      </div>
    </div>
  );
}