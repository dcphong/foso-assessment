<template>
  <div class="relative w-full py-20 sm:py-28 lg:py-[178.5px]">
    <img
      src="../assets/images/healing-appointment.png"
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div class="bg-[rgba(82,60,20,0.64)] absolute inset-0"></div>
    <div
      class="mx-auto max-w-214 text-center relative text-white! gap-y-6 sm:gap-y-8 lg:gap-y-10 flex flex-col w-full px-4 sm:px-6"
    >
      <div class="gap-y-3 flex flex-col">
        <span
          class="text-3xl sm:text-5xl lg:text-[72px] font-normal leading-tight"
        >
          {{ $t("schedule_a_healing_appointment") }}
        </span>
        <span class="text-base sm:text-xl lg:text-[24px] font-normal">
          {{
            $t(
              "come_toThe_OM_Lounge_to_relieve_stress_and_refresh_yourself_Beauty_starts_from_the_smallest_things_and_spreads_to_the_soul_Make_a_healing_appointment"
            )
          }}
        </span>
      </div>
      <button
        class="bg-white hover:bg-[rgba(130,76,8,1)]! transition-colors duration-300 hover:text-white text-[rgba(130,76,8,1)] cursor-pointer w-fit py-3 px-4 sm:px-5 mx-auto uppercase font-medium text-sm sm:text-base"
      >
        {{ $t("experience_now") }}
      </button>
    </div>
  </div>
</template>
