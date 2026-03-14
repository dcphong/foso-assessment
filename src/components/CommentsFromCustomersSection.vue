<template>
  <section class="relative">
    <img
      src="../assets/images/main-bg.png"
      alt=""
      class="absolute inset-0 w-full h-full z-0 object-cover"
    />
    <div
      class="bg-linear-to-t from-[rgba(97,79,56,1)] to-[rgba(164,120,40,0.2)] relative py-24 space-y-12"
    >
      <div class="flex flex-col w-fit mx-auto text-center relative">
        <div class="flex mb-24 flex-col text-white">
          <span class="uppercase text-[48px]">{{ $t("comments_from") }}</span>
          <span class="text-[128px] capitalize">{{ $t("customer") }}</span>
        </div>
        <div class="flex gap-16.5 px-12 items-end justify-between">
          <CustomerComment
            v-for="(comment, index) in customer_comments"
            :picture-class="index == 1 ? 'h-[928px] max-h-none' : 'h-[664px]!'"
            :picture-container-class="
              index == 1 ? 'max-h-none' : 'max-h-[664px]! w-[498px]'
            "
            :class="index == 1 ? 'w-[696px]' : 'w-[498px]'"
            :commentContainerClass="index == 1 ? '' : 'max-h-[288px]'"
            :key="comment.customer_name"
            v-bind="comment"
          />
        </div>
        <PaginationCustom class="mt-12 mx-auto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PaginationCustom from "@/components/common/PaginationCustom.vue";
import ProfileCustomer1 from "@/assets/images/customers/profile-customer-1.png";
import ProfileCustomer2 from "@/assets/images/customers/profile-customer-2.png";
import ProfileCustomer3 from "@/assets/images/customers/profile-customer-3.png";
import ReviewPicture1 from "@/assets/images/customers/customer-1.png";
import ReviewPicture2 from "@/assets/images/customers/customer-2.png";
import ReviewPicture3 from "@/assets/images/customers/customer-3.png";
import CustomerComment from "@/components/CustomerComment.vue";

const customer_comments = [
  {
    review_picture: ReviewPicture1,
    customer_picture: ProfileCustomer1,
    customer_name: "Thuỳ Đỗ",
    comment:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích"
  },
  {
    review_picture: ReviewPicture2,
    customer_picture: ProfileCustomer2,
    customer_name: "Thuỳ Đỗ",
    comment:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích"
  },
  {
    review_picture: ReviewPicture3,
    customer_picture: ProfileCustomer3,
    customer_name: "John Doe",
    comment:
      "Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích"
  }
];
</script>
