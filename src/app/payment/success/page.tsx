import Link from "next/link";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function PaymentSuccessPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.successIcon}>
          <FontAwesomeIcon icon={faCircleCheck} size="4x" />
        </div>
        <h1 className={styles.title}>Оплата успешно выполнена!</h1>
        <p className={styles.message}>
          Благодарим вас за оплату. Ваш платеж был успешно обработан.
        </p>
        <p className={styles.details}>
          Мы свяжемся с вами в ближайшее время для подтверждения деталей услуги.
        </p>
        <Link href="/" className={styles.button}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
