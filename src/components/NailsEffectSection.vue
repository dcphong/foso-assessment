<template>
  <div class="pt-24 px-24 gap-24 flex">
    <div class="flex flex-col gap-y-10 max-w-1/2 w-full">
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
    <div class="max-w-204">
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
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const exampleDatas = {
  title: "Perfectly Polished",
  description: t("perfectlyPolished"),
  price: 390
};
const dataList = Array(5).fill(exampleDatas);
</script>
