import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Dana House",
  description: "Terms of Service for Dana House Limited.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" effectiveDate="16 May 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of the Dana House platform,
        dataset, and related services (the "Service") provided by Dana House Limited.
      </p>
      <p>
        By creating an account, purchasing a subscription, or otherwise accessing or using the
        Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>1. About us</h2>
      <p>
        The Service is operated by <strong>Dana House Limited</strong>, a company incorporated in
        England and Wales (company number 17222717) with its registered office at 24 Crane Avenue,
        Isleworth, TW7 7JL, United Kingdom ("Dana House", "we", "us", "our").
      </p>
      <p>
        You can contact us at{" "}
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a>.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>"Customer"</strong>, <strong>"you"</strong>, <strong>"your"</strong>: the business
          entity that has entered into these Terms by registering an account or purchasing a
          subscription.
        </li>
        <li>
          <strong>"Service"</strong>: the Dana House data intelligence platform, including the
          website, web application, REST API, bulk data exports, and any associated documentation or
          support.
        </li>
        <li>
          <strong>"Subscription"</strong>: a paid plan granting access to the Service for a
          specified term.
        </li>
        <li>
          <strong>"Data"</strong>: the structured records, intelligence layers, classifications,
          scores, and other content made available through the Service.
        </li>
        <li>
          <strong>"Underlying Register Data"</strong>: charity registration data published by the
          Charity Commission for England and Wales, the Office of the Scottish Charity Regulator,
          and the Charity Commission for Northern Ireland.
        </li>
      </ul>

      <h2>3. Eligibility and account</h2>
      <p>
        The Service is provided exclusively to businesses, charities, public bodies, and other
        organisations acting in the course of their trade, business, profession, or institutional
        activity. It is <strong>not</strong> offered to consumers, and rights or remedies available
        to consumers under English law do not apply to your use of the Service.
      </p>
      <p>By creating an account you confirm that:</p>
      <ul>
        <li>You are at least 18 years old;</li>
        <li>You have authority to bind the organisation on whose behalf you are contracting;</li>
        <li>The information you provide is accurate, current, and complete;</li>
        <li>You will keep your account credentials and API keys confidential.</li>
      </ul>
      <p>
        You are responsible for all activity that occurs under your account and API keys. You must
        notify us promptly at{" "}
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a> if you suspect any
        unauthorised access.
      </p>

      <h2>4. The Service</h2>
      <p>
        We grant you a non-exclusive, non-transferable, non-sublicensable, revocable right to
        access and use the Service and the Data during your active Subscription, solely for your
        internal business purposes and in accordance with these Terms and the limits of your chosen
        plan.
      </p>
      <p>
        We may make changes, improvements, or modifications to the Service at any time. We will
        give reasonable notice of any material reduction in functionality.
      </p>

      <h2>5. Subscriptions, plans, and limits</h2>
      <p>
        The Service is offered on subscription plans. The features, usage limits (including but not
        limited to API request volumes, data fields, and export rights), price, and billing cycle of
        each plan are set out at the point of purchase and in your account dashboard.
      </p>
      <p>
        Exceeding plan limits may result in throttling, additional charges (where notified to you
        in advance), or, where the excess is sustained or material, suspension of access pending
        plan upgrade.
      </p>
      <p>
        You may upgrade or downgrade your plan at any time via the customer portal. Upgrades take
        effect immediately with prorated billing. Downgrades take effect at the start of your next
        billing period.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You must not, and must not permit any third party to:</p>
      <ul>
        <li>
          Resell, redistribute, sublicense, lease, or otherwise commercially exploit the Data or
          Service except as expressly permitted by your plan;
        </li>
        <li>
          Use the Service to build, train, or improve any product or service that competes with the
          Service;
        </li>
        <li>
          Scrape, crawl, or extract Data using methods other than the API or export tools provided,
          or in volumes exceeding your plan limits;
        </li>
        <li>
          Share, publish, or transmit API keys or credentials, or allow account access by any party
          other than the Customer's authorised personnel;
        </li>
        <li>
          Use the Service to make decisions about individuals in ways that produce legal or
          similarly significant effects on them without appropriate safeguards required by law;
        </li>
        <li>
          Use the Service in any manner that is unlawful, fraudulent, defamatory, or that infringes
          the rights of any third party;
        </li>
        <li>
          Interfere with, disrupt, or attempt to gain unauthorised access to the Service, our
          infrastructure, or any related systems or networks;
        </li>
        <li>
          Reverse engineer, decompile, or disassemble any part of the Service, except to the extent
          such restriction is prohibited by applicable law.
        </li>
      </ul>
      <p>
        We may suspend or terminate accounts that breach this section, with or without notice
        depending on the severity of the breach.
      </p>

      <h2>7. Intellectual property</h2>
      <h3>Our rights</h3>
      <p>
        The Service, including its software, design, intelligence layers, classifications, scoring
        methodologies, derived analytics, documentation, and brand, is owned by Dana House Limited
        or its licensors and is protected by intellectual property laws. Nothing in these Terms
        transfers ownership of any of the foregoing to you.
      </p>
      <p>
        The Underlying Register Data is published by the UK charity regulators under their
        respective open licences. Our database rights, copyright, and other rights subsist in our
        compilation, enrichment, intelligence layers, and presentation of that data.
      </p>
      <h3>Your rights</h3>
      <p>Subject to these Terms and payment of applicable fees, you may use the Data:</p>
      <ul>
        <li>
          Internally within your organisation for analysis, research, due diligence, decision
          support, and similar business purposes;
        </li>
        <li>
          To create reports, briefings, or analyses that may be shared with named third parties
          (such as clients or grantees), provided the Data is not the principal subject of
          redistribution and is not made available in a form substantially equivalent to the
          Service;
        </li>
        <li>As otherwise expressly permitted by your plan or a written agreement with us.</li>
      </ul>
      <p>
        Any redistribution, publication, or commercial use of the Data beyond the scope set out
        above requires our prior written consent.
      </p>
      <h3>Feedback</h3>
      <p>
        If you provide us with feedback, suggestions, or ideas about the Service, you grant us a
        perpetual, irrevocable, royalty-free, worldwide licence to use them without restriction or
        compensation.
      </p>

      <h2>8. Fees, billing, and taxes</h2>
      <p>
        Fees are payable in advance for each billing period (monthly or annual, as selected). All
        fees are stated exclusive of VAT or other applicable taxes, which will be added where
        required.
      </p>
      <p>
        Payment is processed by our payment provider (currently Stripe). By providing payment
        details, you authorise us to charge the applicable fees automatically on each renewal date
        until the Subscription is cancelled in accordance with these Terms.
      </p>
      <p>
        If a payment fails, we may retry the charge, suspend access, or terminate the Subscription
        in accordance with our published retry and dunning schedule.
      </p>
      <p>
        We may change our fees from time to time. Any price change will take effect from your next
        renewal and will be communicated to you with at least 30 days' notice.
      </p>

      <h2>9. Term, cancellation, and termination</h2>
      <p>
        Subscriptions renew automatically at the end of each billing period for a further period of
        the same length, unless cancelled in accordance with this section.
      </p>
      <p>
        You may cancel your Subscription at any time via the customer portal or by emailing{" "}
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a>. Cancellation takes
        effect at the end of the current billing period; access continues until that date.
      </p>
      <p>We may suspend or terminate your access immediately if:</p>
      <ul>
        <li>
          You materially breach these Terms and (where the breach is capable of remedy) fail to
          remedy it within 14 days of written notice;
        </li>
        <li>
          You become insolvent, enter administration or liquidation, or are otherwise unable to pay
          your debts as they fall due;
        </li>
        <li>We are required to do so by law or by a competent authority.</li>
      </ul>
      <p>
        On termination, your right to access the Service ceases and we may delete your account data
        in accordance with our data retention practices. Provisions that by their nature should
        survive termination (including sections 7, 10, 11, 12, 14, and 15) will do so.
      </p>
      <p>
        Our refund and cancellation practices are set out in our{" "}
        <Link href="/refunds">Refund and Cancellation Policy</Link>, which forms part of these
        Terms.
      </p>

      <h2>10. Warranties and disclaimers</h2>
      <p>We will provide the Service with reasonable skill and care.</p>
      <p>Except as expressly stated in these Terms, and to the maximum extent permitted by law:</p>
      <ul>
        <li>
          The Service and Data are provided <strong>"as is"</strong> and{" "}
          <strong>"as available"</strong>, without warranties of any kind, whether express or
          implied, including warranties of merchantability, fitness for a particular purpose,
          accuracy, completeness, or non-infringement;
        </li>
        <li>
          We do not warrant that the Service will be uninterrupted, error-free, secure, or free
          from harmful components;
        </li>
        <li>
          We do not warrant the accuracy, completeness, or currency of the Underlying Register
          Data, which is sourced from third-party regulators and presented as published;
        </li>
        <li>
          You are responsible for verifying the Data before relying on it for any decision with
          legal, financial, or material consequence.
        </li>
      </ul>
      <p>
        Nothing in these Terms limits or excludes any liability that cannot be limited or excluded
        under English law.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>Subject to the paragraph immediately above:</p>
      <ul>
        <li>
          Neither party will be liable for any indirect, special, incidental, or consequential
          losses, including loss of profit, loss of revenue, loss of business, loss of anticipated
          savings, or loss of goodwill, whether arising in contract, tort (including negligence), or
          otherwise;
        </li>
        <li>
          Our total aggregate liability arising out of or in connection with these Terms in any
          12-month period will not exceed the fees paid by you to us in the 12 months immediately
          preceding the event giving rise to the claim.
        </li>
      </ul>
      <p>
        Nothing in these Terms limits liability for death or personal injury caused by negligence,
        for fraud or fraudulent misrepresentation, or for any other liability that cannot be limited
        under English law.
      </p>

      <h2>12. Data protection</h2>
      <p>
        We process personal data in accordance with our{" "}
        <Link href="/privacy">Privacy Policy</Link>, which forms part of these Terms.
      </p>
      <p>
        To the extent we process personal data on your behalf as your processor (for example, where
        you provide us with personal data of your contacts to enrich), the parties will enter into a
        separate data processing agreement on request. For the avoidance of doubt, the Data made
        available through the Service is sourced from public regulator publications, and our
        processing of that Data is undertaken in our capacity as controller.
      </p>

      <h2>13. Confidentiality</h2>
      <p>
        Each party may receive information from the other that is confidential. Each party agrees to
        keep such information confidential, to use it only for the purposes of these Terms, and to
        disclose it only to personnel and advisors who need to know it and are subject to
        confidentiality obligations.
      </p>
      <p>
        This section does not apply to information that is or becomes publicly known other than by
        breach, was already known to the receiving party, is independently developed, or is required
        to be disclosed by law.
      </p>

      <h2>14. Changes to these Terms</h2>
      <p>
        We may amend these Terms from time to time. Material changes will be notified to you by
        email and/or via the Service with at least 30 days' notice before they take effect.
        Continued use of the Service after the effective date constitutes acceptance of the revised
        Terms.
      </p>

      <h2>15. General</h2>
      <ul>
        <li>
          <strong>Entire agreement.</strong> These Terms, together with the Privacy Policy and
          Refund and Cancellation Policy, constitute the entire agreement between the parties in
          respect of the subject matter and supersede any prior agreements.
        </li>
        <li>
          <strong>No waiver.</strong> A failure or delay in exercising a right under these Terms
          does not constitute a waiver.
        </li>
        <li>
          <strong>Severability.</strong> If any provision is held unenforceable, the remaining
          provisions remain in full force.
        </li>
        <li>
          <strong>Assignment.</strong> You may not assign these Terms without our prior written
          consent. We may assign these Terms to a successor in connection with a merger, acquisition,
          or sale of assets.
        </li>
        <li>
          <strong>Force majeure.</strong> Neither party is liable for failure to perform caused by
          circumstances beyond reasonable control.
        </li>
        <li>
          <strong>Third party rights.</strong> A person who is not a party to these Terms has no
          right under the Contracts (Rights of Third Parties) Act 1999 to enforce them.
        </li>
        <li>
          <strong>Notices.</strong> Notices to us must be sent to{" "}
          <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a>. Notices to you will
          be sent to the email address registered to your account.
        </li>
      </ul>

      <h2>16. Governing law and jurisdiction</h2>
      <p>
        These Terms and any dispute arising out of or in connection with them are governed by the
        laws of England and Wales. The courts of England and Wales have exclusive jurisdiction,
        except that we may bring proceedings to enforce our intellectual property rights in any
        competent court.
      </p>

      <hr />
      <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>
        Dana House Limited · Registered in England and Wales · Company no. 17222717 · Registered
        office: 24 Crane Avenue, Isleworth, TW7 7JL, United Kingdom
      </p>
    </LegalLayout>
  );
}
