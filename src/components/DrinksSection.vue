<template>
  <div class="p-24 gap-24 flex">
    <div class="max-w-[816px] h-[661px] w-full">
      <img
        :src="DrinkSectionPicture"
        alt=""
        class="object-cover w-full h-full"
      />
    </div>
    <div class="flex flex-col gap-y-10 max-w-1/2 w-full">
      <BaseTitle>
        {{ $t("drinks") }}
      </BaseTitle>

      <CollapseBase
        v-for="(data, index) in dataList"
        :key="index"
        v-bind="data"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DrinkSectionPicture from "@/assets/images/latte.jpg";
import BaseTitle from "@/components/BaseTitle.vue";
import CollapseBase from "@/components/CollapseBase.vue";

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
