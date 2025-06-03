import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

const SHOP_ID = process.env.YOOKASSA_SHOP_ID;
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY;

if (!SHOP_ID || !SECRET_KEY) {
  console.error("YooKassa credentials are not set in environment variables");
}

export async function POST(request: NextRequest) {
  try {
    const { serviceName, price, fullName, phoneNumber } = await request.json();
    const response = await fetch("https://api.yookassa.ru/v3/payments", {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`${SHOP_ID}:${SECRET_KEY}`)}`,
        "Idempotence-Key": v4(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: {
          value: price,
          currency: "RUB",
        },
        capture: true,
        confirmation: {
          type: "redirect",
          return_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        },
        description: `Оплата услуги: ${serviceName}. Клиент: ${fullName}, Телефон: ${phoneNumber}`,
        metadata: {
          fullName,
          phoneNumber,
          serviceName,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error("YooKassa API error:", errorData);

      return NextResponse.json({ error: "Payment service error" }, { status: response.status });
    }

    const paymentData = await response.json();

    return NextResponse.json({
      paymentId: paymentData.id,
      confirmationUrl: paymentData.confirmation.confirmation_url,
    });
  } catch (error) {
    console.error("Payment processing error:", error);

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
