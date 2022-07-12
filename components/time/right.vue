<template>
  <div class="flex md:contents">
    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
      <div class="h-full w-6 flex items-center justify-center">
        <div class="h-full w-1 bg-primary pointer-events-none"></div>
      </div>
      <div
        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"
      ></div>
    </div>
    <div
      class="
        bg-gradient-to-br
        from-primary
        to-green-100
        opacity-50
        w-96
        col-start-6 col-end-10
        p-4
        rounded-xl
        my-4
        mr-auto
        shadow-md
        text-bg_color
      "
    >
      <h3 class="font-bold text-lg mb-1 uppercase">{{ props.title }}</h3>
      <h5 class="text-md mb-1 underline">{{ props.subtitle }}</h5>
      <p class="leading-tight">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["title", "subtitle", "description"]);
</script>