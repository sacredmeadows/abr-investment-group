import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={
        "rounded-xl2 bg-[#111] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] " +
        className
      }
    >
      {children}
    </div>
  );
}
