<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainSection from "@/components/MainSection.vue";
import HealingAppointmentSection from "@/components/HealingAppointmentSection.vue";
import MainFooter from "@/components/MainFooter.vue";
import CommentsFromCustomersSection from "@/components/CommentsFromCustomersSection.vue";
import ScrollHeader from "@/components/ScrollHeader.vue";
import CartMenuPanel from "@/components/CartMenuPanel.vue";
import BackdropOverlay from "@/components/BackdropOverlay.vue";
import { useCartStore } from "@/stores/useCart";
</script>

<template>
  <div>
    <CartMenuPanel />
    <MainLayout class="relative">
      <BackdropOverlay v-if="useCartStore().openCartPanel" />
      <MainHeader />
      <ScrollHeader />
      <MainSection />
      <CommentsFromCustomersSection />
      <HealingAppointmentSection />
      <MainFooter />
    </MainLayout>
  </div>
</template>
