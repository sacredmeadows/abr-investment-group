import React, { useEffect, useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Divider from "../components/Divider.jsx";
import FormField from "../components/FormField.jsx";
import Button from "../components/Button.jsx";
import { SITE } from "../content/site.js";
import { setMeta } from "../utils/seo.js";
import { required, isEmail } from "../utils/validators.js";

export default function Contact() {
  useEffect(() => {
    setMeta({
      title: "Contact",
      description: "Contact ABR Investment Group."
    });
  }, []);

  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      message: "",
      botField: ""
    }),
    []
  );

  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate(v) {
    const next = {};
    if (!required(v.name)) next.name = "Please enter your name.";
    if (!required(v.email) || !isEmail(v.email)) next.email = "Please enter a valid email address.";
    if (!required(v.message)) next.message = "Please enter a message.";
    return next;
  }

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  async function onSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": values.botField,
          name: values.name,
          email: values.email,
          message: values.message
        })
      });

      window.location.assign("/thanks");
    } catch (err) {
      setErrors({
        submit: "Something went wrong submitting the form. Please try again or email us directly."
      });
      setSubmitting(false);
    }
  }

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Reach us directly."
              subtitle="If you prefer, email or call. Otherwise, send a short message and we’ll respond."
            />

            <div className="mt-8 rounded-xl2 bg-white shadow-hairline p-6">
              <div className="text-xs uppercase tracking-wider text-ink-600">Contact</div>
              <Divider className="my-4" />
              <div className="space-y-2 text-sm">
                <a className="block hover:underline" href={SITE.contact.phoneHref}>
                  {SITE.contact.phoneDisplay}
                </a>
                <a className="block hover:underline" href={`mailto:${SITE.contact.email}`}>
                  {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 shadow-soft">
              <div className="text-sm font-semibold text-ink-900">Send a message</div>
              <p className="mt-2 text-sm text-ink-600">Keep it concise. We’ll follow up.</p>
              <Divider className="my-6" />

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/thanks"
                onSubmit={onSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" value={values.botField} onChange={onChange} />

                <div className="grid gap-4">
                  <FormField
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Your name"
                    required
                    error={errors.name}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                    required
                    error={errors.email}
                  />
                  <FormField
                    label="Message"
                    name="message"
                    as="textarea"
                    value={values.message}
                    onChange={onChange}
                    placeholder="How can we help?"
                    required
                    error={errors.message}
                  />

                  {errors.submit ? (
                    <p className="text-sm text-ink-700 bg-black/5 rounded-xl p-3">{errors.submit}</p>
                  ) : null}

                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? "Submitting..." : "Send message"}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}