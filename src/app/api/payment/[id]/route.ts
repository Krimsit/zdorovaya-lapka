import { NextRequest, NextResponse } from "next/server";

const SHOP_ID = process.env.YOOKASSA_SHOP_ID;
const SECRET_KEY = process.env.YOOKASSA_SECRET_KEY;

if (!SHOP_ID || !SECRET_KEY) {
  console.error("YooKassa credentials are not set in environment variables");
}

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const paymentId = params.id;

    if (!paymentId) {
      return NextResponse.json({ error: "Payment ID is required" }, { status: 400 });
    }

    const response = await fetch(`https://api.yookassa.ru/v3/payments/${paymentId}`, {
      method: "GET",
      headers: {
        [String(SHOP_ID)]: String(SECRET_KEY),
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();

      console.error("YooKassa API error:", errorData);

      return NextResponse.json({ error: "Payment service error" }, { status: response.status });
    }

    const paymentData = await response.json();

    return NextResponse.json(paymentData);
  } catch (error) {
    console.error("Payment details fetch error:", error);

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
