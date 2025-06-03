import { readServicesFromXLSX } from "@/data/services";
import ServiceCard from "./ServiceCard";
import styles from "./styles.module.css";

export default async function Services() {
  const services = await readServicesFromXLSX("/data/services.xlsx").catch(() => {
    console.warn("Failed to load services from XLSX, using fallback data");
    return [];
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Наши услуги</h2>
      <div className={styles.servicesList}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </section>
  );
}
