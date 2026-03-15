<template>
  <div class="pt-24 px-24 gap-24 flex">
    <div class="flex flex-col gap-y-10 max-w-1/2 w-full">
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
      class="object-cover w-full"
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
