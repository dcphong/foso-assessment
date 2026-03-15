<template>
  <div
    v-if="useCartStore().openCartPanel"
    class="max-w-[416px] w-full bg-white fixed z-998 h-screen top-0 right-0 pt-[108px]"
  >
    <button
      class="absolute top-5 left-5 cursor-pointer"
      @click="() => useCartStore().toggleCartPanel()"
    >
      <X class="text-[rgba(130,76,8,1)] size-6" />
    </button>

    <div class="flex flex-col border-t border-[#b28042b3]">
      <div
        class="py-6 capitalize w-full text-center text-[rgba(130,76,8,1)] text-[32px] font-normal border-b border-[rgba(130,76,8,0.2)]"
      >
        <span>{{ $t("cart") }}</span>
      </div>

      <div class="flex flex-col max-h-[555px] overflow-y-auto">
        <div
          class="flex-col flex"
          v-for="(item, index) in useCartStore().cartItems"
          :key="index"
        >
          <div class="p-3 flex gap-4" v-if="item.type != 'effect'">
            <div class="w-20 h-20 overflow-hidden shrink-0">
              <img
                :src="IMAGES[Number(item.image)]"
                alt=""
                class="object-cover h-full w-full"
              />
            </div>

            <div class="flex flex-col gap-3 w-full justify-center">
              <div class="flex justify-between items-center gap-2.5">
                <span class="text-sm font-semibold text-black">{{
                  item.title
                }}</span>

                <button class="m-0 p-0">
                  <X class="size-4 text-[rgba(180,170,155,1)]" />
                </button>
              </div>

              <div
                class="flex justify-between items-center text-[rgba(91,97,109,1)] text-sm"
              >
                <span> {{ item.price }}{{ CURRENCY_SYMBOL["vi"] }} </span>
                <div class="flex gap-1.5 items-center">
                  <Clock8 class="size-3" />
                  <span v-if="item.createdDate">{{
                    convertDate(item.createdDate, $t)
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="py-2 px-13 flex gap-4">
            <div class="size-10 overflow-hidden shrink-0">
              <img
                :src="IMAGES[Number(item.image)]"
                alt=""
                class="object-cover h-full w-full"
              />
            </div>

            <div
              class="w-full flex text-[12px] text-[rgba(65,70,81,1)] justify-between items-center"
            >
              <div>
                <span class="font-normal">{{ $t("effect") }}</span>
                <span class="font-bold">{{ $t("leopardSkin") }}</span>
              </div>
              <div
                class="rounded-full py-2 px-3 gap-3 flex border border-[rgba(98,91,90,1)] items-center max-w-[100px] w-full justify-center"
              >
                <button
                  class="cursor-pointer"
                  @click="
                    () => {
                      if (count > 0) count--;
                    }
                  "
                >
                  <Minus class="w-2.75" />
                </button>
                <span class="text-[14px] font-medium">{{ count }}</span>
                <button class="cursor-pointer" @click="count++">
                  <Plus class="w-2.75" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4 px-3 gap-6 flex flex-col">
        <div class="flex flex-col gap-4">
          <div class="flex justify-between items-center">
            <span class="text-base font-normal text-[rgba(136,136,136,1)]">{{
              $t("technician")
            }}</span>

            <div class="flex gap-2 items-center">
              <div class="size-6 rounded-full overflow-hidden shrink-0">
                <img
                  src="../assets/images/technician.png"
                  class="object-cover size-full"
                  alt=""
                />
              </div>

              <span class="text-[rgba(0,0,0,1)] text-[16px]"
                >Võ thị Bích Phượng</span
              >
              <ChevronRight class="size-4 text-[rgba(173,139,108,1)]" />
            </div>
          </div>

          <div
            class="flex justify-between items-center text-[16px] font-semibold"
          >
            <span class="">Tổng thanh toán</span>
            <span class="font-bold text-[rgba(243,99,99,1)]"
              >{{ useCartStore().totalAmount }}{{ CURRENCY_SYMBOL["vi"] }}</span
            >
          </div>
        </div>

        <button
          class="bg-[rgba(130,76,8,1)] hover:text-[rgba(130,76,8,1)] border-[rgba(130,76,8,1)] py-3 px-5 text-base font-medium text-[rgba(250,245,235,1)] hover:bg-[rgba(250,245,235,1)] border transition-colors duration-300 cursor-pointer flex justify-between items-center group"
        >
          <span>{{ $t("continue") }}</span>
          <ArrowRight
            class="size-6 group-hover:scale-120 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMAGES } from "@/constants/images";
import { useCartStore } from "@/stores/useCart";
import { CURRENCY_SYMBOL } from "@/utils/Currency";
import { convertDate } from "@/utils/dateConvert";
import {
  ArrowRight,
  ChevronRight,
  Clock8,
  Minus,
  Plus,
  X
} from "lucide-vue-next";
import { ref } from "vue";

const count = ref(0);
</script>
