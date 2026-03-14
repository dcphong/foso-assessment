<template>
  <header
    class="py-6 px-24 flex w-full items-center justify-between bg-[url(../assets/images/header-bg.png)] text-white"
  >
    <div>
      <span>{{ $t(locale) }}</span>
    </div>

    <div>
      <img src="../assets/images/logo.png" alt="" />
    </div>

    <div>
      <CartButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import CartButton from "@/components/common/button/CartButton.vue";
import i18n from "@/langs/i18n";

const locale = i18n.global.locale.value;
</script>
