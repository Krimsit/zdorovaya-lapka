"use client";

import { useState } from "react";
import PaymentModal from "../PaymentModal";
import styles from "./styles.module.css";

interface PaymentButtonProps {
  serviceName: string;
  price: string;
}

export default function PaymentButton({ serviceName, price }: PaymentButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" className={styles.paymentButton} onClick={openModal}>
        Оплатить
      </button>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        serviceName={serviceName}
        price={price}
      />
    </>
  );
}
