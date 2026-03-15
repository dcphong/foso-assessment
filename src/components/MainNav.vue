<template>
  <nav
    class="flex gap-15.5 [&>span]:text-[20px] text-white/72 font-normal align-middle w-fit [&>span]:hover:text-[rgba(225,192,132,1)] [&>span]:transition-all [&>span]:duration-300 [&>span]:cursor-pointer"
  >
    <span>
      {{ $t("home") }}
    </span>
    <span>
      {{ $t("introduction") }}
    </span>
    <span>
      {{ $t("service") }}
    </span>
    <span>
      {{ $t("contact") }}
    </span>
    <span>
      {{ $t("news") }}
    </span>
  </nav>
</template>
