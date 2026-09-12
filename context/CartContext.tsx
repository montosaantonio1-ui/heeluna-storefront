"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Cart } from "@/lib/types";

const STORAGE_KEY = "heeluna_cart_id";

type CartContextValue = {
  cart: Cart | null;
  isLoading: boolean;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (merchandiseId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const existingId = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!existingId) return;
    fetch(`/api/cart?cartId=${encodeURIComponent(existingId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.cart) setCart(data.cart);
      })
      .catch(() => {
        // stale/expired cart id — safe to ignore, a fresh one is created on next add
      });
  }, []);

  const persistCartId = (id: string) => {
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, id);
  };

  const addItem = useCallback(
    async (merchandiseId: string, quantity = 1) => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId: cart?.id, merchandiseId, quantity }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setCart(data.cart);
        persistCartId(data.cart.id);
        setIsDrawerOpen(true);
      } finally {
        setIsLoading(false);
      }
    },
    [cart?.id]
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        const res = await fetch("/api/cart", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId: cart.id, lineId, quantity }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setCart(data.cart);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        const res = await fetch("/api/cart", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartId: cart.id, lineId }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setCart(data.cart);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      isLoading,
      isDrawerOpen,
      openDrawer: () => setIsDrawerOpen(true),
      closeDrawer: () => setIsDrawerOpen(false),
      addItem,
      updateItem,
      removeItem,
    }),
    [cart, isLoading, isDrawerOpen, addItem, updateItem, removeItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
