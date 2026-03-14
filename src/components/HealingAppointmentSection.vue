<template>
  <div class="relative w-full py-[178.5px]">
    <img
      src="../assets/images/healing-appointment.png"
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div class="bg-[rgba(82,60,20,0.64)] absolute inset-0"></div>
    <div
      class="mx-auto max-w-[856px] text-center relative text-white! gap-y-10 flex flex-col w-fit"
    >
      <div class="gap-y-3 flex flex-col">
        <span class="text-[72px] font-normal">
          {{ $t("schedule_a_healing_appointment") }}
        </span>
        <span class="text-[24px] font-normal">
          {{
            $t(
              "come_toThe_OM_Lounge_to_relieve_stress_and_refresh_yourself_Beauty_starts_from_the_smallest_things_and_spreads_to_the_soul_Make_a_healing_appointment"
            )
          }}
        </span>
      </div>
      <button
        class="bg-white hover:bg-[rgba(130,76,8,1)]! transition-colors duration-300 hover:text-white text-[rgba(130,76,8,1)] cursor-pointer w-fit py-3 px-5 mx-auto uppercase font-medium"
      >
        {{ $t("experience_now") }}
      </button>
    </div>
  </div>
</template>
