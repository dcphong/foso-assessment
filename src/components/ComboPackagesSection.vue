<template>
  <div class="pt-12 px-24 gap-24 flex">
    <img :src="nailsPicture" alt="Nails" />

    <div class="flex gap-y-10 flex-col w-full">
      <BaseTitle>
        {{ $t("comboPackages") }}
      </BaseTitle>

      <div class="flex flex-col gap-6">
        <CollapseBase
          v-for="(item, index) in comboPackage($t)"
          :key="index"
          :title="item.title"
          :description="item.descriptions"
          :price="item.price"
          :onClick="
            () =>
              useCartStore().addToCart({
                ...item,
                id: 1 + index
              })
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import nailsPicture from "@/assets/images/combo-package/nails.png";
import BaseTitle from "@/components/BaseTitle.vue";
import CollapseBase from "@/components/CollapseBase.vue";
import { comboPackage } from "@/constants/staticData";
import { useCartStore } from "@/stores/useCart";
</script>
