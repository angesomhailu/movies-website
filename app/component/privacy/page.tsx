
import UserButton from "@/components/user-button";
export default function PrivacyPolicy() {
  return (
    <>
    <header className="bg-gray-100 shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <UserButton />
          
        </div>
      </header>
    <div className="min-h-screen bg-white text-gray-800">
      

      <div className="max-w-4xl mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Privacy Policy</h1>
        <p className="mb-6">
          We are committed to protecting your privacy. This policy explains how we collect, use, and protect your information.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">🔐 Data Collection</h2>
            <p>
              We collect personal data like your name, email, and usage behavior to provide better streaming services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🛡️ Data Usage</h2>
            <p>
              Your data is used only for account management, recommendations, and secure payments. We never sell your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">👥 Third-Party Services</h2>
            <p>
              We use trusted providers like Stripe, Chapa, and Auth for secure transactions and authentication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">📬 Contact</h2>
            <p>
              If you have any privacy concerns, contact us at: <span className="text-blue-600">privacy@angestrom.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
