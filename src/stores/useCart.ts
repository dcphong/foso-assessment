import type { CartItem } from "@/types/cart";
import { getStoredCart } from "@/utils/validate";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
  const STORAGE_KEY = "fosoCartItems";
  const cartItems = ref<CartItem[]>(getStoredCart(STORAGE_KEY));
  const itemsCount = computed<number>(() => Number(cartItems.value.length));
  const openCartPanel = ref(false);

  const toggleCartPanel = () => {
    openCartPanel.value = !openCartPanel.value;
  };

  watch(openCartPanel, (isOpen) => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  });

  watch(
    cartItems,
    (newItems) => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    },
    { deep: true }
  );

  const addToCart = (item: CartItem) => {
    if (!item || typeof item !== "object") return;
    if (!item.type) item.type = "regular";

    const exists = cartItems.value.find((i) => i.id === item.id);
    if (!exists) {
      item.createdDate = Date.now();
      cartItems.value.push(item);
    }
  };

  const removeFromCart = (itemId: number | string) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  const totalAmount = computed<number>(() => {
    return cartItems.value.reduce((total, item) => {
      return total + (item.price || 0);
    }, 0);
  });

  return {
    cartItems,
    totalAmount,
    addToCart,
    removeFromCart,
    clearCart,
    itemsCount,
    openCartPanel,
    toggleCartPanel
  };
});
