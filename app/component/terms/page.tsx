import UserButton from "@/components/user-button";

export default function TermsPage() {
  return (
    <>
    <UserButton/>
    <div className="max-w-4xl mx-auto px-6 py-5 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Terms & Conditions
      </h1>

      <p className="text-lg mb-8 text-center">
        These Terms & Conditions govern your use of MovieStream. By accessing or using our services, you agree to comply with these terms.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password. Any activity under your account is your responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Acceptable Use</h2>
          <p>
            Our platform must be used for lawful purposes only. Users are prohibited from engaging in behavior that disrupts service or violates content rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Subscription & Billing</h2>
          <p>
            MovieStream offers paid subscriptions. You agree to pay all applicable fees and understand that recurring billing applies unless canceled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Content Licensing</h2>
          <p>
            All movies and shows are licensed. You may not reproduce, distribute, or share content outside the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Cancellations & Refunds</h2>
          <p>
            You may cancel your subscription anytime. We do not offer partial refunds for unused periods after cancellation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate our terms, misuse the service, or engage in fraudulent activity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            MovieStream may update these terms periodically. Continued use of the service implies acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
          <p>
            For questions or legal inquiries, please contact us at:{" "}
            <a
              href="mailto:legal@moviestream.com"
              className="text-blue-600 hover:underline"
            >
              legal@angestrom.com
            </a>
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
