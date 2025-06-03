import { readServicesFromXLSX } from "@/data/services";
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
          <div key={service.id} className={styles.serviceCard}>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <p className={styles.servicePrice}>{service.price} руб.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
