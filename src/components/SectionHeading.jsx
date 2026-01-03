import React from "react";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="text-xs uppercase tracking-wider text-ink-600">{eyebrow}</div>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-ink-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-ink-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}