import React from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 " +
  "ring-offset-ink-50";

const variants = {
  primary:
    "bg-ink-900 text-ink-50 shadow-soft hover:translate-y-[-1px] hover:shadow-md active:translate-y-[0px] active:shadow-soft",
  secondary:
    "bg-white text-ink-900 shadow-hairline hover:bg-ink-100 hover:translate-y-[-1px] active:translate-y-[0px]",
  ghost:
    "bg-transparent text-ink-900 hover:bg-black/5"
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