import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Incepta
          </Link>
          <Link href="/#waitlist">
            <Button className="shadow-md">Join Waitlist</Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <article className="border-2 border-border bg-background p-8 shadow-lg md:p-12">
          <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
          <p className="mb-12 border-b-2 border-border pb-8 text-muted-foreground">
            Last updated: February 1, 2025
          </p>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              1. Service Description
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta is a web-based platform operated by Tunely that helps college
              students prepare for exams by analyzing uploaded lecture materials
              (PDFs) and generating compressed study notes and practice questions.
              These terms define the rights and obligations regarding service usage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              2. Service Usage
            </h2>

            <h3 className="mb-2 mt-6 text-xl font-bold">2.1 Account</h3>
            <p className="mb-4 text-muted-foreground">
              An account is required to use the service. Users are responsible for
              maintaining the accuracy and security of their account information.
              You must be at least 18 years old or have parental consent to use
              this service.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">2.2 Usage Restrictions</h3>
            <p className="mb-2 text-muted-foreground">
              The following actions are prohibited:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Uploading copyrighted materials you do not have rights to use</li>
              <li>
                Using the service for academic dishonesty or violating your
                institution&apos;s academic integrity policies
              </li>
              <li>Sharing your account credentials with others</li>
              <li>Attempting to reverse engineer or copy the service</li>
              <li>Using automated systems to access the service</li>
              <li>Uploading malicious files or attempting to compromise the system</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              3. Payments and Pricing
            </h2>

            <h3 className="mb-2 mt-6 text-xl font-bold">3.1 Pricing Structure</h3>
            <p className="mb-2 text-muted-foreground">
              Incepta offers three subscription tiers:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Free ($0):</strong> 2 PDF
                uploads, 2 exam compressions, key concepts view only
              </li>
              <li>
                <strong className="text-foreground">Pro ($4.99/month):</strong>{" "}
                Unlimited uploads and compressions, AI practice questions, 1-page
                cheat sheet, 24-hour focus mode
              </li>
              <li>
                <strong className="text-foreground">Pro+ Finals Pass ($9.99/month):</strong>{" "}
                Everything in Pro plus priority processing, 3-level difficulty
                questions, multi-subject summaries, downloadable PDF notes,
                unlimited focus mode
              </li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              Paid subscriptions are billed monthly and automatically renew until
              cancelled.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">3.2 Payment Processing</h3>
            <p className="mb-4 text-muted-foreground">
              All payments are processed through Paddle.com. Paddle is the Merchant
              of Record and manages all payment transactions, invoicing, and
              applicable taxes.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">
              3.3 Consumer Right to Cancel
            </h3>
            <p className="mb-4 text-muted-foreground">
              As a consumer, you have the right to cancel your purchase within 14
              days without giving any reason. The cancellation period expires 14
              days from the day after the transaction is completed.
            </p>
            <p className="mb-4 text-muted-foreground">
              To cancel, contact Paddle (our Merchant of Record) or our support
              team at{" "}
              <a
                href="mailto:takeallusername@gmail.com"
                className="text-primary underline"
              >
                takeallusername@gmail.com
              </a>
              . We will process your cancellation request promptly.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">
              3.4 Refund Policy
            </h3>
            <p className="mb-4 text-muted-foreground">
              All refund requests are processed by Paddle in accordance with
              Paddle&apos;s refund policy. If you cancel within the 14-day period, we
              will reimburse all payments received from you without undue delay,
              and no later than 14 days after we are informed of your decision to
              cancel. Refunds will be made using the same payment method used for
              the original transaction, and you will not incur any fees.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">
              3.5 Subscription Cancellation
            </h3>
            <p className="mb-4 text-muted-foreground">
              You may cancel your subscription at any time. To cancel, visit your
              account settings or contact support at least 48 hours before your
              next billing date. Your subscription will remain active until the
              end of the current billing period, and you will not be charged for
              subsequent periods after cancellation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              4. Intellectual Property
            </h2>

            <h3 className="mb-2 mt-6 text-xl font-bold">4.1 Your Content</h3>
            <p className="mb-4 text-muted-foreground">
              You retain ownership of any materials you upload to Incepta. By
              uploading content, you grant Incepta a limited license to process
              your materials solely for the purpose of providing the service.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">4.2 Generated Content</h3>
            <p className="mb-4 text-muted-foreground">
              Study materials and practice questions generated by Incepta are
              provided for your personal educational use. You may not redistribute,
              sell, or commercially exploit generated content.
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">4.3 Service</h3>
            <p className="mb-4 text-muted-foreground">
              The Incepta platform itself, including its interfaces, algorithms,
              logos, and branding, are owned by Incepta and protected by
              intellectual property laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              5. Disclaimer
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta is provided &quot;as is&quot; without warranty of merchantability or
              fitness for a particular purpose. While we strive to provide accurate
              and helpful study materials, we do not guarantee:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Specific exam scores or academic outcomes</li>
              <li>
                That generated materials will cover all topics on your actual exam
              </li>
              <li>100% accuracy of AI-generated content</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              Users bear final responsibility for their academic performance and
              should use Incepta as a supplementary study tool, not as their sole
              study resource.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              6. Academic Integrity
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta is designed to help you study more efficiently, not to
              facilitate cheating. Users are responsible for:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                Following their institution&apos;s academic integrity policies
              </li>
              <li>Using generated materials ethically and responsibly</li>
              <li>
                Not using Incepta during exams unless explicitly permitted
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              7. Data and Privacy
            </h2>
            <p className="mb-4 text-muted-foreground">
              Your uploaded materials are encrypted and processed securely. We do
              not share your content with third parties. By default, your uploaded
              files are deleted after processing unless you choose to save them.
              For detailed information on personal data processing, please refer to
              our separate{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              8. Service Changes and Termination
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta may modify or terminate the service after prior notice.
              Significant changes will be announced at least 7 days in advance.
              Upon service termination, users will be given sufficient time to
              access and export their generated study materials.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              9. Limitation of Liability
            </h2>
            <p className="mb-4 text-muted-foreground">
              To the maximum extent permitted by law, Incepta shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, data, or
              academic standing, resulting from your use of the service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              10. Changes to Terms
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta may modify these terms as necessary, with at least 7 days&apos;
              advance notice. If you do not agree to the revised terms, you may
              discontinue service usage. Continued use of the service after changes
              take effect constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="mb-4 text-muted-foreground">
              These terms shall be interpreted in accordance with the laws of the
              State of Delaware, United States. Any disputes arising from these
              terms or the service shall be subject to the exclusive jurisdiction
              of the courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              12. Contact
            </h2>
            <p className="text-muted-foreground">
              Incepta is operated by Tunely. For inquiries regarding these terms,
              please contact:
            </p>
            <p className="mt-2 text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:takeallusername@gmail.com"
                className="text-primary underline"
              >
                takeallusername@gmail.com
              </a>
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-muted px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tunely. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
