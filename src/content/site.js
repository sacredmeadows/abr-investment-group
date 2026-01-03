export const SITE = {
  name: "ABR Investment Group",
  tagline: "Residential & Commercial Real Estate Services",
  regionLine: "Serving property owners and investors across South Florida",
  contact: {
    phoneDisplay: "(305) 555-0123",
    phoneHref: "tel:+13055550123",
    email: "info@abrinvestmentgroup.com"
  },
  social: {
    // Optional placeholders; leave empty if not needed
    linkedin: ""
  },
  seo: {
    defaultTitle: "ABR Investment Group — Wholesaling (Residential + Commercial)",
    defaultDescription:
      "ABR Investment Group is a real estate wholesaling business serving both commercial and residential properties. Sellers: cash offer in 30 minutes or less. Buyers: submit your buy box for deal/investment sourcing.",
    ogImage: "/og-image.png"
  },
  colors: {
    // Tailwind handles most styling; this is just for quick reference/documentation.
    primary: "ink-900",
    background: "ink-50",
    surface: "white"
  }
};

export const COPY = {
  home: {
    heroTitle: "More than just real estate professionals. We're business partners.",
    heroSubtitle:
      "We invest in both commercial and residential properties with a streamlined, no-drama process—built for speed, clarity, and serious execution.",
    primaryCtas: [
      { label: "I’m Selling", href: "/sellers" },
      { label: "I’m Buying", href: "/buyers" }
    ]
  },
  sellers: {
    headline: "Cash offer in 30 minutes or less.",
    subheadline: "Zero closing costs. Zero commissions.",
    urgencyLine:
      "Timing matters. The fastest way to get an offer is to submit the details below—then we’ll confirm the next steps.",
    trustLine:
      "Trusted by investors and property owners across South Florida.",
    steps: [
      {
        title: "Submit the property",
        body: "Share the basics: address, your contact info, and why you want to sell."
      },
      {
        title: "Quick evaluation",
        body: "We review the details and ask only what’s needed to price confidently."
      },
      {
        title: "Receive your offer",
        body: "Get a clear cash offer—no commissions, no closing costs."
      },
      {
        title: "Pick your closing timeline",
        body: "Close on a schedule that fits your situation. We keep it simple."
      }
    ],
    faq: [
      {
        q: "What types of properties do you work with?",
        a: "Both residential and commercial. We evaluate a wide range of property types and conditions."
      },
      {
        q: "Do I have to pay fees or commissions?",
        a: "No. The process is designed to be straightforward: zero closing costs and zero commissions."
      },
      {
        q: "How fast is “30 minutes or less”?",
        a: "Our goal is to provide an initial cash offer within 30 minutes or less after receiving the key details. Some situations may require a quick follow-up question for accuracy."
      },
      {
        q: "Am I locked in if I submit the form?",
        a: "No. Submitting the form simply starts a conversation so we can provide an offer."
      }
    ]
  },
  buyers: {
    headline: "Deal and investment sourcing—built for serious buyers.",
    subtitle:
      "Submit your buy box for targeted sourcing across residential and commercial opportunities.",
    keywords:
      "Sponsors • Deal/Investment Sourcing • General Partners",
    comingSoonTitle: "Deal list (coming soon)",
    comingSoonBody:
      "We’ll publish a curated deal list in the future. For now, submit your criteria and we’ll source directly."
  },
  disclaimers: {
    general:
      "ABR Investment Group is a real estate investment firm. Information on this site is for general purposes and does not constitute legal or financial advice."
  }
};