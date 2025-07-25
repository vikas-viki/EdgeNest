import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
