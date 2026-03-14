<script setup lang="ts">
import CustomLine from "@/components/common/icons/CustomLine.vue";
import SearchBase from "@/components/common/input/SearchBase.vue";
</script>

<template>
  <div class="px-24 py-13.75 flex justify-between">
    <div
      class="[&>div>span]:uppercase font-semibold text-2xl text-white [&>div>span]:hover:text-(--text-light-yellow)! [&>div>span]:transition-colors [&>div>span]:duration-300 [&>div>span]:cursor-pointer flex gap-6 items-center"
    >
      <div>
        <span>{{ $t("comboPackages") }}</span>
      </div>
      <CustomLine />
      <div>
        <span>MEDICURE</span>
      </div>
      <CustomLine />
      <div>
        <span>PEDICURE</span>
      </div>
      <CustomLine />
      <div>
        <span>
          {{ $t("effect") }}
        </span>
      </div>
    </div>
    <SearchBase />
  </div>
</template>
