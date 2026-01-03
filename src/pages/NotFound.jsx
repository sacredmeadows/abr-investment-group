import React, { useEffect } from "react";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import { setMeta } from "../utils/seo.js";

export default function NotFound() {
  useEffect(() => {
    setMeta({
      title: "Not Found",
      description: "Page not found."
    });
  }, []);

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-ink-600">404</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink-900">Page not found.</h1>
          <p className="mt-4 text-sm text-ink-600">
            The page you’re looking for doesn’t exist. Use the navigation or go home.
          </p>
          <div className="mt-8">
            <Button to="/" variant="primary">Go home</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}