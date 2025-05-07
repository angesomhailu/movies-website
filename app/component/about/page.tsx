"use client";
import UserButton from "@/components/user-button";

export default function AboutPage() {
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
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-8 text-center">
            Welcome to <span className="font-semibold">MovieStream</span>, your ultimate destination for streaming the latest and greatest movies from around the world.
          </p>

          <div className="space-y-6">
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Our Mission</h3>
              <p className="text-gray-700">
                At MovieStream, our mission is to bring the magic of cinema to your fingertips. We aim to provide a seamless and enjoyable streaming experience for movie enthusiasts everywhere.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Our Vision</h3>
              <p className="text-gray-700">
                We envision a world where everyone has access to high-quality entertainment, no matter where they are. Our platform is designed to make that vision a reality.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Extensive library of movies and TV shows.</li>
                <li>High-quality streaming in HD and 4K.</li>
                <li>Affordable subscription plans.</li>
                <li>Personalized recommendations tailored to your taste.</li>
                <li>Multi-device support for seamless viewing.</li>
              </ul>
            </div>
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