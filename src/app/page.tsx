import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <Services />
      <Contacts />
    </div>
  );
}
