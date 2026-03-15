<template>
  <div
    class="pt-8 px-4 sm:px-8 md:px-12 lg:pt-24 lg:px-24 gap-8 lg:gap-24 flex flex-col lg:flex-row"
  >
    <div class="flex flex-col gap-y-10 lg:max-w-1/2 w-full">
      <BaseTitle>
        {{ $t("effect") }}
      </BaseTitle>

      <CollapseBase
        v-for="(data, index) in effectDataList($t)"
        :key="index"
        v-bind="data"
        :onClick="() => useCartStore().addToCart({ ...data, id: 31 + index })"
      />
    </div>
    <div class="w-full lg:max-w-204">
      <img
        :src="NailsEffectSectionPicture"
        alt="Nails Effect Section"
        class="object-cover w-full h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import NailsEffectSectionPicture from "@/assets/images/effect-section.png";
import BaseTitle from "@/components/BaseTitle.vue";
import CollapseBase from "@/components/CollapseBase.vue";
import { effectDataList } from "@/constants/staticData";
import { useCartStore } from "@/stores/useCart";
</script>
