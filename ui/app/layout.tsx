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
        <script
          async
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        ></script>
        <Toaster position="top-right" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
