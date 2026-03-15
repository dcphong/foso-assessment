<script setup lang="ts">
import { useBackdropStore } from "@/stores/useBackdrop";
import { useCartStore } from "@/stores/useCart";
</script>

<template>
  <div
    @click="
      () => {
        (useCartStore().toggleCartPanel(), useBackdropStore().toggleBackdrop());
      }
    "
    class="absolute inset-0 z-997 bg-black/50 overflow-hidden"
  ></div>
</template>
