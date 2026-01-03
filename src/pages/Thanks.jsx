import React, { useEffect } from "react";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Divider from "../components/Divider.jsx";
import { setMeta } from "../utils/seo.js";
import { SITE } from "../content/site.js";

export default function Thanks() {
  useEffect(() => {
    setMeta({
      title: "Thanks",
      description: "We received your submission."
    });
  }, []);

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="max-w-2xl">
          <Card className="p-8 shadow-soft">
            <div className="text-xs uppercase tracking-wider text-ink-600">Submitted</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink-900">
              Thank you—received.
            </h1>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              We’ll review your details and follow up shortly. If you need to reach us immediately:
            </p>

            <Divider className="my-6" />

            <div className="text-sm text-ink-700 space-y-2">
              <a className="block hover:underline" href={SITE.contact.phoneHref}>{SITE.contact.phoneDisplay}</a>
              <a className="block hover:underline" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button to="/" variant="secondary">Back to home</Button>
              <Button to="/sellers">Seller page</Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}