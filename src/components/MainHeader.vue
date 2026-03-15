<template>
  <header
    class="bg-[url(../assets/images/header-bg.png)] text-white flex flex-col gap-y-76.25 relative z-2"
  >
    <div class="space-y-3 relative z-1">
      <div class="flex w-full items-center justify-between py-6 px-24">
        <LocalePickerButton />

        <MainLogo class="h-20" />

        <div>
          <CartButton />
        </div>
      </div>
      <MainNav class="mx-auto" />
    </div>

    <BreadCrumb class="mx-auto w-fit font-light relative z-1" />

    <div
      class="bg-linear-to-t from-[rgb(111,83,32)] to-transparent absolute inset-0"
    ></div>
  </header>
</template>

<script setup lang="ts">
import BreadCrumb from "@/components/BreadCrumb.vue";
import CartButton from "@/components/common/button/CartButton.vue";
import LocalePickerButton from "@/components/common/button/LocalePickerButton.vue";
import MainLogo from "@/components/common/MainLogo.vue";
import MainNav from "@/components/MainNav.vue";
</script>
