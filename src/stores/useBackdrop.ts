import { watch } from "vue";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBackdropStore = defineStore("backdrop", () => {
  const isBackdropOpen = ref(false);

  const toggleBackdrop = () => {
    isBackdropOpen.value = !isBackdropOpen.value;
  };

  watch(isBackdropOpen, (newValue) => {
    if (newValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  return {
    isBackdropOpen,
    toggleBackdrop
  };
});
