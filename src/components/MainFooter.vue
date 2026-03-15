<template>
  <div class="bg-[rgba(41,30,10,1)] py-16 px-24 relative">
    <img
      src="../assets/images/flower.png"
      class="absolute top-0 right-0"
      alt=""
    />

    <div class="flex flex-col gap-32">
      <div class="grid grid-cols-2 gap-4 w-full">
        <img src="../assets/images/logo.png" alt="" class="" />
        <div class="flex flex-col gap-24">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-8 items-start">
              <div class="gap-x-4 flex items-center">
                <div class="flex gap-1.25 p-0 m-0">
                  <div
                    class="size-2 rounded-full bg-[rgba(177,152,121,1)]"
                  ></div>
                  <div
                    class="size-2 rounded-full border-2 border-[rgba(177,152,121,1)]"
                  ></div>
                </div>

                <span
                  class="text-[rgba(177,152,121,1)] font-medium text-[10px] p-0 m-0"
                >
                  SITEMAP
                </span>
              </div>
              <div class="w-32">
                <span
                  class="text-[rgba(245,234,214,1)] text-[28px] font-normal"
                >
                  {{ $t("home") }}
                  {{ $t("introduction") }}
                  {{ $t("service") }}
                </span>
              </div>
            </div>

            <div
              class="w-full h-[114px] text-[rgba(245,234,214,1)] text-[28px] font-normal items-end flex"
            >
              <div class="w-28 align-end">
                <span>
                  {{ $t("news") }}
                  {{ $t("contact") }}
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-8">
              <div class="gap-x-4 flex items-center">
                <div class="flex gap-1.25 p-0 m-0">
                  <div
                    class="size-2 rounded-full bg-[rgba(177,152,121,1)]"
                  ></div>
                  <div
                    class="size-2 rounded-full border-2 border-[rgba(177,152,121,1)]"
                  ></div>
                </div>

                <span
                  class="text-[rgba(177,152,121,1)] font-medium text-[10px] p-0 m-0"
                >
                  {{ $t("contact") }}
                </span>
              </div>

              <div
                class="flex flex-col gap-2 text-[14px] font-medium text-[rgba(245,234,214,1)] w-[287px]"
              >
                <span>+84 89 812 12 97</span>
                <span>
                  {{ $t("street6PhuMy7districthcmcity") }}
                </span>
                <div class="flex flex-col">
                  <div class="flex gap-2">
                    <span> {{ $t("mondayFriday") }}</span>
                    <span>09:00 - 19:00</span>
                  </div>
                  <div class="flex gap-2">
                    <span> {{ $t("saturdaySunday") }}</span>
                    <span>09:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="h-[66px] flex items-end relative">
              <span
                class="font-semibold text-[14px] text-[rgba(252,228,140,1)]"
                >{{ $t("bookNow") }}</span
              >
              <img
                src="../assets/images/yellow-circle.png"
                class="absolute -bottom-19 -left-20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <img src="../assets/images/socialMedia.png" class="h-7" alt="" />
        <span class="text-[10px] text-[rgba(98,91,90,1)]"
          >© 2025 — Copyright The OM Lounge. All rights reserved.</span
        >
      </div>
    </div>
  </div>
</template>
