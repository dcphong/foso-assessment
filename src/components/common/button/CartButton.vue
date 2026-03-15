<script setup lang="ts">
import CircleCounter from "@/components/common/CircleCounter.vue";
import ShoppingCart from "@/components/common/icons/ShoppingCart.vue";
import { useBackdropStore } from "@/stores/useBackdrop";
import { useCartStore } from "@/stores/useCart";
</script>

<template>
  <button
    @click="
      () => {
        (useCartStore().toggleCartPanel(), useBackdropStore().toggleBackdrop());
      }
    "
    class="px-3 sm:px-4 lg:px-5 py-2.5 lg:py-3 flex items-center gap-2 sm:gap-3 bg-(--primary-button) uppercase text-white hover:bg-(--primary-button-hover)! group transition-colors duration-300 cursor-pointer"
  >
    <ShoppingCart
      class="size-5 lg:size-6 group-hover:text-(--primary-color)! transition-colors duration-300"
    />
    <span
      class="hidden sm:inline group-hover:text-(--primary-color)! transition-colors duration-300 font-medium text-sm lg:text-base"
    >
      {{ $t("cart") }}</span
    >
    <CircleCounter
      :count="useCartStore().itemsCount"
      class="group-hover:bg-(--primary-color)! group-hover:text-white! transition-colors duration-300"
    />
  </button>
</template>
