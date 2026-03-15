<script setup lang="ts">
import { useBackdropStore } from "@/stores/useBackdrop";
import { useCartStore } from "@/stores/useCart";
import { X } from "lucide-vue-next";
</script>

<template>
  <div class="py-6 px-9 max-w-[718px] w-full bg-[rgba(250,245,235,1)]">
    <div class="pb-6 flex flex-col">
      <div class="relative">
        <img src="../assets/images/Illustration.png" alt="" class="mx-auto" />
        <button
          @click="
            () => {
              (useCartStore().closeSuccessfullModal(),
                useBackdropStore().toggleBackdrop(),
                useCartStore().prevStep());
            }
          "
          class="cursor-pointer absolute top-0 right-3"
        >
          <X class="size-6 text-[rgba(82,60,20,1)]" />
        </button>
      </div>
      <div class="gap-6 w-full">
        <div class="py-6 px-3 text-[rgba(34,39,50,1)] text-[40px] text-center">
          <span>{{ $t("requestSuccessfull") }}!</span>
        </div>
        <span
          class="text-[rgba(113,94,40,1)] text-[24px] text-center! flex items-center justify-center"
          >{{ $t("successfullModalContent") }}</span
        >
      </div>
    </div>
  </div>
</template>
