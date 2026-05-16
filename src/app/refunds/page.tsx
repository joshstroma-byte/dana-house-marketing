import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Dana House",
  description: "Refund and Cancellation Policy for Dana House Limited.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Refund and Cancellation Policy" effectiveDate="16 May 2026">
      <p>
        This Refund and Cancellation Policy explains how subscriptions to Dana House can be
        cancelled and the circumstances in which refunds may be issued. It forms part of our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
      <p>
        The Service is provided to businesses, charities, public bodies, and other organisations in
        the course of their trade, business, profession, or institutional activity. Rights and
        remedies available to consumers under English law, including statutory cooling-off rights,
        do not apply.
      </p>

      <h2>1. Cancelling your subscription</h2>
      <p>You can cancel your Dana House subscription at any time through:</p>
      <ul>
        <li>The <strong>customer portal</strong> linked from your account dashboard; or</li>
        <li>
          An <strong>email to{" "}
          <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a></strong> from the
          email address registered on the account.
        </li>
      </ul>
      <p>
        Cancellation takes effect at the <strong>end of the current billing period</strong>. Your
        account will continue to have access until that date, and your subscription will not renew.
      </p>
      <p>
        You are responsible for cancelling before the next renewal date to avoid being charged for
        the following period.
      </p>

      <h2>2. Refunds</h2>
      <h3>Monthly subscriptions</h3>
      <p>
        Monthly subscriptions are billed in advance for each calendar month. When you cancel, you
        retain access for the remainder of the month already paid.{" "}
        <strong>We do not issue refunds for partial months or for unused access.</strong>
      </p>
      <h3>Annual subscriptions</h3>
      <p>
        Annual subscriptions are billed in advance for the full annual term and benefit from a
        discount relative to monthly billing. When you cancel an annual subscription, you retain
        access for the remainder of the annual term already paid.{" "}
        <strong>
          We do not issue pro-rata refunds for the unused portion of an annual term
        </strong>
        , save in the limited circumstances described below.
      </p>
      <h3>Exceptions: when we may issue a refund</h3>
      <p>
        We may, at our reasonable discretion, issue a partial or full refund where:
      </p>
      <ul>
        <li>
          <strong>Billing error.</strong> You were charged in error, charged more than once for the
          same period, or charged after a confirmed cancellation. We will correct the error and
          refund any incorrect charge.
        </li>
        <li>
          <strong>Sustained service failure.</strong> The Service has been materially unavailable or
          non-functional for an extended period due to a failure on our part, and we have been
          unable to resolve the issue within a reasonable time after you reported it.
        </li>
        <li>
          <strong>Material misrepresentation.</strong> A feature or capability that was a basis for
          your purchase is materially different from what was described, and we are unable to remedy
          the difference.
        </li>
        <li>
          <strong>Goodwill.</strong> Where we consider, in our sole discretion, that a refund is
          fair in the particular circumstances of the case.
        </li>
      </ul>
      <p>
        To request a refund under this section, contact{" "}
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a> with the details of
        your account, the nature of the issue, and any supporting information. We aim to respond
        within 5 working days.
      </p>

      <h2>3. Approved refunds: how they are processed</h2>
      <p>Where a refund is approved:</p>
      <ul>
        <li>It will be made to the original payment method used for the charge;</li>
        <li>It will be issued in pounds sterling (GBP), being the currency of the charge;</li>
        <li>
          It may take 5–10 working days to appear on your statement, depending on your bank or card
          issuer.
        </li>
      </ul>
      <p>
        We will not issue refunds in cash, by cheque, or by bank transfer except where the original
        payment method is no longer available and we agree an alternative.
      </p>

      <h2>4. Failed payments and suspension</h2>
      <p>
        If a renewal payment fails, we will attempt to charge the payment method again over a short
        retry period and notify you by email. If payment remains outstanding after the retry period,
        we may <strong>suspend access</strong> to the Service. If the issue is not resolved within
        14 days of the original failure, we may <strong>terminate the subscription</strong>.
      </p>
      <p>
        Suspension and termination for non-payment do not create a right to a refund of any fees
        already paid.
      </p>

      <h2>5. Downgrades</h2>
      <p>
        If you downgrade to a lower-priced plan during a billing period, the change takes effect at
        the start of your next billing period. We do not issue refunds for the difference in price
        between your previous and new plans for the period already paid.
      </p>

      <h2>6. Upgrades</h2>
      <p>
        If you upgrade to a higher-priced plan during a billing period, the upgrade takes effect
        immediately. Where supported, we will charge a prorated amount for the remainder of the
        current billing period at the new rate, and subsequent billing periods will be at the new
        rate.
      </p>

      <h2>7. Trials, pilots, and discounts</h2>
      <p>
        Where you have been offered a free trial, paid pilot, or discounted price, the specific
        terms of that offer (including duration, conversion to a paid plan, and any refund position)
        will be set out at the point of offer and prevail over this policy to the extent of any
        inconsistency.
      </p>

      <h2>8. Chargebacks</h2>
      <p>
        If you have a dispute about a charge, please contact us first at{" "}
        <a href="mailto:contact@danahouse.co.uk">contact@danahouse.co.uk</a> — most issues can be
        resolved quickly and directly. Raising a chargeback through your card issuer without first
        contacting us can cause your account to be suspended pending investigation, and may incur
        recovery costs that we are entitled to claim from you.
      </p>

      <h2>9. Bespoke or negotiated agreements</h2>
      <p>
        Where you have entered into a written order form, master agreement, or similar bespoke
        arrangement with Dana House Limited, the cancellation and refund terms of that agreement
        will apply to the extent of any inconsistency with this policy.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The "last updated" date will reflect the most
        recent change. Material changes will be communicated to registered customers by email and/or
        via the Service before they take effect.
      </p>

      <h2>11. Contact</h2>
      <p>For all cancellation, refund, and billing queries:</p>
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
