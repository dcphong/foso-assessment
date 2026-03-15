<template>
  <div
    :class="{
      'rotate-90': props.vertical
    }"
    class="w-4.5 h-px bg-white"
  ></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    vertical?: boolean;
  }>(),
  {
    vertical: true
  }
);
</script>
