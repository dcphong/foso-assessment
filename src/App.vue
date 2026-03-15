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
import { useBackdropStore } from "@/stores/useBackdrop";
import BookingSuccessfulModal from "@/components/BookingSuccessfulModal.vue";
import { useCartStore } from "@/stores/useCart";
</script>

<template>
  <div>
    <CartMenuPanel />
    <MainLayout class="relative">
      <div
        v-if="useCartStore().successfullModalOpen"
        class="h-screen fixed z-999 inset-0 flex items-center justify-center"
      >
        <BookingSuccessfulModal />
      </div>
      <BackdropOverlay v-if="useBackdropStore().isBackdropOpen" />
      <MainHeader />
      <ScrollHeader />
      <MainSection />
      <CommentsFromCustomersSection />
      <HealingAppointmentSection />
      <MainFooter />
    </MainLayout>
  </div>
</template>
