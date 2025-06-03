import Image from "next/image";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>О нашей клинике</h2>
      <div className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <p>
            Ветеринарная клиника «Здоровая лапка» — это современный медицинский центр, где ваши
            питомцы получат квалифицированную помощь и заботу. Наша команда опытных ветеринарных
            врачей использует современное оборудование и новейшие методики лечения.
          </p>
          <p className={styles.paragraphSpacing}>
            Мы стремимся создать комфортные условия для животных и их владельцев, обеспечивая
            индивидуальный подход к каждому пациенту.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src="/images/clinic-image.svg"
            alt="Клиника Здоровая лапка"
            width={500}
            height={300}
            className={styles.responsiveImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
