import PaymentButton from "../PaymentButton";
import styles from "./styles.module.css";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
}

export default function ServiceCard({ name, description, price }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <h3 className={styles.serviceName}>{name}</h3>
      <p className={styles.serviceDescription}>{description}</p>
      <p className={styles.servicePrice}>{price} руб.</p>
      <PaymentButton serviceName={name} price={price} />
    </div>
  );
}
