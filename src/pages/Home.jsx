import React, { useEffect } from "react";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import TrustBar from "../components/TrustBar.jsx";
import Divider from "../components/Divider.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TestimonialRow from "../components/TestimonialRow.jsx";
import { SITE, COPY } from "../content/site.js";
import { setMeta } from "../utils/seo.js";

export default function Home() {
  useEffect(() => {
    setMeta({
      title: "Home",
      description: SITE.seo.defaultDescription
    });
  }, []);

  return (
    <>
      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-hairline px-3 py-1.5 text-xs text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                {SITE.tagline}
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-ink-900">
                {COPY.home.heroTitle}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-ink-600 leading-relaxed max-w-2xl">
                {COPY.home.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button to="/sellers" variant="primary">
                  I’m Selling
                </Button>
                <Button to="/buyers" variant="secondary">
                  I’m Buying
                </Button>
              </div>

              <div className="mt-10">
                <TrustBar text={SITE.regionLine} />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl2 bg-white shadow-soft p-6">
                <div className="text-xs uppercase tracking-wider text-ink-600">What we do</div>
                <Divider className="my-4" />
                <ul className="space-y-3 text-sm text-ink-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40" />
                    <span><span className="font-semibold">Sellers:</span> fast, simple path to a cash offer.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40" />
                    <span><span className="font-semibold">Buyers:</span> buy box-driven deal and investment sourcing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40" />
                    <span><span className="font-semibold">Asset types:</span> residential + commercial.</span>
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <Button to="/sellers" className="w-full">Start as Seller</Button>
                  <Button to="/buyers" variant="secondary" className="w-full">Start as Buyer</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Approach"
            title="Minimal process. Maximum clarity."
            subtitle="We keep everything clean: clear expectations, tight communication, and a straightforward path forward."
          />
          <div className="mt-10">
            <TestimonialRow />
          </div>
        </Container>
      </section>
    </>
  );
}