<template>
  <div class="relative flex items-center">
    <button
      @click="
        () => {
          openDropdown = !openDropdown;
        }
      "
      class="cursor-pointer"
    >
      <span class="font-medium uppercase text-base text-centern"
        >{{ $t(locale) }}
      </span>
    </button>

    <div
      v-if="openDropdown"
      class="bg-(--primary-button) w-40 absolute top-8 py-1 px-2"
    >
      <div
        class="flex gap-3 px-2 py-1 hover:bg-(--primary-button-hover) cursor-pointer items-center hover:text-(--primary-button)!"
        v-for="(locale, index) in MESSAGES_KEYS"
        :key="index"
        @click="() => chooseLocale(locale)"
      >
        <div>
          <img :src="LANGUGAGE_FLAGS[locale]" class="size-6" alt="" />
        </div>
        <span>{{ LANGUGAGES[locale] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LANGUGAGE_FLAGS, LANGUGAGES } from "@/constants/locale";
import i18n, { MESSAGES_KEYS } from "@/langs/i18n";
import { ref, computed } from "vue";

const openDropdown = ref(false);

const locale = computed(() => i18n.global.locale.value);

const chooseLocale = (locale: string) => {
  i18n.global.locale.value = locale as any;
  window.localStorage.setItem("fosoLocale", locale);
  openDropdown.value = false;
};
</script>
