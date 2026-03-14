<template>
  <header
    class="py-6 px-24 flex w-full items-center justify-between bg-[url(../assets/images/header-bg.png)] text-white"
  >
    <LocalePickerButton />

    <MainLogo class="h-20" />

    <div>
      <CartButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import CartButton from "@/components/common/button/CartButton.vue";
import LocalePickerButton from "@/components/common/button/LocalePickerButton.vue";
import MainLogo from "@/components/common/MainLogo.vue";
</script>
