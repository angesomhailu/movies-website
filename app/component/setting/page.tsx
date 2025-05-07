"use client";

import UserButton from "@/components/user-button";

export default function SettingsPage() {
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
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Account Settings</h2>
          <p className="text-center text-lg mb-10">
            Update your personal information and preferences.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type="password"
                placeholder="Enter a new password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Leave blank to keep your current password.</p>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </form>
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