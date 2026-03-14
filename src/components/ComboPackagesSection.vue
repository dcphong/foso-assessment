<template>
  <div class="pt-12 px-24 gap-24 flex">
    <img :src="nailsPicture" alt="Nails" />

    <div class="flex gap-y-10 flex-col w-full">
      <BaseTitle>
        {{ $t("comboPackages") }}
      </BaseTitle>

      <div class="flex flex-col gap-6">
        <CollapseBase
          v-for="(item, index) in comboPackages"
          :key="index"
          :title="item.title"
          :description="item.descriptions"
          :price="item.price"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import nailsPicture from "@/assets/images/combo-package/nails.png";
import BaseTitle from "@/components/BaseTitle.vue";
import CollapseBase from "@/components/CollapseBase.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const exampleDatas = {
  title: "Perfectly Polished",
  descriptions: t("perfectlyPolished"),
  price: 390
};

const comboPackages = Array(5).fill(exampleDatas);
</script>
