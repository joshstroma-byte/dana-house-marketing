import Link from "next/link";

const APP_URL = "https://app.danahouse.co.uk";

const features = [
  {
    title: "Comprehensive coverage",
    body: "200,000+ active UK charities across all three regulators — the Charity Commission for England and Wales, OSCR Scotland, and CCNI Northern Ireland — unified into a single, deduplicated dataset.",
  },
  {
    title: "Intelligence layers",
    body: "Significance scoring, execution strength, hidden gem identification, financial trend analysis, and cause classification — derived metrics that go far beyond the raw register data.",
  },
  {
    title: "Built for your workflow",
    body: "Access the data however you need it: interactive web app, REST API with structured JSON responses, or scheduled bulk exports in CSV and JSON formats.",
  },
];

const audiences = [
  {
    title: "Foundations and grantmakers",
    body: "Screen candidates, assess funding concentration, and monitor your portfolio against sector-wide benchmarks.",
  },
  {
    title: "Philanthropic advisors",
    body: "Build evidence-based giving strategies for clients. Identify high-performing charities that are underfunded relative to their impact.",
  },
  {
    title: "Researchers and journalists",
    body: "Explore the full UK charitable sector with clean, structured data. Filter by cause area, geography, size, and quality signals.",
  },
  {
    title: "Software vendors",
    body: "Embed charity data into your own products via our REST API. Reliable, documented, and built for production use.",
  },
];

const plans = [
  {
    name: "Pro",
    price: "£49",
    interval: "/ month",
    annualNote: "or £499 / year",
    description:
      "For individual philanthropists and small family offices who want research-grade data to inform their giving.",
    features: [
      "Full charity dataset with intelligent metrics",
      "Search and filter across all cause areas",
      "API access (up to 10,000 requests / month)",
      "CSV export",
    ],
    planKey: "pro",
    highlighted: false,
  },
  {
    name: "Funder",
    price: "£299",
    interval: "/ month",
    annualNote: "or £2,990 / year",
    description:
      "For foundations, grantmakers, and philanthropic advisors managing active portfolios and due diligence workflows.",
    features: [
      "Everything in Pro",
      "Portfolio intelligence and overlap analysis",
      "Hidden gem and funding pressure signals",
      "Higher API limits (100,000 requests / month)",
      "Bulk exports on demand",
    ],
    planKey: "funder",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "£999",
    interval: "/ month",
    annualNote: "or £9,990 / year",
    description:
      "For platforms, large institutions, and compliance teams that need full access and integration support.",
    features: [
      "Everything in Funder",
      "Unlimited API access",
      "Custom data fields on request",
      "Dedicated onboarding and support",
      "Data processing agreement included",
    ],
    planKey: "enterprise",
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Nav */}
      <header
        style={{ borderBottom: "1px solid var(--border)", background: "var(--background)" }}
        className="sticky top-0 z-50"
        role="banner"
      >
        <div
          className="max-w-6xl mx-auto px-6 flex items-center justify-between"
          style={{ height: "60px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.15rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "var(--foreground)",
            }}
          >
            Dana House
          </span>
          <a
            href={APP_URL}
            style={{
              fontSize: "0.9rem",
              color: "var(--foreground)",
              textDecoration: "none",
              fontWeight: 500,
            }}
            className="hover:opacity-60 transition-opacity"
          >
            Sign in
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
      >
        <div className="max-w-2xl">
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Charity intelligence for serious philanthropists
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              marginBottom: "2.25rem",
              maxWidth: "560px",
            }}
          >
            Enriched data on every UK registered charity, with the scoring, signals, and analytics
            that turn philanthropic giving into a disciplined practice.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${APP_URL}/register`}
              style={{
                background: "var(--primary)",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "inline-block",
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Get early access
            </a>
            <a
              href={APP_URL}
              style={{
                background: "transparent",
                color: "var(--foreground)",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                border: "1px solid var(--border)",
                display: "inline-block",
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Sign in
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr style={{ borderColor: "var(--border)", borderTopWidth: "1px", borderStyle: "solid" }} />
      </div>

      {/* What we do */}
      <section
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        aria-labelledby="features-heading"
      >
        <h2
          id="features-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.75rem",
            fontWeight: 600,
            marginBottom: "2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          What we do
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.6rem",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--muted)" }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr style={{ borderColor: "var(--border)", borderTopWidth: "1px", borderStyle: "solid" }} />
      </div>

      {/* Who it's for */}
      <section
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        aria-labelledby="audiences-heading"
      >
        <h2
          id="audiences-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.75rem",
            fontWeight: 600,
            marginBottom: "2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Who it&rsquo;s for
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {audiences.map((a) => (
            <div
              key={a.title}
              style={{ borderLeft: "2px solid var(--border)", paddingLeft: "1.25rem" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {a.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--muted)" }}>
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr style={{ borderColor: "var(--border)", borderTopWidth: "1px", borderStyle: "solid" }} />
      </div>

      {/* Pricing */}
      <section
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        aria-labelledby="pricing-heading"
      >
        <div className="mb-10">
          <h2
            id="pricing-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.75rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Pricing
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
            All plans billed in GBP. Annual billing saves approximately 15%.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted ? "var(--primary)" : "var(--card)",
                border: `1px solid ${plan.highlighted ? "var(--primary)" : "var(--card-border)"}`,
                borderRadius: "6px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: "1.25rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    marginBottom: "0.75rem",
                    color: plan.highlighted ? "#ffffff" : "var(--foreground)",
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.2rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: plan.highlighted ? "#ffffff" : "var(--foreground)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: plan.highlighted ? "rgba(255,255,255,0.7)" : "var(--muted)",
                    }}
                  >
                    {plan.interval}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: plan.highlighted ? "rgba(255,255,255,0.6)" : "var(--muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {plan.annualNote}
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    color: plan.highlighted ? "rgba(255,255,255,0.85)" : "var(--muted)",
                  }}
                >
                  {plan.description}
                </p>
              </div>
              <ul
                style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", flex: 1 }}
              >
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      padding: "0.3rem 0",
                      color: plan.highlighted ? "rgba(255,255,255,0.85)" : "var(--muted)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        color: plan.highlighted ? "rgba(255,255,255,0.7)" : "var(--primary)",
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/register?plan=${plan.planKey}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.65rem 1rem",
                  borderRadius: "4px",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  background: plan.highlighted ? "#ffffff" : "transparent",
                  color: plan.highlighted ? "var(--primary)" : "var(--foreground)",
                  border: plan.highlighted ? "none" : "1px solid var(--border)",
                }}
                className="hover:opacity-80 transition-opacity"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--muted)" }}>
          Need a custom arrangement or want to discuss requirements first?{" "}
          <a
            href="mailto:contact@danahouse.co.uk"
            style={{
              color: "var(--primary)",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            Get in touch
          </a>
          .
        </p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }} role="contentinfo">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  marginBottom: "0.4rem",
                  fontSize: "1rem",
                }}
              >
                Dana House
              </p>
              <p className="text-sm" style={{ marginBottom: "0.2rem" }}>
                Dana House Limited · Company no. 17222717
              </p>
              <p className="text-sm" style={{ marginBottom: "0.2rem" }}>
                24 Crane Avenue, Isleworth, TW7 7JL, United Kingdom
              </p>
              <a
                href="mailto:contact@danahouse.co.uk"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: "var(--muted)" }}
              >
                contact@danahouse.co.uk
              </a>
            </div>
            <nav aria-label="Legal" className="flex flex-col gap-2 text-sm">
              <Link
                href="/terms"
                style={{ color: "var(--muted)" }}
                className="hover:opacity-70 transition-opacity"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                style={{ color: "var(--muted)" }}
                className="hover:opacity-70 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refunds"
                style={{ color: "var(--muted)" }}
                className="hover:opacity-70 transition-opacity"
              >
                Refund Policy
              </Link>
            </nav>
          </div>
          <p
            className="text-xs"
            style={{ marginTop: "2rem", color: "var(--border)" }}
          >
            © {new Date().getFullYear()} Dana House Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
