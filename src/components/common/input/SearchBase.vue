<script setup lang="ts">
import { Search } from "lucide-vue-next";
</script>

<template>
  <label
    for="search"
    class="text-white border-b border-[rgba(175,179,187,1)] flex items-start pb-2 max-w-98 w-full justify-between"
  >
    <input
      type="text"
      id="search"
      :placeholder="$t('search')"
      class="outline-0 placeholder:text-[rgba(221,223,228,1)] w-full"
    />
    <Search
      class="size-6.75 cursor-pointer hover:scale-120 transition-transformn duration-300"
    />
  </label>
</template>
