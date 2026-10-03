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
  title: "Deni Hidayat | Principal Software Engineer & AI Engineer",
  description:
    "Portfolio and Curriculum Vitae of Deni Hidayat — Principal Software Engineer & AI Engineer specializing in enterprise web systems, LLM integrations, autonomous AI agents, and cloud architectures.",
  keywords: [
    "Deni Hidayat",
    "Principal Software Engineer",
    "AI Engineer",
    "AI Engineering",
    "Software Engineer",
    "Web Developer",
    "Laravel",
    "React",
    "Next.js",
    "Autonomous Agents",
    "Portfolio",
    "Resume",
  ],
  authors: [{ name: "Deni Hidayat" }],
  openGraph: {
    title: "Deni Hidayat — Principal Software Engineer & AI Engineer",
    description:
      "Curriculum Vitae & 22+ Enterprise Web, AI & Mobile Systems by Deni Hidayat.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/profile.jpg", type: "image/jpeg" },
      { url: "/profile.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    shortcut: "/profile.jpg",
    apple: [
      { url: "/profile.jpg", sizes: "180x180", type: "image/jpeg" },
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
        <link rel="icon" href="/profile.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/profile.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
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
