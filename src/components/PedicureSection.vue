<template>
  <div
    class="py-8 px-4 sm:px-8 md:px-12 lg:py-24 lg:px-24 gap-8 lg:gap-24 flex flex-col lg:flex-row-reverse"
  >
    <div class="flex flex-col gap-y-10 lg:max-w-1/2 w-full">
      <BaseTitle>
        {{ $t("pedicure") }}
      </BaseTitle>

      <CollapseBase
        v-for="(data, index) in pedicureDataList($t)"
        :key="index"
        v-bind="data"
        :onClick="() => useCartStore().addToCart({ ...data, id: 21 + index })"
      />
    </div>

    <img
      :src="PedicureSectionPicture"
      alt=""
      class="object-cover w-full lg:max-w-1/2"
    />
  </div>
</template>

<script setup lang="ts">
import PedicureSectionPicture from "@/assets/images/pedicure.png";
import BaseTitle from "@/components/BaseTitle.vue";
import CollapseBase from "@/components/CollapseBase.vue";
import { pedicureDataList } from "@/constants/staticData";
import { useCartStore } from "@/stores/useCart";
</script>
