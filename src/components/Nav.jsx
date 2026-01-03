import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "./Container.jsx";
import { SITE } from "../content/site.js";

const navLinkBase =
  "text-sm transition px-3 py-2 rounded-xl hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 ring-offset-ink-50";
const active = "bg-black/5";

export default function Nav() {
  return (
  <header className="sticky top-0 z-40 border-b border-black/10 bg-ink-100/80 backdrop-blur">
      <Container className="py-4 flex items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-ink-900 text-ink-50 grid place-items-center shadow-soft transition group-hover:translate-y-[-1px]">
            <span className="text-xs font-semibold tracking-wide">ABR</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-ink-900">{SITE.name}</div>
            <div className="text-xs text-ink-600">{SITE.tagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/sellers"
            className={({ isActive }) => `${navLinkBase} ${isActive ? active : ""}`}
          >
            Sellers
          </NavLink>
          <NavLink
            to="/buyers"
            className={({ isActive }) => `${navLinkBase} ${isActive ? active : ""}`}
          >
            Buyers
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${navLinkBase} ${isActive ? active : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${navLinkBase} ${isActive ? active : ""}`}
          >
            Contact
          </NavLink>
        </nav>

        <div className="md:hidden">
          <a href="/sellers" className={navLinkBase}>
            Start
          </a>
        </div>
      </Container>
    </header>
  );
}