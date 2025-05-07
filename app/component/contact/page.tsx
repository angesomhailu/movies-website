"use client";
import UserButton from "@/components/user-button";

export default function ContactPage() {
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
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Get in Touch</h2>
          <p className="text-center text-lg mb-12">
            Got a question, suggestion, or feedback? We’d love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">📧 Email</h3>
                <p className="text-gray-700">support@moviestream.com</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">🌐 Social Media</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://twitter.com/moviestream"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com/moviestream"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/moviestream"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">📍 Location</h3>
                <p className="text-gray-700">Mekelle, Tigray, Ethiopia</p>
              </div>
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
            <a href="/component/about" className="text-gray-600 hover:text-blue-600">
              About us
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