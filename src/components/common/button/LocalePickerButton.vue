<template>
  <button class="cursor-pointer">
    <span class="font-medium uppercase text-base">{{ $t(locale) }}</span>
  </button>
</template>

<script setup lang="ts">
import i18n from "@/langs/i18n";

const locale = i18n.global.locale.value;
</script>
