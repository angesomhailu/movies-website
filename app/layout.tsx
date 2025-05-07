import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import Provider from "@/components/Provider";
export const metadata: Metadata = {
  title: "Angestrom",
  description: "Generated the website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Toaster />
          {children}
        </Provider>
      </body>
    </html>
  );
}
