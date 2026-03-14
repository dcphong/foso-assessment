<template>
  <div class="flex flex-col gap-12" :class="props.class">
    <div class="relative" :class="pictureContainerClass">
      <img
        :src="props.review_picture"
        :alt="props.customer_name"
        :class="props.pictureClass"
        class="object-cover w-full"
      />
      <img
        src="../assets/images/dauphayvang.png"
        class="absolute -bottom-4 right-0 w-16"
        alt=""
      />
    </div>
    <div class="flex gap-6">
      <div class="size-24! rounded-full overflow-hidden shrink-0">
        <img
          :src="props.customer_picture"
          :alt="props.customer_name"
          class="object-cover w-full h-full"
        />
      </div>
      <div
        :class="props.commentContainerClass"
        class="flex flex-col gap-6 text-start w-fit text-white"
      >
        <span class="font-bold text-5xl">{{ props.customer_name }}</span>
        <div class="flex flex-col text-[28px] font-normal">
          <span>{{ props.comment }}...</span>
          <span class="text-[rgba(188,151,140,1)]! underline cursor-pointer">{{
            $t("viewMore")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    review_picture: string;
    customer_picture: string;
    customer_name: string;
    comment: string;
    class?: string;
    pictureContainerClass?: string;
    pictureClass?: string;
    commentContainerClass?: string;
  }>(),
  {}
);
</script>
