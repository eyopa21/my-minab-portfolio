<template>
  <nav class="relative bg-bg_color text-white text-lg mx-auto p-6 font-serif">
    <div class="flex justify-between items-center">
      <div class=" text-5xl">Eyoba</div>
      <div class="hidden md:flex">
        <NuxtLink to="/" :class="[$route.fullPath == ('/') ? 'border-primary' : 'border-white']" class="hover:text-primary md:px-8 lg:px-12 border-b-2 pb-2 ">Home</NuxtLink>
        <NuxtLink to="/about" :class="[$route.fullPath == ('/about') ? 'border-primary' : 'border-white']" class="hover:text-primary md:px-8 lg:px-12 border-b-2 pb-2 ">About</NuxtLink>
        <NuxtLink to="/skills" :class="[$route.fullPath == ('/skills') ? 'border-primary' : 'border-white']" class="hover:text-primary md:px-8 lg:px-12 border-b-2 pb-2 ">Skills</NuxtLink>
        <NuxtLink to="/projects" :class="[$route.fullPath == ('/projects') ? 'border-primary' : 'border-white']" class="hover:text-primary md:px-8 lg:px-12 border-b-2 pb-2">Projects</NuxtLink>
        <NuxtLink to="/contact" :class="[$route.fullPath == ('/contact') ? 'border-primary' : 'border-white']" class="hover:text-primary md:px-8 lg:px-12 border-b-2 pb-2">Contact</NuxtLink>
      </div>
      <div class="md:hidden">
        <div
          v-if="displayMenu"
        @click="displayMenu = false"
          id="menu"
          class="
            absolute
            flex 
            flex-col
            items-center
            self-end
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
          <NuxtLink to="/" :class="[$route.fullPath == ('/') ? 'text-primary' : 'text-secondary']" class="hover:text-primary">Home</NuxtLink>
          <NuxtLink to="/about" :class="[$route.fullPath == ('/about') ? 'text-primary' : 'text-secondary']" class="hover:text-primary">About</NuxtLink>
          <NuxtLink to="/skills" :class="[$route.fullPath == ('/skills') ? 'text-primary' : 'text-secondary']" class="hover:text-primary">Skills</NuxtLink>
          <NuxtLink to="/projects" :class="[$route.fullPath == ('/projects') ? 'text-primary' : 'text-secondary']" class="hover:text-primary">Projects</NuxtLink>
          <NuxtLink to="/contact" :class="[$route.fullPath == ('/contact') ? 'text-primary' : 'text-secondary']" class="hover:text-primary">Contact</NuxtLink>
        </div>
      </div>

      <div class="block md:hidden">
        <button
          v-if="displayMenu == false"
          @click="displayMenu = !displayMenu"
          id="menu-btn"
          class="focus-outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:stroke-primary hover:h-8 hover:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          v-else
          @click="displayMenu = !displayMenu"
          id="menu-btn"
          class="focus-outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:stroke-primary hover:h-8 hover:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>

</template>
<script setup>
import { ref } from "@vue/reactivity";
import {useRouter} from 'vue-router'

const router = useRouter()

//console.log(router)

const displayMenu = ref(false);


function onResize(){

  console.log("on resize")
  displayMenu.value = false;
}
if(process.client){
  window.addEventListener('resize', onResize)
}
</script>
