import React, { useEffect, useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Divider from "../components/Divider.jsx";
import Steps from "../components/Steps.jsx";
import FAQ from "../components/FAQ.jsx";
import TestimonialRow from "../components/TestimonialRow.jsx";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";
import TrustBar from "../components/TrustBar.jsx";
import { SITE, COPY } from "../content/site.js";
import { setMeta } from "../utils/seo.js";
import { required, isEmail, isPhone } from "../utils/validators.js";

export default function Sellers() {
  useEffect(() => {
    setMeta({
      title: "Sellers",
      description: "Cash offer in 30 minutes or less. Zero closing costs. Zero commissions."
    });
  }, []);

  const initial = useMemo(
    () => ({
      name: "",
      phone: "",
      email: "",
      propertyAddress: "",
      reasonToSell: "",
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
    if (!required(v.phone) || !isPhone(v.phone)) next.phone = "Please enter a valid phone number.";
    if (!required(v.email) || !isEmail(v.email)) next.email = "Please enter a valid email address.";
    if (!required(v.propertyAddress)) next.propertyAddress = "Please enter the property address.";
    if (!required(v.reasonToSell)) next.reasonToSell = "Please tell us why you want to sell.";
    return next;
  }

  // Netlify requires urlencoded POST from JS if we intercept submission.
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
          "form-name": "seller-lead",
          "bot-field": values.botField,
          name: values.name,
          phone: values.phone,
          email: values.email,
          propertyAddress: values.propertyAddress,
          reasonToSell: values.reasonToSell
        })
      });

      window.location.assign("/thanks");
    } catch (err) {
      setErrors({
        submit: "Something went wrong submitting the form. Please try again or contact us directly."
      });
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-hairline px-3 py-1.5 text-xs text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                Sellers
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-ink-900">
                {COPY.sellers.headline}
              </h1>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                {COPY.sellers.subheadline}
              </p>

              <div className="mt-8">
                <TrustBar text={COPY.sellers.trustLine} />
              </div>

              <p className="mt-6 text-sm text-ink-600 leading-relaxed max-w-xl">
                {COPY.sellers.urgencyLine}
              </p>

              <div className="mt-8 rounded-xl2 bg-white shadow-hairline p-5">
                <div className="text-xs uppercase tracking-wider text-ink-500">
                  Quick note
                </div>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  Submit the form to start. If we need one clarification for accuracy, we’ll ask—
                  and keep momentum moving.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Card className="p-6 sm:p-8 shadow-soft">
                <div className="text-sm font-semibold text-ink-900">Get your cash offer</div>
                <p className="mt-2 text-sm text-ink-600">
                  Provide the details below. We’ll respond fast and keep it simple.
                </p>

                <Divider className="my-6" />

                <form
                  name="seller-lead"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thanks"
                  onSubmit={onSubmit}
                >
                  <input type="hidden" name="form-name" value="seller-lead" />
                  <input type="hidden" name="bot-field" value={values.botField} onChange={onChange} />

                  <div className="grid gap-4">
                    <FormField
                      label="Full name"
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      placeholder="Your name"
                      required
                      error={errors.name}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        label="Phone"
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="(###) ###-####"
                        required
                        error={errors.phone}
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
                    </div>

                    <FormField
                      label="Property address"
                      name="propertyAddress"
                      value={values.propertyAddress}
                      onChange={onChange}
                      placeholder="Street, City, State"
                      required
                      error={errors.propertyAddress}
                    />

                    <FormField
                      label="Why do you want to sell?"
                      name="reasonToSell"
                      as="textarea"
                      value={values.reasonToSell}
                      onChange={onChange}
                      placeholder="Tell us what’s driving the timeline (repairs, tenant, relocation, inheritance, etc.)"
                      required
                      error={errors.reasonToSell}
                    />

                    {errors.submit ? (
                      <p className="text-sm text-ink-700 bg-black/5 rounded-xl p-3">{errors.submit}</p>
                    ) : null}

                    <Button type="submit" disabled={submitting} className="w-full">
                      {submitting ? "Submitting..." : "Request offer"}
                    </Button>

                    <p className="text-xs text-white/70 leading-relaxed">
                      By submitting, you agree to be contacted about your request. No spam—just the
                      next steps.
                    </p>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Fast, structured, and transparent."
            subtitle="A simple sequence designed for urgency—then reassurance."
          />
          <div className="mt-10">
            <Steps items={COPY.sellers.steps} />
          </div>
          <p className="mt-6 text-sm text-ink-600">
            <span className="font-semibold text-ink-900">Urgency:</span> The fastest path to an offer is providing
            complete details up front.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="Proof"
            title="A professional standard—without the noise."
            subtitle="No inflated claims. Just clean execution and a clear process."
          />
          <div className="mt-10">
            <TestimonialRow />
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            subtitle="If you still have questions, use the form above or contact us directly."
          />
          <div className="mt-10">
            <FAQ items={COPY.sellers.faq} />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" variant="secondary">Contact</Button>
            <Button to="/buyers" variant="ghost">I’m a Buyer</Button>
          </div>
        </Container>
      </section>
    </>
  );
}