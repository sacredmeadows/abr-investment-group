import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={
        "rounded-xl2 bg-white border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.07)] " +
        className
      }
    >
      {children}
    </div>
  );
}
