<template>
  <div class="flex gap-6" :class="props.class">
    <div
      :class="{
        'border border-[rgba(218,211,202,1)]': index == 0
      }"
      class="p-4.5 rounded-full cursor-pointer"
      v-for="(_, index) in Array.from({ length: 5 })"
      :key="index"
    >
      <div class="size-3 bg-[rgba(218,211,202,1)] rounded-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string;
    activePage?: number;
  }>(),
  {}
);
</script>
