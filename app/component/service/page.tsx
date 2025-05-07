"use client";
import UserButton from "@/components/user-button";

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <UserButton />
        </div>
      </header>

      {/* Body */}
      <div className="min-h-screen bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">What We Offer</h2>
          <p className="text-center text-lg mb-12">
            Discover the features and services that make MovieStream your ultimate destination for movies and TV shows.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Unlimited Streaming</h3>
              <p className="text-gray-700">
                Enjoy unlimited access to thousands of movies and TV shows anytime, anywhere.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            {/* Service 2 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">High-Quality Content</h3>
              <p className="text-gray-700">
                Stream in HD and 4K quality for the best viewing experience.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            {/* Service 3 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Offline Downloads</h3>
              <p className="text-gray-700">
                Download your favorite movies and watch them offline at your convenience.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            {/* Service 4 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Personalized Recommendations</h3>
              <p className="text-gray-700">
                Get movie suggestions tailored to your preferences and watch history.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            {/* Service 5 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Multi-Device Support</h3>
              <p className="text-gray-700">
                Stream on your phone, tablet, laptop, or smart TV seamlessly.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            {/* Service 6 */}
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Affordable Plans</h3>
              <p className="text-gray-700">
                Choose from a variety of subscription plans that fit your budget.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-blue-600 mb-6">Why Choose MovieStream?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li>Access to an extensive library of movies and TV shows.</li>
              <li>Stream in HD and 4K quality for an immersive experience.</li>
              <li>Download content for offline viewing on the go.</li>
              <li>Personalized recommendations tailored to your taste.</li>
              <li>Stream seamlessly across multiple devices.</li>
              <li>Affordable subscription plans for every budget.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} MovieStream. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/component/about" className="text-gray-600 hover:text-blue-600">
              About Us
            </a>
            <a href="/component/privacy" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="/component/terms" className="text-gray-600 hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}