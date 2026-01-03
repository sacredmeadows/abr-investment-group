import React from "react";
import Container from "./Container.jsx";
import { SITE, COPY } from "../content/site.js";
import Divider from "./Divider.jsx";

export default function Footer() {
  return (
<footer className="border-t border-white/10 bg-black text-white">
      <Container className="py-10">
        <Divider className="mb-8" />

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-white/60">{SITE.name}</div>
            <div className="mt-2 text-sm text-white/60">{SITE.regionLine}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/60">Contact</div>
            <div className="mt-3 space-y-2 text-sm">
              <a className="block hover:underline" href={SITE.contact.phoneHref}>
                {SITE.contact.phoneDisplay}
              </a>
              <a className="block hover:underline" href={`mailto:${SITE.contact.email}`}>
                {SITE.contact.email}
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/60">Notes</div>
            <p className="mt-3 text-sm text-white/60">
              {COPY.disclaimers.general}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div className="opacity-80">Built with Vite + React + Tailwind.</div>
        </div>
      </Container>
    </footer>
  );
}