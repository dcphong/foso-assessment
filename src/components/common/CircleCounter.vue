<template>
  <div
    class="size-6 bg-white text-(--primary-color) flex items-center justify-center rounded-full"
  >
    {{ props.count }}
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    count?: number;
  }>(),
  {
    count: 0
  }
);
</script>
