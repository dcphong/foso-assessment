<template>
  <div ref="sentinel" class="absolute top-0 w-full h-1"></div>

  <header
    :class="[
      'py-6 px-24 fixed top-0 z-[999] w-full flex justify-between items-center text-white transition-all duration-800 ',
      isSticky
        ? 'translate-y-0 bg-[rgba(64,52,38,0.7)] backdrop-blur-sm'
        : '-translate-y-full opacity-0'
    ]"
  >
    <img :src="Logo" alt="Logo" />

    <div class="flex gap-6">
      <div
        class="h-10 text-start text-white hover:text-[rgba(225,192,132,1)] hover:border-b border-[rgba(225,192,132,1)] cursor-pointer"
        v-for="(nav, index) in [
          'home',
          'introduction',
          'service',
          'news',
          'contact'
        ]"
        :key="index"
      >
        <span>{{ $t(nav) }}</span>
      </div>
    </div>

    <div class="flex gap-14">
      <LocalePickerButton />
      <CartButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/assets/images/logo.png";
import CartButton from "@/components/common/button/CartButton.vue";
import LocalePickerButton from "@/components/common/button/LocalePickerButton.vue";
import { ref, onMounted, onUnmounted } from "vue";

const sentinel = ref<HTMLElement | null>(null);
const isSticky = ref(false);
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
</script>
