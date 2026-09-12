import { NextRequest, NextResponse } from "next/server";
import {
  addCartLine,
  createCart,
  getCart,
  removeCartLine,
  updateCartLine,
} from "@/lib/shopify";

// Every handler here talks to Shopify with the Storefront API token only
// (imported from lib/shopify.ts, never re-declared here) — this route is
// the one place that token is used server-side; it never reaches the client.

export async function GET(request: NextRequest) {
  const cartId = request.nextUrl.searchParams.get("cartId");
  if (!cartId) {
    return NextResponse.json({ cart: null });
  }
  try {
    const cart = await getCart(cartId);
    return NextResponse.json({ cart });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { cartId, merchandiseId, quantity = 1 } = await request.json();

  if (!merchandiseId) {
    return NextResponse.json({ error: "merchandiseId is required" }, { status: 400 });
  }

  try {
    const cart = cartId
      ? await addCartLine(cartId, merchandiseId, quantity)
      : await createCart(merchandiseId, quantity);
    return NextResponse.json({ cart });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const { cartId, lineId, quantity } = await request.json();

  if (!cartId || !lineId || typeof quantity !== "number") {
    return NextResponse.json(
      { error: "cartId, lineId and quantity are required" },
      { status: 400 }
    );
  }

  try {
    const cart = await updateCartLine(cartId, lineId, quantity);
    return NextResponse.json({ cart });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { cartId, lineId } = await request.json();

  if (!cartId || !lineId) {
    return NextResponse.json({ error: "cartId and lineId are required" }, { status: 400 });
  }

  try {
    const cart = await removeCartLine(cartId, lineId);
    return NextResponse.json({ cart });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
