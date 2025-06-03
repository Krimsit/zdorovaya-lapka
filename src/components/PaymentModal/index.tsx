"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  price: string;
}

export default function PaymentModal({ isOpen, onClose, serviceName, price }: PaymentModalProps) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ fullName: "", phoneNumber: "" });

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors = { fullName: "", phoneNumber: "" };
    let isValid = true;

    if (!fullName.trim()) {
      newErrors.fullName = "Пожалуйста, введите ФИО";
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Пожалуйста, введите номер телефона";
      isValid = false;
    } else if (!/^\+?[0-9]{10,15}$/.test(phoneNumber.replace(/\s+/g, ""))) {
      newErrors.phoneNumber = "Пожалуйста, введите корректный номер телефона";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      const body = {
        serviceName,
        price,
        fullName,
        phoneNumber,
      };

      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Payment request failed");
      }

      const data = await response.json();

      console.log(data);

      if (data.confirmationUrl) {
        window.location.href = data.confirmationUrl;
      } else {
        throw new Error("No confirmation URL received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Произошла ошибка при создании платежа. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button type={"button"} className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2 className={styles.modalTitle}>Оформление заказа</h2>

        <div className={styles.serviceDetails}>
          <h3 className={styles.serviceTitle}>{serviceName}</h3>
          <p className={styles.servicePrice}>{price} руб.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              ФИО
            </label>
            <input
              type="text"
              id="fullName"
              className={styles.input}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Иванов Иван Иванович"
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Номер телефона
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className={styles.input}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+7 (999) 123-45-67"
            />
            {errors.phoneNumber && <p className={styles.errorText}>{errors.phoneNumber}</p>}
          </div>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? "Обработка..." : "Перейти к оплате"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
