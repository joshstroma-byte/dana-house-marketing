import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Dana House",
  description: "Privacy Policy for Dana House Limited.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="16 May 2026">
      <p>
        This Privacy Policy explains how Dana House Limited collects, uses, and protects personal
        data in connection with the Dana House platform and related services (the "Service").
      </p>
      <p>
        We are committed to handling personal data lawfully, fairly, and transparently in accordance
        with the UK General Data Protection Regulation ("UK GDPR") and the Data Protection Act
        2018.
      </p>

      <h2>1. Who we are</h2>
      <p>
        <strong>Dana House Limited</strong> is the data controller responsible for personal data
        described in this policy.
      </p>
      <ul>
        <li>Registered in England and Wales, company number 17222717</li>
        <li>Registered office: 24 Crane Avenue, Isleworth, TW7 7JL, United Kingdom</li>
        <li>
          Contact: <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a>
        </li>
      </ul>
      <p>
        If you have questions about this policy or about how we handle your personal data, please
        contact us at the email above.
      </p>

      <h2>2. Scope of this policy</h2>
      <p>This policy covers personal data we process in connection with:</p>
      <ul>
        <li>The Dana House website and marketing pages;</li>
        <li>Account registration and management;</li>
        <li>Customer support and communications;</li>
        <li>Provision of the Service (including the dataset, API, and exports);</li>
        <li>Billing and payment processing.</li>
      </ul>
      <p>
        The Service makes available data about UK registered charities. That data is sourced from
        public registers maintained by the UK charity regulators and primarily concerns charitable
        organisations rather than individuals. Where it includes information about individuals (for
        example, named trustees as published on the public register), section 8 of this policy
        explains our basis and approach.
      </p>

      <h2>3. Personal data we collect</h2>
      <p>We collect and process the following categories of personal data:</p>
      <p>
        <strong>Account and contact data</strong>
        <br />
        Name, email address, job title, organisation, and similar information you provide when
        registering, contacting us, or corresponding with our team.
      </p>
      <p>
        <strong>Billing data</strong>
        <br />
        Billing name, billing address, VAT number where applicable, and a token reference to your
        payment method. Full card details are collected and processed directly by our payment
        processor (Stripe) and are not stored on our systems.
      </p>
      <p>
        <strong>Usage data</strong>
        <br />
        Information about how you use the Service, including API requests made, endpoints accessed,
        response volumes, IP addresses, user agent strings, login timestamps, and similar technical
        data.
      </p>
      <p>
        <strong>Cookies and similar technologies</strong>
        <br />
        We use a limited set of cookies and similar technologies on our website and application for
        authentication, security, and basic functionality. See section 11 for details.
      </p>
      <p>
        <strong>Communications</strong>
        <br />
        Records of correspondence between you and us, including support tickets and emails.
      </p>
      <p>
        <strong>Marketing data</strong> (where applicable)
        <br />
        If you sign up to a mailing list or content download, the email address and preferences you
        provide. You can unsubscribe at any time.
      </p>

      <h2>4. How we collect personal data</h2>
      <p>We collect personal data:</p>
      <ul>
        <li>
          <strong>Directly from you</strong> when you register, purchase a subscription, contact
          support, or interact with our website;
        </li>
        <li>
          <strong>Automatically</strong> when you use the Service, via standard server logs;
        </li>
        <li>
          <strong>From third parties</strong>, where you sign in or are introduced through a partner
          or referrer (limited scenarios; we will tell you if this applies).
        </li>
      </ul>

      <h2>5. Why we process personal data and our lawful bases</h2>
      <p>We process personal data for the following purposes:</p>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Lawful basis under UK GDPR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Providing and operating the Service under your subscription</td>
            <td>Performance of a contract</td>
          </tr>
          <tr>
            <td>Billing, invoicing, and collecting payment</td>
            <td>Performance of a contract; legal obligation</td>
          </tr>
          <tr>
            <td>Authentication and securing accounts</td>
            <td>Legitimate interests (account security and fraud prevention)</td>
          </tr>
          <tr>
            <td>Customer support and communication</td>
            <td>Performance of a contract; legitimate interests</td>
          </tr>
          <tr>
            <td>Service improvement, debugging, and analytics</td>
            <td>Legitimate interests (running and improving the Service)</td>
          </tr>
          <tr>
            <td>Direct marketing to existing customers about similar products</td>
            <td>Legitimate interests (subject to your right to object)</td>
          </tr>
          <tr>
            <td>Direct marketing to prospects who have opted in</td>
            <td>Consent</td>
          </tr>
          <tr>
            <td>Complying with legal, regulatory, and accounting obligations</td>
            <td>Legal obligation</td>
          </tr>
          <tr>
            <td>Establishing, exercising, or defending legal claims</td>
            <td>Legitimate interests</td>
          </tr>
        </tbody>
      </table>
      <p>
        Where we rely on legitimate interests, we have carried out a balancing assessment and
        consider that our interests are not overridden by your rights and freedoms. You can ask us
        for further detail at any time.
      </p>

      <h2>6. Who we share personal data with</h2>
      <p>We share personal data only with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> acting as our data processors, including our hosting
          provider, database provider, email provider, and payment processor. These providers
          process personal data on our behalf under written contracts and only as instructed by us;
        </li>
        <li>
          <strong>Professional advisors</strong> such as accountants and lawyers, where reasonably
          necessary;
        </li>
        <li>
          <strong>Regulators and authorities</strong>, where required by law or to protect our
          rights;
        </li>
        <li>
          <strong>Successors in interest</strong>, in the event of a merger, acquisition, or sale
          of assets.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> sell personal data, and we do not share it with third parties for
        their own marketing purposes.
      </p>
      <p>Key processors we currently use include:</p>
      <ul>
        <li>
          <strong>Stripe, Inc.</strong> — payment processing (
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            stripe.com/privacy
          </a>
          )
        </li>
        <li>
          <strong>Resend</strong> — transactional email (
          <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer">
            resend.com/privacy
          </a>
          )
        </li>
        <li>
          <strong>Neon</strong> — managed PostgreSQL database hosting (
          <a href="https://neon.tech/privacy-policy" target="_blank" rel="noopener noreferrer">
            neon.tech/privacy-policy
          </a>
          )
        </li>
        <li>
          <strong>Vercel, Inc.</strong> — application hosting (
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com/legal/privacy-policy
          </a>
          )
        </li>
      </ul>
      <p>The current list of sub-processors is available on request.</p>

      <h2>7. International transfers</h2>
      <p>
        Some of our service providers are based outside the United Kingdom, including in the United
        States and the European Economic Area. Where we transfer personal data outside the UK, we
        ensure an appropriate safeguard is in place, typically:
      </p>
      <ul>
        <li>A finding of adequacy in respect of the recipient country;</li>
        <li>
          The UK International Data Transfer Agreement or the UK Addendum to the EU Standard
          Contractual Clauses; or
        </li>
        <li>Another lawful transfer mechanism recognised under UK data protection law.</li>
      </ul>
      <p>
        You may request further information about the safeguards in place for a particular transfer
        by contacting us.
      </p>

      <h2>8. Data published by charity regulators</h2>
      <p>
        The Dana House dataset is built from public registers maintained by the Charity Commission
        for England and Wales, the Office of the Scottish Charity Regulator, and the Charity
        Commission for Northern Ireland. The registers concern charitable organisations.
      </p>
      <p>
        Some fields published by the regulators may include the names of individuals, principally
        trustees and named contacts. Where such personal data is processed in the Service, we do so
        as controller, on the basis of our legitimate interests in providing a sector intelligence
        service that supports philanthropy, research, and accountability in the charitable sector.
        We rely on the fact that the regulators publish this information in furtherance of public
        transparency requirements.
      </p>
      <p>
        Individuals whose details appear on the public registers and who wish to exercise rights in
        respect of that data may contact us using the details in section 1. We will respond in
        accordance with section 9.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Under UK GDPR you have the following rights in respect of your personal data:
      </p>
      <ul>
        <li>
          <strong>Access</strong> — to obtain a copy of the personal data we hold about you;
        </li>
        <li>
          <strong>Rectification</strong> — to have inaccurate personal data corrected;
        </li>
        <li>
          <strong>Erasure</strong> — to have personal data deleted in certain circumstances;
        </li>
        <li>
          <strong>Restriction</strong> — to restrict our processing in certain circumstances;
        </li>
        <li>
          <strong>Portability</strong> — to receive a copy of certain personal data in a portable
          format;
        </li>
        <li>
          <strong>Objection</strong> — to object to our processing based on legitimate interests,
          including direct marketing;
        </li>
        <li>
          <strong>Withdraw consent</strong> — where processing is based on consent, you can
          withdraw it at any time.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a>. We will respond
        within one month, or tell you if we need longer.
      </p>
      <p>
        You also have the right to complain to the Information Commissioner's Office ("ICO"), the
        UK supervisory authority for data protection:{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>10. Data retention</h2>
      <p>
        We retain personal data only for as long as necessary for the purposes set out in this
        policy:
      </p>
      <ul>
        <li>
          <strong>Account and customer data</strong> — for the duration of your subscription and
          for up to 6 years after termination, to meet legal, accounting, and contractual
          obligations;
        </li>
        <li>
          <strong>Billing and transaction records</strong> — for at least 6 years, as required by
          UK tax and accounting law;
        </li>
        <li>
          <strong>Support communications</strong> — for up to 3 years after the issue is resolved;
        </li>
        <li>
          <strong>Usage and log data</strong> — typically for up to 12 months, except where
          retained longer for security or legal reasons;
        </li>
        <li>
          <strong>Marketing data</strong> — until you unsubscribe or otherwise withdraw consent,
          plus a short suppression list retention to honour your preference.
        </li>
      </ul>
      <p>
        We may retain personal data longer where required by law or where reasonably necessary to
        establish, exercise, or defend legal claims.
      </p>

      <h2>11. Cookies and similar technologies</h2>
      <p>We use a small number of cookies on our website and application:</p>
      <ul>
        <li>
          <strong>Strictly necessary cookies</strong> for authentication, security, and core
          functionality (no consent required);
        </li>
        <li>
          <strong>Preference cookies</strong> to remember your settings.
        </li>
      </ul>
      <p>
        We do not use third-party advertising cookies or behavioural tracking. You can control
        cookies through your browser settings.
      </p>

      <h2>12. Security</h2>
      <p>
        We take appropriate technical and organisational measures to protect personal data against
        unauthorised access, alteration, disclosure, or destruction. These include encryption in
        transit, access controls, audit logging, supplier due diligence, and regular review of our
        practices.
      </p>
      <p>
        No method of transmission or storage is completely secure, however. If you believe your
        account or our systems have been compromised, contact us immediately at{" "}
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a>.
      </p>

      <h2>13. Children</h2>
      <p>
        The Service is not intended for, directed at, or used by individuals under 18. We do not
        knowingly collect personal data from anyone under 18.
      </p>

      <h2>14. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The "last updated" date at the top will
        reflect the most recent change. Where changes are material, we will notify registered
        customers by email and/or via the Service.
      </p>

      <h2>15. Contact</h2>
      <p>
        If you have any questions, requests, or complaints about this policy or our handling of
        personal data, please contact:
      </p>
      <p>
        <strong>Dana House Limited</strong>
        <br />
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a>
        <br />
        24 Crane Avenue, Isleworth, TW7 7JL, United Kingdom
      </p>

      <hr />
      <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>
        Dana House Limited · Registered in England and Wales · Company no. 17222717
      </p>
    </LegalLayout>
  );
}
