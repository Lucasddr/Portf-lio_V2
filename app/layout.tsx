import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Dutra | Desenvolvedor Full Stack",

  description:
    "Transformo ideias em sites e sistemas web modernos, rápidos e profissionais. Desenvolvimento personalizado com Next.js, React, Java e Spring Boot",

  alternates: {
    canonical: "https://lucasdutra.dev"
  },

  keywords: [
    "Lucas Dutra",
    "desenvolvedor full stack",
    "desenvolvedor web",
    "desenvolvimento web",
    "sites",
    "sistemas web",
  ],

  authors: [{ name: "Lucas Dutra" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Lucas Dutra | Desenvolvedor Full Stack",
    description:
      "Desenvolvo sites e sistemas web modernos, rápidos e personalizados.",
    url: "https://lucasdutra.dev",
    siteName: "Lucas Dutra",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://lucasdutra.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucas Dutra — Desenvolvedor Full Stack",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucas Dutra | Desenvolvedor Full Stack",
    description:
      "Desenvolvo sites e sistemas web modernos, rápidos e personalizados.",
    images: ["https://lucasdutra.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://lucasdutra.dev/#person",
        name: "Lucas Dutra",
        url: "https://lucasdutra.dev",
        jobTitle: "Desenvolvedor Full Stack",
        knowsAbout: [
          "Desenvolvimento Web",
          "Java",
          "Spring Boot",
          "Next.js",
          "React",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Python",
          "PostgreSQL",
          "Tailwind CSS",
          "n8n",
        ],
        sameAs: [
          "https://github.com/Lucasddr",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://lucasdutra.dev/#website",
        url: "https://lucasdutra.dev",
        name: "Lucas Dutra | Desenvolvedor Full Stack",
        description:
          "Portfólio de Lucas Dutra, desenvolvedor Full Stack especializado em desenvolvimento web, sistemas e soluções de software.",
        publisher: {
          "@id": "https://lucasdutra.dev/#person",
        },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}