<script setup lang="ts">
import MainLayout from "@/layout/MainLayout.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainSection from "@/components/MainSection.vue";
import HealingAppointmentSection from "@/components/HealingAppointmentSection.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>

<template>
  <div>
    <MainLayout>
      <MainHeader />
      <MainSection />
      <CommentsFromCustomersSection />
      <HealingAppointmentSection />
      <MainFooter />
    </MainLayout>
  </div>
</template>
