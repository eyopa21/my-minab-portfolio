<template>
  <div>
    <AboutComponent />
    <div
      class="
      flex
      justify-start
        text-md
        underline
        ml-16
        text-3xl
        md:text-6xl
        xl:text-7xl
        font-bold
        text-left
        font-serif
        text-primary
        mb-8
      "
    >
    
      <alphabets name="B" />
      <alphabets name="a" />
      <alphabets name="c" />
      <alphabets name="k" />

      <alphabets name="g" />
      <alphabets name="r" />
      <alphabets name="o" />
      <alphabets name="u" />
      <alphabets name="n" />
      <alphabets name="d" />
      <IdentificationIcon  class="h-16 w-16 hover:animate-pulse"/>
    </div>
<div class="flex justify-center">
    <TimeTimeline/>
</div>
  </div>
</template>
<script setup>
import { IdentificationIcon } from "@heroicons/vue/solid";


useHead({
  title: "About page",
  meta: [
    {
      name: " about page",
      content: "Eyob nigussie About page",
    },
  ],
});
</script>