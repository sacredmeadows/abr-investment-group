import React from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 " +
  "ring-offset-ink-50";

const variants = {
  primary:
    "bg-white text-black shadow-md hover:bg-neutral-200 hover:translate-y-[-1px] active:translate-y-[0px]",
  secondary:
    "border border-white text-white hover:bg-white hover:text-black transition",
  ghost:
    "text-white hover:bg-white/10"
};


export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
