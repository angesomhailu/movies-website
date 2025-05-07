"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import UserButton from "@/components/user-button";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        Please sign in to view your profile.
      </div>
    );
  }

  const user = session.user;

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
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Welcome, {user?.name}!</h2>

          <div className="flex flex-col items-center gap-6">
            {/* Avatar */}
            <div className="rounded-full overflow-hidden w-32 h-32 shadow">
              <Image
                src={user?.image || "/assets/images/logo.svg"}
                alt="User Avatar"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>

            {/* User Info */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{user?.name}</h3>
              <p className="text-gray-600">{user?.email}</p>
            </div>

            {/* Profile Actions */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <a
                href="/component/setting"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Edit Profile
              </a>
              
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Recent Activity</h3>
            <ul className="space-y-4">
              <li className="p-4 border rounded-md shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold">Watched:</span> Inception
                </p>
                <p className="text-sm text-gray-500">Date: 2025-05-01</p>
              </li>
              <li className="p-4 border rounded-md shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold">Added to Favorites:</span> The Dark Knight
                </p>
                <p className="text-sm text-gray-500">Date: 2025-04-28</p>
              </li>
              <li className="p-4 border rounded-md shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold">Reviewed:</span> Interstellar
                </p>
                <p className="text-sm text-gray-500">Date: 2025-04-25</p>
              </li>
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