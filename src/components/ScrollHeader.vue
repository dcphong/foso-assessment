<template>
  <div ref="sentinel" class="absolute top-0 w-full h-1"></div>

  <header
    :class="[
      'py-4 lg:py-6 px-4 sm:px-6 lg:px-24 fixed top-0 z-999 w-full flex justify-between items-center text-white transition-all duration-800 gap-3',
      isSticky
        ? 'translate-y-0 bg-[rgba(64,52,38,0.7)] backdrop-blur-sm'
        : '-translate-y-full opacity-0'
    ]"
  >
    <img :src="Logo" alt="Logo" class="h-10 sm:h-12 lg:h-auto w-auto" />

    <div class="hidden lg:flex gap-6">
      <div
        class="h-10 text-start text-white hover:text-[rgba(225,192,132,1)] hover:border-b border-[rgba(225,192,132,1)] cursor-pointer"
        v-for="(nav, index) in navItems"
        :key="index"
      >
        <span>{{ $t(nav) }}</span>
      </div>
    </div>

    <div class="flex items-center gap-3 sm:gap-6 lg:gap-14">
      <LocalePickerButton />
      <CartButton />
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden h-10 w-10 border border-white/40 rounded-sm flex flex-col justify-center items-center gap-1.5"
        aria-label="Toggle sticky navigation menu"
      >
        <span class="h-0.5 w-4 bg-white"></span>
        <span class="h-0.5 w-4 bg-white"></span>
        <span class="h-0.5 w-4 bg-white"></span>
      </button>
    </div>
  </header>

  <nav
    v-if="isSticky && isMenuOpen"
    class="lg:hidden fixed z-998 top-19 left-4 right-4 sm:left-6 sm:right-6 px-5 py-4 rounded-sm border border-white/20 bg-[rgba(64,52,38,0.92)] backdrop-blur-sm flex flex-col gap-3"
  >
    <span
      v-for="item in navItems"
      :key="item"
      class="text-white/85 hover:text-[rgba(225,192,132,1)] transition-colors duration-300 cursor-pointer"
    >
      {{ $t(item) }}
    </span>
  </nav>
</template>

<script setup lang="ts">
import Logo from "@/assets/images/logo.png";
import CartButton from "@/components/common/button/CartButton.vue";
import LocalePickerButton from "@/components/common/button/LocalePickerButton.vue";
import { ref, onMounted, onUnmounted, watch } from "vue";

const sentinel = ref<HTMLElement | null>(null);
const isSticky = ref(false);
const isMenuOpen = ref(false);
const navItems = ["home", "introduction", "service", "news", "contact"];
let observer: IntersectionObserver | null = null;
let timer: ReturnType<typeof setTimeout> | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (timer) clearTimeout(timer);

        if (!entry.isIntersecting) {
          timer = setTimeout(() => {
            isSticky.value = true;
          }, 300);
        } else {
          isSticky.value = false;
          isMenuOpen.value = false;
        }
      });
    },
    { threshold: 0 }
  );

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  if (timer) clearTimeout(timer);
});

watch(isSticky, (value) => {
  if (!value) {
    isMenuOpen.value = false;
  }
});
</script>
