import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div className={`rounded-xl2 bg-white shadow-hairline ${className}`}>
      {children}
    </div>
  );
}