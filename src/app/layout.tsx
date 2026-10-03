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
  title: "Deni Hidayat, S.T., MOS | Software Engineer & Portofolio",
  description:
    "Portofolio dan Curriculum Vitae Deni Hidayat, S.T., MOS — Software Engineer dengan pengalaman pengembangan aplikasi Web Full Stack (Laravel, ReactJS, Livewire), Mobile Hybrid (Ionic), dan Sistem Enterprise.",
  keywords: [
    "Deni Hidayat",
    "Software Engineer",
    "Web Developer",
    "Android Developer",
    "Laravel",
    "React",
    "Ionic",
    "Portofolio",
    "Bandung",
    "Tasikmalaya",
  ],
  authors: [{ name: "Deni Hidayat, S.T., MOS" }],
  openGraph: {
    title: "Deni Hidayat, S.T., MOS — Software Engineer Portfolio",
    description:
      "Curriculum Vitae & 22+ Rekam Jejak Proyek Sistem Informasi Web & Mobile Deni Hidayat, S.T., MOS.",
    type: "website",
    locale: "id_ID",
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
