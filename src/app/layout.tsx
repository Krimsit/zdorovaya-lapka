import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter, Kode_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import styles from "./layout.module.css";

config.autoAddCss = false;

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Kode_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Здоровая лапка - Клиника для домашних животных",
  description:
    "Ветеринарная клиника для домашних животных в Москве. Профессиональная помощь вашим питомцам. Качественные ветеринарные услуги, опытные врачи, современное оборудование.",
  keywords:
    "ветеринарная клиника, ветклиника, здоровая лапка, ветеринар, домашние животные, лечение животных, Москва, ветеринарные услуги, питомцы",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://krimsit.ru/",
    siteName: "Здоровая лапка",
    title: "Здоровая лапка - Ветеринарная клиника для домашних животных",
    description:
      "Профессиональная ветеринарная помощь вашим питомцам в Москве. Качественные услуги, опытные врачи, современное оборудование.",
    images: [
      {
        url: "/images/clinic-logo.svg",
        width: 1200,
        height: 630,
        alt: "Здоровая лапка - Ветеринарная клиника",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="light-theme">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <Image
                src="/images/clinic-logo.svg"
                alt="Здоровая лапка"
                width={40}
                height={40}
                className={styles.logoImage}
              />
              Здоровая лапка
            </div>
            <div className={styles.tagline}>Ветеринарная клиника для домашних животных</div>
          </div>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>© 2024 Ветеринарная клиника «Здоровая лапка». Все права защищены.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
