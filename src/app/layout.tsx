import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deni Hidayat | Software Engineer & Portfolio",
  description:
    "Portfolio and Curriculum Vitae of Deni Hidayat — Senior Software Engineer specializing in full-stack web architectures (Laravel, React, Livewire), hybrid mobile solutions, and enterprise information systems.",
  keywords: [
    "Deni Hidayat",
    "Software Engineer",
    "Web Developer",
    "Android Developer",
    "Laravel",
    "React",
    "Ionic",
    "Portfolio",
    "Resume",
    "Bandung",
    "Tasikmalaya",
  ],
  authors: [{ name: "Deni Hidayat" }],
  openGraph: {
    title: "Deni Hidayat — Software Engineer Portfolio",
    description:
      "Curriculum Vitae & 22+ Enterprise Web & Mobile Systems by Deni Hidayat.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
