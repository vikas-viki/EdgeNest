import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";


export const metadata: Metadata = {
  title: "EdgeNest",
  description: "Deploy your website in seconds.",
  icons: "/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
