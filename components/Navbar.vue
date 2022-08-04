<template>
  <div class="z-1000">
    <nav
      @resize="onResize()"
      class="
        relative
        border-b-[1px]
        md:border-b-[1px] md:border-gray-700
        mb-8
        border-white
        bg-bg_color
        text-white text-lg
        mx-auto
        p-6
        pb-4
        font-mono
        z-100
      "
    >
      <div class="flex justify-between items-center">
        <div
          v-if="footer[0]"
          class="font-logo text-3xl hover:translate-y-4 delay-100 duration-1000"
        >
          <NuxtLink to="/">{{ footer[0].logo }}</NuxtLink>
        </div>
        <div class="hidden md:flex">
          <NuxtLink
            to="/"
            :class="[
              $route.fullPath == '/' ? 'border-primary' : 'border-white',
            ]"
            class="hover:text-primary md:px-4 lg:px-12 border-b-2 pb-2"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/about"
            :class="[
              $route.fullPath == '/about' ? 'border-primary' : 'border-white',
            ]"
            class="hover:text-primary md:px-4 lg:px-12 border-b-2 pb-2"
            >About</NuxtLink
          >
          <NuxtLink
            to="/skills"
            :class="[
              $route.fullPath == '/skills' ? 'border-primary' : 'border-white',
            ]"
            class="hover:text-primary md:px-4 lg:px-12 border-b-2 pb-2"
            >Skills</NuxtLink
          >
          <NuxtLink
            to="/projects"
            :class="[
              $route.fullPath == '/projects'
                ? 'border-primary'
                : 'border-white',
            ]"
            class="hover:text-primary md:px-4 lg:px-12 border-b-2 pb-2"
            >Projects</NuxtLink
          >
          <NuxtLink
            to="/contact"
            :class="[
              $route.fullPath == '/contact' ? 'border-primary' : 'border-white',
            ]"
            class="hover:text-primary md:px-4 lg:px-12 border-b-2 pb-2"
            >Contact</NuxtLink
          >
        </div>
        <div class="md:hidden">
          <div
            v-if="displayMenu"
            @click="displayMenu = false"
            id="menu"
            class="
              absolute
              flex flex-col
              items-center
              py-8
              mt-10
              space-y-6
              bg-light_bg
              sm:w-auto sm:self-center
              left-0
              right-0
              drop-shadow-md
              text-secondary
            "
          >
            <NuxtLink
              to="/"
              :class="[
                $route.fullPath == '/' ? 'text-primary' : 'text-secondary',
              ]"
              class="hover:text-primary"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/about"
              :class="[
                $route.fullPath == '/about' ? 'text-primary' : 'text-secondary',
              ]"
              class="hover:text-primary"
              >About</NuxtLink
            >
            <NuxtLink
              to="/skills"
              :class="[
                $route.fullPath == '/skills'
                  ? 'text-primary'
                  : 'text-secondary',
              ]"
              class="hover:text-primary"
              >Skills</NuxtLink
            >
            <NuxtLink
              to="/projects"
              :class="[
                $route.fullPath == '/projects'
                  ? 'text-primary'
                  : 'text-secondary',
              ]"
              class="hover:text-primary"
              >Projects</NuxtLink
            >
            <NuxtLink
              to="/contact"
              :class="[
                $route.fullPath == '/contact'
                  ? 'text-primary'
                  : 'text-secondary',
              ]"
              class="hover:text-primary"
              >Contact</NuxtLink
            >
          </div>
        </div>

        <div class="block md:hidden">
          <button
            v-if="displayMenu == false"
            @click="displayMenu = !displayMenu"
            id="menu-btn"
            class="focus-outline-none"
          >
            <MenuIcon class="text-white w-6 h-6 mt-2 hover:text-primary" />
          </button>
          <button
            v-else
            @click="displayMenu = !displayMenu"
            id="menu-btn"
            class="focus-outline-none"
          >
            <XIcon class="text-white h-6 w-6 mt-2 hover:text-primary" />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { MenuIcon } from "@heroicons/vue/outline";
import { XIcon } from "@heroicons/vue/outline";

const router = useRouter();
const footer = useFooter();
const displayMenu = ref(false);

const onResize = () => {
  console.log("on resize");
  displayMenu.value = false;
};
if (process.client) {
  window.addEventListener("resize", onResize);
}
</script>
