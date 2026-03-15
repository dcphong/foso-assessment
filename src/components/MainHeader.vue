<template>
  <header
    class="bg-[url(../assets/images/header-bg.png)] text-white flex flex-col gap-y-12 lg:gap-y-76.25 relative z-2"
  >
    <div class="space-y-3 relative z-1">
      <div
        class="flex w-full items-center justify-between py-4 lg:py-6 px-4 sm:px-6 lg:px-24 gap-3"
      >
        <div class="flex items-center gap-4">
          <LocalePickerButton />
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="lg:hidden h-10 w-10 border border-white/40 rounded-sm flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle navigation menu"
          >
            <span class="h-0.5 w-4 bg-white"></span>
            <span class="h-0.5 w-4 bg-white"></span>
            <span class="h-0.5 w-4 bg-white"></span>
          </button>
        </div>

        <MainLogo class="h-12 sm:h-16 lg:h-20" />

        <div class="shrink-0">
          <CartButton />
        </div>
      </div>
      <MainNav class="mx-auto hidden lg:flex" />

      <nav
        v-if="isMenuOpen"
        class="lg:hidden mx-4 sm:mx-6 px-5 py-4 rounded-sm border border-white/20 bg-[rgba(64,52,38,0.85)] backdrop-blur-sm flex flex-col gap-3"
      >
        <span
          v-for="item in navItems"
          :key="item"
          class="text-white/85 hover:text-[rgba(225,192,132,1)] transition-colors duration-300 cursor-pointer"
        >
          {{ $t(item) }}
        </span>
      </nav>
    </div>

    <BreadCrumb
      class="mx-auto w-fit font-light relative z-1 px-4 pb-6 lg:pb-0"
    />

    <div
      class="bg-linear-to-t from-[rgb(111,83,32)] to-transparent absolute inset-0"
    ></div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BreadCrumb from "@/components/BreadCrumb.vue";
import CartButton from "@/components/common/button/CartButton.vue";
import LocalePickerButton from "@/components/common/button/LocalePickerButton.vue";
import MainLogo from "@/components/common/MainLogo.vue";
import MainNav from "@/components/MainNav.vue";

const isMenuOpen = ref(false);
const navItems = ["home", "introduction", "service", "contact", "news"];
</script>
