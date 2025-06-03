import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import type { Metadata } from "next";
import styles from "./page.module.css";

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
        url: "https://krimsit.ru/images/opengraph-main.png",
        width: 1200,
        height: 630,
        alt: "Здоровая лапка - Ветеринарная клиника",
      },
    ],
  },
};

export default async function Page() {
  return (
    <div className={styles.root}>
      <Hero />
      <Services />
      <Contacts />
    </div>
  );
}
