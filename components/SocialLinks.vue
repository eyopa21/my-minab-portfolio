<script setup>
import { PhoneIncomingIcon } from "@heroicons/vue/outline";
import { MailIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const socialLinks = useSocialLinks()


const showPhoneTooltip = ref(false);
const showEmailTooltip = ref(false);
const showFacebookTooltip = ref(false);
const showLinkedinTooltip = ref(false);
</script>

<template>
 
  <div
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
  </div>

  <div v-if="socialLinks[0].value" class="flex flex-col justify-center text-white">
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
    <a
      :href="socialLinks[2].value"
      target="_blank"
      class="h-8"
      ><svg
        @mouseover="showFacebookTooltip = true"
        @mouseleave="showFacebookTooltip = false"
        class="fill-white hover:fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"
        /></svg
    ></a>
    <a
      :href="socialLinks[3].value"
      target="_blank"
      class="h-8"
      ><svg
        @mouseover="showLinkedinTooltip = true"
        @mouseleave="showLinkedinTooltip = false"
        class="fill-white h-6 w-4 ml-2 hover:fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 00-.145-.028A3.207 3.207 0 0012.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 00-2.676-3.448z"
        />
        <circle cx="1.75" cy="1.75" r="1.75" /></svg
    ></a>
  </div>


</template>

