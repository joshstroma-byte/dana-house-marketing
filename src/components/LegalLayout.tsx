import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <div className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 py-5">
          <Link
            href="/"
            style={{ fontFamily: "var(--font-serif)", color: "var(--foreground)" }}
            className="text-xl font-semibold tracking-tight no-underline hover:opacity-70 transition-opacity"
          >
            Dana House
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="mb-10">
            <h1
              style={{ fontFamily: "var(--font-serif)", color: "var(--foreground)" }}
              className="text-3xl font-bold mb-3"
            >
              {title}
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
              Effective date: {effectiveDate} &nbsp;·&nbsp; Last updated: {effectiveDate}
            </p>
          </div>

          <div className="legal-content">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
        <div className="max-w-3xl mx-auto px-6 py-8">
          <p className="text-sm mb-2">
            Dana House Limited · Registered in England and Wales · Company no. 17222717
          </p>
          <p className="text-sm mb-4">
            Registered office: 24 Crane Avenue, Isleworth, TW7 7JL, United Kingdom
          </p>
          <nav className="flex gap-5 text-sm">
            <Link href="/terms" style={{ color: "var(--muted)" }} className="hover:opacity-70 transition-opacity">
              Terms of Service
            </Link>
            <Link href="/privacy" style={{ color: "var(--muted)" }} className="hover:opacity-70 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/refunds" style={{ color: "var(--muted)" }} className="hover:opacity-70 transition-opacity">
              Refund Policy
            </Link>
          </nav>
        </div>
      </footer>

      <style>{`
        .legal-content p {
          margin-bottom: 1.1rem;
          line-height: 1.75;
          font-size: 0.975rem;
        }
        .legal-content h2 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          color: var(--foreground);
        }
        .legal-content h3 {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }
        .legal-content ul {
          margin-bottom: 1.1rem;
          padding-left: 1.4rem;
          list-style-type: disc;
        }
        .legal-content ul li {
          margin-bottom: 0.4rem;
          line-height: 1.7;
          font-size: 0.975rem;
        }
        .legal-content strong {
          font-weight: 600;
          color: var(--foreground);
        }
        .legal-content a {
          color: var(--primary);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .legal-content a:hover {
          opacity: 0.75;
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }
        .legal-content th {
          text-align: left;
          padding: 0.6rem 0.8rem;
          background: var(--card);
          border: 1px solid var(--border);
          font-weight: 600;
          font-size: 0.85rem;
        }
        .legal-content td {
          padding: 0.6rem 0.8rem;
          border: 1px solid var(--border);
          vertical-align: top;
          line-height: 1.6;
        }
        .legal-content hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 2.5rem 0;
        }
      `}</style>
    </div>
  );
}
