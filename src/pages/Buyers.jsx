import React, { useEffect, useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Divider from "../components/Divider.jsx";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";
import TrustBar from "../components/TrustBar.jsx";
import { SITE, COPY } from "../content/site.js";
import { setMeta } from "../utils/seo.js";
import { required, isEmail, isPhone } from "../utils/validators.js";

export default function Buyers() {
  useEffect(() => {
    setMeta({
      title: "Buyers",
      description: "Submit your buy box for targeted deal and investment sourcing."
    });
  }, []);

  const initial = useMemo(
    () => ({
      name: "",
      phone: "",
      email: "",
      entity: "",
      markets: "",
      assetTypes: "",
      budget: "",
      criteria: "",
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
    if (!required(v.markets)) next.markets = "Please specify target markets (cities/counties/states).";
    if (!required(v.assetTypes)) next.assetTypes = "Please specify asset types.";
    if (!required(v.criteria)) next.criteria = "Please include key criteria (returns, size, vintage, etc.).";
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
          "form-name": "buyer-buybox",
          "bot-field": values.botField,
          name: values.name,
          phone: values.phone,
          email: values.email,
          entity: values.entity,
          markets: values.markets,
          assetTypes: values.assetTypes,
          budget: values.budget,
          criteria: values.criteria
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
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-hairline px-3 py-1.5 text-xs text-ink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                Buyers
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-ink-900">
                {COPY.buyers.headline}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-ink-600 leading-relaxed">
                {COPY.buyers.subtitle}
              </p>

              <div className="mt-6 text-sm text-ink-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white shadow-hairline px-3 py-1.5">
                  {COPY.buyers.keywords}
                </span>
              </div>

              <div className="mt-8">
                <TrustBar text={SITE.regionLine} />
              </div>

              <div className="mt-8 rounded-xl2 bg-white shadow-hairline p-6">
                <div className="text-sm font-semibold text-ink-900">{COPY.buyers.comingSoonTitle}</div>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {COPY.buyers.comingSoonBody}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8 shadow-soft">
                <SectionHeading
                  eyebrow="Buy Box"
                  title="Submit your criteria"
                  subtitle="Concise is fine—just make it actionable."
                />

                <Divider className="my-6" />

                <form
                  name="buyer-buybox"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thanks"
                  onSubmit={onSubmit}
                >
                  <input type="hidden" name="form-name" value="buyer-buybox" />
                  <input type="hidden" name="bot-field" value={values.botField} onChange={onChange} />

                  <div className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
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
                        label="Entity (optional)"
                        name="entity"
                        value={values.entity}
                        onChange={onChange}
                        placeholder="LLC / Fund / Sponsor / GP"
                        required={false}
                      />
                    </div>

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
                      label="Target markets"
                      name="markets"
                      value={values.markets}
                      onChange={onChange}
                      placeholder="South Florida / specific cities / counties"
                      required
                      error={errors.markets}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        label="Asset types"
                        name="assetTypes"
                        value={values.assetTypes}
                        onChange={onChange}
                        placeholder="SFR, small multifamily, retail, industrial, etc."
                        required
                        error={errors.assetTypes}
                      />
                      <FormField
                        label="Budget range (optional)"
                        name="budget"
                        value={values.budget}
                        onChange={onChange}
                        placeholder="$500k–$5M"
                        required={false}
                      />
                    </div>

                    <FormField
                      label="Key criteria"
                      name="criteria"
                      as="textarea"
                      value={values.criteria}
                      onChange={onChange}
                      placeholder="Returns, size, occupancy, vintage, value-add, target basis, timeline, etc."
                      required
                      error={errors.criteria}
                    />

                    {errors.submit ? (
                      <p className="text-sm text-ink-700 bg-black/5 rounded-xl p-3">{errors.submit}</p>
                    ) : null}

                    <Button type="submit" disabled={submitting} className="w-full">
                      {submitting ? "Submitting..." : "Submit buy box"}
                    </Button>

                    <p className="text-xs text-ink-500 leading-relaxed">
                      We’ll review and follow up with next-step questions only if needed.
                    </p>
                  </div>
                </form>
              </Card>

              <div className="mt-6 flex gap-3">
                <Button to="/sellers" variant="secondary">I’m Selling</Button>
                <Button to="/contact" variant="ghost">Contact</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}