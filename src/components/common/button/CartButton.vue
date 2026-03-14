<script setup lang="ts">
import CircleCounter from "@/components/common/CircleCounter.vue";
import ShoppingCart from "@/components/common/icons/ShoppingCart.vue";
</script>

<template>
  <button
    class="px-5 py-3 flex gap-3 bg-(--primary-button) uppercase text-white hover:bg-(--primary-button-hover)! group transition-colors duration-300 cursor-pointer"
  >
    <ShoppingCart
      class="size-6 group-hover:text-(--primary-color)! transition-colors duration-300"
    />
    <span
      class="group-hover:text-(--primary-color)! transition-colors duration-300 font-medium text-base"
    >
      {{ $t("cart") }}</span
    >
    <CircleCounter
      class="group-hover:bg-(--primary-color)! group-hover:text-white! transition-colors duration-300"
    />
  </button>
</template>
