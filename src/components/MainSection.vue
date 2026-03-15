<script setup lang="ts">
import Categories from "@/components/Categories.vue";
import ComboPackagesSection from "@/components/ComboPackagesSection.vue";
import DrinksSection from "@/components/DrinksSection.vue";
import MedicureSection from "@/components/MedicureSection.vue";
import NailsEffectSection from "@/components/NailsEffectSection.vue";
import PedicureSection from "@/components/PedicureSection.vue";
</script>

<template>
  <div class="relative">
    <img
      src="../assets/images/main-bg.png"
      alt=""
      class="absolute inset-0 -translate-y-160 w-full h-full z-0"
    />

    <div
      class="relative bg-linear-to-t from-[rgba(97,79,56,1)] to-[rgb(111,83,32,0.96)] from-10%"
    >
      <div class="relative z-10">
        <Categories />
        <ComboPackagesSection />
        <MedicureSection />
        <PedicureSection />
        <NailsEffectSection />
        <DrinksSection />
      </div>
    </div>
  </div>
</template>
