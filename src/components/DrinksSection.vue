<template>
  <div
    class="p-4 sm:p-8 md:p-12 lg:p-24 gap-8 lg:gap-24 flex flex-col lg:flex-row"
  >
    <div class="w-full lg:max-w-204 h-64 sm:h-80 md:h-96 lg:h-165.25">
      <img
        :src="DrinkSectionPicture"
        alt=""
        class="object-cover w-full h-full"
      />
    </div>
    <div class="flex flex-col gap-y-10 lg:max-w-1/2 w-full">
      <BaseTitle>
        {{ $t("drinks") }}
      </BaseTitle>

      <CollapseBase
        v-for="(data, index) in dataList"
        :key="index"
        v-bind="data"
        @click="
          () =>
            useCartStore().addToCart({
              ...data,
              id: 41 + index,
              image: 4
            })
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DrinkSectionPicture from "@/assets/images/latte.jpg";
import BaseTitle from "@/components/BaseTitle.vue";
import CollapseBase from "@/components/CollapseBase.vue";
import { useCartStore } from "@/stores/useCart";

const dataList = [
  {
    title: "Latte",
    price: 50
  },
  {
    title: "Espresso",
    price: 50
  },
  {
    title: "Americano",
    price: 50
  },

  {
    title: "Cappuccino",
    price: 50
  },
  {
    title: "Milkshake",
    price: 50
  },
  {
    title: "Juice",
    price: 50
  }
];
</script>
