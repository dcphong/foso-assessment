<template>
  <div>
    <span class="text-9xl text-(breadcrumb-color) capitalize">
      {{ $t(props.breadcrumb) }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    breadcrumb?: string;
  }>(),
  {
    breadcrumb: "service"
  }
);
</script>
