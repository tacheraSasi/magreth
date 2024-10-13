import { Metadata } from "next";
import { Toaster } from "sonner";

import { Navbar } from "@/components/custom/navbar";
import { ThemeProvider } from "@/components/custom/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://magreth.ekilie.com/"),
  title: "Magreth - Your Friendly AI Therapist for Mental Wellness",
  description:
    "Meet Magreth, your AI therapist! Experience friendly conversations that help you explore your emotions, boost your mood, and enhance your mental well-being. Discover a unique blend of empathy and support powered by cutting-edge AI technology.",
  keywords: [
    "AI therapist",
    "mental wellness",
    "emotional support",
    "AI chatbot",
    "mental health",
    "self-improvement",
    "therapy",
    "Magreth",
    "ekilie",
    "Magreth ai",
    "ekilie ai",
  ],
  openGraph: {
    title: "Magreth - Your Friendly AI Therapist And Friend",
    description:
      "Meet Magreth, your AI therapist! Experience friendly conversations that help you explore your emotions, boost your mood, and enhance your mental well-being. Discover a unique blend of empathy and support powered by cutting-edge AI technology.",
    url: "https://magreth.ekilie.com/",
    siteName: "Magreth",
    type: "website",
    images: [
      {
        url: "/images/magreth.png", 
        width: 800,
        height: 600,
        alt: "Magreth - Your Friendly AI Therapist",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00000080" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
