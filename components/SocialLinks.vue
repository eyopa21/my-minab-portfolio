<script setup>
import { PhoneIncomingIcon } from "@heroicons/vue/outline";
import { MailIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const socialLinks = useSocialLinks();

const showPhoneTooltip = ref(false);
const showEmailTooltip = ref(false);
const showFacebookTooltip = ref(false);
const showLinkedinTooltip = ref(false);
</script>

<template>
  <!--div
    v-if="showPhoneTooltip && socialLinks[0].value"
    class="absolute mr-6 mt-[50px] md:mt-[97px] text-white text-xs md:text-md"
  >
    {{socialLinks[0].value}}
  </div>
  <div
    v-if="showEmailTooltip && socialLinks[1].value"
    class="absolute mr-6 mt-[80px] md:mt-[127px] text-white text-xs md:text-md"
  >
     {{socialLinks[1].value}}
  </div>
  <div
   v-if="showFacebookTooltip && socialLinks[2].value"
    class="absolute mr-6 mt-[110px] md:mt-[160px] text-white text-xs md:text-md"
  >
    Job nigussie
  </div>
  <div
   v-if="showLinkedinTooltip && socialLinks[3].value"
    class="absolute mr-6 mt-[140px] md:mt-[195px] text-white text-xs md:text-md"
  >
    Job Nigussie
  </div-->

  <div
    v-if="socialLinks[0].value"
    class="flex flex-col justify-center text-white"
  >
    <a href="tel:+251918784596" class="h-8">
      <PhoneIncomingIcon
        class="text-white w-6 h-6 hover:stroke-primary"
        @mouseover="showPhoneTooltip = true"
        @mouseleave="showPhoneTooltip = false"
    /></a>
    <a href="/contact" class="h-8"
      ><MailIcon
        class="text-white w-6 h-6 hover:stroke-primary"
        @mouseover="showEmailTooltip = true"
        @mouseleave="showEmailTooltip = false"
    /></a>

    <div v-for="link in socialLinks" :key="link">
      <a :href="link.value" target="_blank" class="h-8"
        ><div v-html="link.iconSvg.svg" class="h-6 w-6 mt-4"></div
      ></a>
    </div>
  </div>
</template>

