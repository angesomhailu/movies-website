"use client";

import Link from "next/link";
import Image from "next/image";
import UserButton from "@/components/user-button";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-gray-100 shadow-md">
        <SessionProvider>
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <UserButton />
          </nav>
        </SessionProvider>
      </header>

      {/* Main Content Section */}
      <main className="w-full flex-center flex-col py-10">
        <section className="text-center">
          <h1 className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
              Movies Powered Prompts
            </span>
          </h1>
          <p className="text-center desc text-gray-500">
            Angestrom is the paid online downloader website for downloading and
            sharing videos.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full bg-gray-100 py-8 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Angestrom. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="component/about" className="text-gray-600 hover:text-black">
              About us
            </Link>
            <Link href="component/service" className="text-gray-600 hover:text-black">
              Terms of Service
            </Link>
            <Link href="component/privacy" className="text-gray-600 hover:text-black">
              Privacy Policy
            </Link>
            <Link href="component/contact" className="text-gray-600 hover:text-black">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}