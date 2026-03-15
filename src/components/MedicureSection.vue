<template>
  <div
    class="pt-8 px-4 sm:px-8 md:px-12 lg:pt-24 lg:px-24 gap-8 lg:gap-24 flex flex-col lg:flex-row"
  >
    <div class="flex flex-col gap-y-10 lg:max-w-1/2 w-full">
      <BaseTitle>
        {{ $t("medicure") }}
      </BaseTitle>

      <CollapseBase
        v-for="(data, index) in medicureDataList($t)"
        :key="index"
        v-bind="data"
        :onClick="() => useCartStore().addToCart({ ...data, id: 11 + index })"
      />
    </div>
    <img
      :src="MedicureSectionPicture"
      alt="Medicure Section"
      class="object-cover w-full lg:max-w-1/2"
    />
  </div>
</template>

<script setup lang="ts">
import MedicureSectionPicture from "@/assets/images/medicure-section.png";
import BaseTitle from "@/components/BaseTitle.vue";
import CollapseBase from "@/components/CollapseBase.vue";
import { medicureDataList } from "@/constants/staticData";
import { useCartStore } from "@/stores/useCart";
</script>
