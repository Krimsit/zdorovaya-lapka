import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter, Kode_Mono } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
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
        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){
              (m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){
                if(document.scripts[j].src===r){return;}
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(102379248, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </Script>

        {/* NoScript часть */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/102379248"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
