import type { Money } from "./types";

export function formatMoney(money: Money): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode || "USD",
  }).format(Number(money.amount));
}
