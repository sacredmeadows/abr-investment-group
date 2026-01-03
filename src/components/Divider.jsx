import React from "react";

export default function Divider({ className = "" }) {
  return <div className={`h-px w-full bg-black/10 ${className}`} />;
}