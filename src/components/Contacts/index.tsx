import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

export default function Contacts() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Контактная информация</h2>
      <div className={styles.contactInfo}>
        <a
          href={"https://yandex.ru/maps/-/CHGbnDm5"}
          target={"_blank"}
          className={styles.contactItem}
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.contactIcon}
            width={24}
            height={24}
          />
          <span>г. Москва, проспект Маршала Жукова, 35</span>
        </a>
        <a href={"tel:+7 499 342-12-56"} className={styles.contactItem}>
          <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} width={24} height={24} />
          <span>+7 499 342-12-56</span>
        </a>
        <a href={"mailto:clients@zdorovaya-lapka.ru"} className={styles.contactItem}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.contactIcon}
            width={24}
            height={24}
          />
          <span>clients@zdorovaya-lapka.ru</span>
        </a>

        <h3 className={styles.socialHeading}>Мы в социальных сетях</h3>
        <div className={styles.socialLinks}>
          <a
            href="https://vk.com/zdoravaya_lapka"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faVk} className={styles.contactIcon} width={24} height={24} />
            ВКонтакте
          </a>
          <a
            href="https://t.me/+WqKcasdRe-VQyYasasd"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className={styles.contactIcon}
              width={24}
              height={24}
            />
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
