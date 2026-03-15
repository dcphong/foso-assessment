<script setup lang="ts">
import CustomLine from "@/components/common/icons/CustomLine.vue";
import SearchBase from "@/components/common/input/SearchBase.vue";
</script>

<template>
  <div
    class="px-4 py-6 sm:px-8 md:px-12 lg:px-24 lg:py-13.75 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
  >
    <div
      class="[&>div>span]:uppercase font-semibold text-sm sm:text-base md:text-lg lg:text-2xl text-white [&>div>span]:hover:text-(--text-light-yellow)! [&>div>span]:transition-colors [&>div>span]:duration-300 [&>div>span]:cursor-pointer flex flex-wrap gap-x-4 gap-y-3 items-center"
    >
      <div>
        <span>{{ $t("comboPackages") }}</span>
      </div>
      <CustomLine class="hidden md:block" />
      <div>
        <span>MEDICURE</span>
      </div>
      <CustomLine class="hidden md:block" />
      <div>
        <span>PEDICURE</span>
      </div>
      <CustomLine class="hidden md:block" />
      <div>
        <span>
          {{ $t("effect") }}
        </span>
      </div>
    </div>
    <SearchBase />
  </div>
</template>
