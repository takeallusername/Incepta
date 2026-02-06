import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
          <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
          <p className="mb-12 border-b-2 border-border pb-8 text-muted-foreground">
            Last updated: February 1, 2025
          </p>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              1. Personal Information We Collect
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta collects the following personal information:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Account information:</strong>{" "}
                Email address, name (optional)
              </li>
              <li>
                <strong className="text-foreground">Payment information:</strong>{" "}
                Payment method, billing address (processed through Paddle, our
                payment provider)
              </li>
              <li>
                <strong className="text-foreground">Usage information:</strong>{" "}
                Uploaded documents (temporarily), generated study materials, service
                usage history
              </li>
              <li>
                <strong className="text-foreground">Technical information:</strong>{" "}
                IP address, browser type, device information, access time
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              2. Purpose of Collection and Use
            </h2>
            <p className="mb-4 text-muted-foreground">
              We use your information for the following purposes:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Providing and operating the Incepta service</li>
              <li>Processing your uploaded materials to generate study content</li>
              <li>Member management and identity verification</li>
              <li>Payment processing and billing</li>
              <li>Customer support and inquiry handling</li>
              <li>Service improvement and statistical analysis</li>
              <li>Security monitoring and fraud prevention</li>
              <li>Marketing and promotions (only with your consent)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              3. Uploaded Content
            </h2>

            <h3 className="mb-2 mt-6 text-xl font-bold">3.1 How We Handle Your Files</h3>
            <p className="mb-4 text-muted-foreground">
              When you upload lecture materials to Incepta:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Files are encrypted during transmission and storage</li>
              <li>Content is processed by our AI to generate study materials</li>
              <li>
                By default, uploaded files are automatically deleted within 24
                hours after processing
              </li>
              <li>You may choose to save your materials for future access</li>
              <li>
                We do not review, share, or use your uploaded content for any
                purpose other than providing the service
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-xl font-bold">
              3.2 AI Processing
            </h3>
            <p className="mb-4 text-muted-foreground">
              Your uploaded materials are processed by AI models to extract key
              concepts and generate study content. This processing is done securely
              and your content is not used to train AI models or shared with third
              parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              4. Retention and Use Period
            </h2>
            <p className="mb-4 text-muted-foreground">
              Personal information is retained during the service usage period and
              destroyed without delay upon account deletion. However, certain
              information will be retained for legally mandated periods:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Records regarding contracts or subscription: 5 years</li>
              <li>Records regarding payment and supply of services: 5 years</li>
              <li>
                Records regarding consumer complaints or dispute resolution: 3
                years
              </li>
              <li>Website visit logs: 3 months</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              5. Disclosure to Third Parties
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta does not disclose user personal information to third parties
              in principle. Exceptions may include:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>User has given prior consent</li>
              <li>Disclosure is required by law or legal process</li>
              <li>
                Necessary to protect the rights, property, or safety of Incepta,
                our users, or the public
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-xl font-bold">5.1 Service Partners</h3>
            <p className="mb-2 text-muted-foreground">
              We work with the following service partners to provide functionality:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Paddle:</strong> Payment
                processing (Merchant of Record)
              </li>
              <li>
                <strong className="text-foreground">Cloud providers:</strong>{" "}
                Secure hosting and data storage
              </li>
              <li>
                <strong className="text-foreground">Analytics services:</strong>{" "}
                Anonymous usage analytics
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              6. Data Security
            </h2>
            <p className="mb-4 text-muted-foreground">
              We implement comprehensive security measures to protect your data:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Encrypted password storage using industry-standard hashing</li>
              <li>Secure data transmission via HTTPS/TLS</li>
              <li>Encryption of uploaded files at rest</li>
              <li>Access control management and logging</li>
              <li>Regular security audits and updates</li>
              <li>Secure cloud infrastructure with SOC 2 compliance</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              7. Destruction of Personal Information
            </h2>
            <p className="mb-4 text-muted-foreground">
              Personal information is destroyed without delay when the collection
              and use purpose is achieved or the retention period expires.
              Electronic files are deleted in an unrecoverable manner using secure
              deletion methods.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              8. User Rights
            </h2>
            <p className="mb-2 text-muted-foreground">
              You may exercise the following rights at any time:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Request to view your personal information</li>
              <li>Request to correct or update your personal information</li>
              <li>Request to delete your personal information</li>
              <li>Request to suspend personal information processing</li>
              <li>Export your data in a portable format</li>
              <li>Account deletion (membership withdrawal)</li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              These rights can be exercised directly in your account settings or by
              contacting our support team at{" "}
              <a
                href="mailto:privacy@incepta.app"
                className="text-primary underline"
              >
                privacy@incepta.app
              </a>
              .
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">
              8.1 California Residents (CCPA)
            </h3>
            <p className="mb-4 text-muted-foreground">
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA), including the right to
              know what personal information we collect, the right to delete your
              information, and the right to opt-out of the sale of your information
              (note: we do not sell personal information).
            </p>

            <h3 className="mb-2 mt-6 text-xl font-bold">
              8.2 EU/EEA Residents (GDPR)
            </h3>
            <p className="mb-4 text-muted-foreground">
              If you are located in the European Union or European Economic Area,
              you have additional rights under the General Data Protection
              Regulation (GDPR), including the right to data portability and the
              right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              9. Cookie Usage
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta uses cookies and similar technologies to provide and improve
              our services:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Essential cookies:</strong>{" "}
                Required for basic functionality like authentication
              </li>
              <li>
                <strong className="text-foreground">Preference cookies:</strong>{" "}
                Remember your settings and preferences
              </li>
              <li>
                <strong className="text-foreground">Analytics cookies:</strong>{" "}
                Help us understand how users interact with our service
              </li>
            </ul>
            <p className="mb-4 text-muted-foreground">
              You can control cookie preferences through your browser settings.
              Disabling essential cookies may affect service functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              10. Children&apos;s Privacy
            </h2>
            <p className="mb-4 text-muted-foreground">
              Incepta is intended for use by college students and adults. We do not
              knowingly collect personal information from children under 13. If we
              learn that we have collected information from a child under 13, we
              will delete it promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              11. International Data Transfers
            </h2>
            <p className="mb-4 text-muted-foreground">
              Your information may be transferred to and processed in countries
              other than your country of residence. We ensure appropriate
              safeguards are in place to protect your information in accordance
              with this privacy policy and applicable laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              12. Privacy Policy Changes
            </h2>
            <p className="mb-4 text-muted-foreground">
              This privacy policy may be revised according to changes in laws and
              services. Changes will be announced at least 7 days in advance, and
              significant changes 30 days in advance. We will notify you via email
              or through the service of any material changes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 border-b-2 border-primary pb-2 text-2xl font-bold">
              13. Contact
            </h2>
            <p className="mb-4 text-muted-foreground">
              For questions regarding personal information processing, please
              contact:
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Privacy Team</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@incepta.app"
                className="text-primary underline"
              >
                privacy@incepta.app
              </a>
            </p>
            <p className="mt-4 text-muted-foreground">
              For general inquiries:{" "}
              <a
                href="mailto:support@incepta.app"
                className="text-primary underline"
              >
                support@incepta.app
              </a>
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-muted px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Incepta. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
