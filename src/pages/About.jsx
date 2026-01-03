import React, { useEffect } from "react";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Divider from "../components/Divider.jsx";
import { SITE } from "../content/site.js";
import { setMeta } from "../utils/seo.js";

export default function About() {
  useEffect(() => {
    setMeta({
      title: "About",
      description: "ABR Investment Group — residential + commercial wholesaling."
    });
  }, []);

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Professional wholesaling—without the noise."
          subtitle="ABR Investment Group serves both residential and commercial buyers and sellers with a streamlined approach focused on clarity, speed, and clean execution."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-sm font-semibold text-ink-900">Scope</div>
            <Divider className="my-4" />
            <p className="text-sm text-ink-600 leading-relaxed">
              We evaluate a wide range of property types and situations. The goal is a simple path to a clear outcome.
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-ink-900">Standards</div>
            <Divider className="my-4" />
            <p className="text-sm text-ink-600 leading-relaxed">
              Clear communication, minimal friction, and a professional process from initial details to close.
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-ink-900">Coverage</div>
            <Divider className="my-4" />
            <p className="text-sm text-ink-600 leading-relaxed">
              {SITE.regionLine}. Submit your details and we’ll take it from there.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}