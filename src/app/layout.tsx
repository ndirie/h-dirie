import type { Metadata } from "next";
import { Judson } from "next/font/google";
import "./globals.css";
import ClientLayout from "./layout-client";
import { ThemeRegistry } from "@/providers/ThemeProvider";

const roboto = Judson({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'H-Dirie | Web & Mobile Developer',
  description: 'Portfolio of H-Dirie, Full Stack Developer specializing in React, Next.js, Android, and more',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <ThemeRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
