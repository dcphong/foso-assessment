<template>
  <div class="flex flex-col gap-3 w-full">
    <span class="font-bold text-2xl text-white">{{ props.title }}</span>
    <span
      v-if="props.description"
      class="text-[rgba(180,170,155,1)] font-normal text-lg"
      >{{ props.description?.slice(0, 32)
      }}{{
        props.description && props.description.length >= 32 ? "..." : ""
      }}</span
    >
    <div class="flex w-full justify-between">
      <div class="text-[rgba(218,215,205,1)]">
        <span class="font-bold text-2xl">
          {{ props.price }}
        </span>
        <span class="font-bold text-base!">k </span>
      </div>
      <CustomAdd
        class="hover:rotate-90 transition-transform duration-300 cursor-pointer"
        @click="props.onClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import i18n from "@/langs/i18n";
import CustomAdd from "@/components/common/icons/CustomAdd.vue";
const locale = i18n.global.locale.value;

const props = withDefaults(
  defineProps<{
    title: string;
    description?: string;
    price?: number;
    currency?: string;
    onClick?: () => void;
  }>(),
  {
    title: "Title",
    price: 0,
    currency: "$"
  }
);
</script>
