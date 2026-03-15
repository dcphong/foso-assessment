<template>
  <div
    v-if="useCartStore().openCartPanel"
    class="w-full sm:max-w-104 bg-white fixed z-998 h-screen top-0 right-0 pt-20 sm:pt-27"
  >
    <button
      class="absolute top-4 left-4 sm:top-5 sm:left-5 cursor-pointer"
      @click="
        () => {
          (useCartStore().toggleCartPanel(),
            useBackdropStore().toggleBackdrop());
        }
      "
    >
      <X class="text-[rgba(130,76,8,1)] size-6" />
    </button>

    <div
      class="flex flex-col justify-between h-full border-t border-[#b28042b3] overflow-hidden"
    >
      <div
        class="py-4 sm:py-6 capitalize w-full text-center text-[rgba(130,76,8,1)] text-2xl sm:text-[32px] font-normal border-b border-[rgba(130,76,8,0.2)] px-12"
      >
        <span v-if="useCartStore().step != 2">{{ $t("cart") }}</span>
        <span v-else>{{ $t("verifyBooking") }}</span>
      </div>

      <div
        v-if="useCartStore().step != 2"
        class="flex flex-col flex-1 overflow-y-auto min-h-0"
      >
        <div
          class="flex-col flex"
          v-for="(item, index) in useCartStore().cartItems"
          :key="index"
        >
          <div
            class="p-3 sm:p-4 flex gap-3 sm:gap-4"
            v-if="item.type != 'effect'"
          >
            <div class="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden shrink-0">
              <img
                :src="IMAGES[Number(item.image)]"
                alt=""
                class="object-cover h-full w-full"
              />
            </div>

            <div
              class="flex flex-col gap-2 sm:gap-3 w-full justify-center min-w-0"
            >
              <div class="flex justify-between items-start gap-2.5">
                <span class="text-sm font-semibold text-black">{{
                  item.title
                }}</span>

                <button class="m-0 p-0">
                  <X class="size-4 text-[rgba(180,170,155,1)]" />
                </button>
              </div>

              <div
                class="flex flex-col sm:flex-row justify-between sm:items-center text-[rgba(91,97,109,1)] text-xs sm:text-sm gap-1 sm:gap-2"
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

          <div
            v-else
            class="py-2 px-3 sm:px-4 flex gap-3 sm:gap-4 items-center"
          >
            <div class="size-10 overflow-hidden shrink-0">
              <img
                :src="IMAGES[Number(item.image)]"
                alt=""
                class="object-cover h-full w-full"
              />
            </div>

            <div
              class="w-full flex flex-col sm:flex-row text-[12px] text-[rgba(65,70,81,1)] justify-between sm:items-center gap-3"
            >
              <div>
                <span class="font-normal">{{ $t("effect") }}</span>
                <span class="font-bold">{{ $t("leopardSkin") }}</span>
              </div>
              <div
                class="rounded-full py-2 px-3 gap-3 flex border border-[rgba(98,91,90,1)] items-center max-w-25 w-full justify-center self-start sm:self-auto"
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

      <div
        v-else
        class="py-4 sm:py-6 px-3 sm:px-4 gap-4 flex flex-col flex-1 overflow-y-auto min-h-0"
      >
        <div class="flex flex-col gap-4">
          <div
            v-for="(input, index) in ['customerName', 'phone']"
            :key="index"
            class="flex flex-col gap-1"
          >
            <label class="text-[rgba(82,60,20,1)] text-3" for="customerName">{{
              $t(input)
            }}</label>
            <input
              :placeholder="
                $t('enter' + input.charAt(0).toUpperCase() + input.slice(1))
              "
              type="text"
              name="customerName"
              class="w-full outline-0 h-8.75 border-[rgba(0,0,0,0.16)] border-b"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="h-6 align-bottom text-[rgba(82,60,20,1)] text-[12px]">
            <span>{{ $t("pickDate") }}</span>
          </div>

          <div
            class="gap-2 sm:gap-3 flex w-full overflow-x-auto vertical-scrollbar pb-1"
          >
            <div
              v-for="(day, index) in availablesDays"
              :key="index"
              class="hover:bg-[rgba(246,198,73,1)] bg-[rgba(229,227,220,1)] p-3 sm:p-4 flex flex-col text-center min-w-20 sm:min-w-22.25 text-[rgba(41,30,10,1)] transition-colors duration-300 cursor-pointer"
            >
              <span class="font-semibold capitalize text-sm">{{
                day.dayName
              }}</span>
              <span class="text-[10px]">{{ day.dateStr }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="h-6 align-bottom text-[rgba(82,60,20,1)] text-[12px]">
            <span>{{ $t("pickTime") }}</span>
          </div>

          <div
            class="gap-2 sm:gap-3 grid grid-cols-3 sm:grid-cols-4 w-full overflow-y-auto vertical-scrollbar pr-1"
          >
            <div
              v-for="(time, index) in [
                '09:00',
                '09:30',
                '10:00',
                '10:30',
                '11:00'
              ]"
              :key="index"
              class="hover:bg-[rgba(185,121,81,1)] bg-[rgba(229,227,220,1)] p-3 sm:p-4 flex flex-col text-center min-w-0 text-[rgba(41,30,10,1)] transition-colors duration-300 cursor-pointer"
            >
              <span class="font-semibold capitalize text-sm">{{ time }}</span>
              <span class="text-[10px]">AM</span>
            </div>
            <div
              v-for="(time, index) in [
                '01:30',
                '02:00',
                '02:30',
                '03:00',
                '03:30',
                '04:00',
                '04:30',
                '05:00',
                '05:30',
                '06:00',
                '06:30'
              ]"
              :key="index"
              class="hover:bg-[rgba(185,121,81,1)] bg-[rgba(229,227,220,1)] p-3 sm:p-4 flex flex-col text-center min-w-0 text-[rgba(41,30,10,1)] transition-colors duration-300 cursor-pointer"
            >
              <span class="font-semibold capitalize text-sm">{{ time }}</span>
              <span class="text-[10px]">PM</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="py-4 px-3 sm:px-4 gap-4 sm:gap-6 flex flex-col border-t border-[rgba(130,76,8,0.08)]"
      >
        <div v-if="useCartStore().step != 2" class="flex flex-col gap-4">
          <div
            class="flex flex-col sm:flex-row justify-between sm:items-center gap-3"
          >
            <span class="text-base font-normal text-[rgba(136,136,136,1)]">{{
              $t("technician")
            }}</span>

            <div class="flex gap-2 items-center min-w-0">
              <div class="size-6 rounded-full overflow-hidden shrink-0">
                <img
                  src="../assets/images/technician.png"
                  class="object-cover size-full"
                  alt=""
                />
              </div>

              <span class="text-[rgba(0,0,0,1)] text-[16px] truncate"
                >Võ thị Bích Phượng</span
              >
              <ChevronRight class="size-4 text-[rgba(173,139,108,1)]" />
            </div>
          </div>

          <div
            class="flex justify-between items-center text-[15px] sm:text-[16px] font-semibold gap-3"
          >
            <span class="">Tổng thanh toán</span>
            <span class="font-bold text-[rgba(243,99,99,1)]"
              >{{ useCartStore().totalAmount }}{{ CURRENCY_SYMBOL["vi"] }}</span
            >
          </div>
        </div>

        <button
          v-if="useCartStore().step != 2"
          :class="{
            'opacity-40 cursor-not-allowed! ': useCartStore().itemsCount < 1
          }"
          class="bg-[rgba(130,76,8,1)] hover:text-[rgba(130,76,8,1)] border-[rgba(130,76,8,1)] py-3 px-4 sm:px-5 text-sm sm:text-base font-medium text-[rgba(250,245,235,1)] hover:bg-[rgba(250,245,235,1)] border transition-colors duration-300 cursor-pointer flex justify-between items-center group"
          @click="
            () => {
              if (useCartStore().itemsCount > 0) useCartStore().nextStep();
            }
          "
        >
          <span>{{ $t("continue") }}</span>
          <ArrowRight
            class="size-6 group-hover:scale-120 transition-transform duration-300"
          />
        </button>
        <button
          v-else
          class="bg-[rgba(130,76,8,1)] hover:text-[rgba(130,76,8,1)] border-[rgba(130,76,8,1)] py-3 px-4 sm:px-5 text-sm sm:text-base font-medium text-[rgba(250,245,235,1)] hover:bg-[rgba(250,245,235,1)] border transition-colors duration-300 cursor-pointer flex justify-between items-center group"
          @click="
            () => {
              (useCartStore().clearCart(),
                useCartStore().toggleCartPanel(),
                useCartStore().openSuccessfullModal());
            }
          "
        >
          <span>{{ $t("book") }}</span>
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
import { useBackdropStore } from "@/stores/useBackdrop";
import { useCartStore } from "@/stores/useCart";
import { CURRENCY_SYMBOL } from "@/utils/Currency";
import { getDaysUntilWeekend } from "@/utils/date";
import { convertDate } from "@/utils/dateConvert";
import {
  ArrowRight,
  ChevronRight,
  Clock8,
  Minus,
  Plus,
  X
} from "lucide-vue-next";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const count = ref(0);
const availablesDays = computed(() => getDaysUntilWeekend(t));
</script>
