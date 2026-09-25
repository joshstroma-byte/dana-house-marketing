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
