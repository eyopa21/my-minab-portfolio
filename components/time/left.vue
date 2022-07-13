<template>
  <div class="flex flex-row-reverse md:contents">
    <div
      class="
        bg-gradient-to-br from-green-300 to-gray-600
        
        col-start-1 col-end-5
        p-4
        rounded-xl
        my-4
        ml-auto
        shadow-md
        text-bg_color
   
        w-88
        md:w-92
        lg:w-96
      "
    >
      <h3 class="font-bold text-lg uppercase">{{props.title}}</h3>
      <h5 class="text-md mb-1 underline">{{props.subtitle}}</h5>
      <p class="leading-tight">
        {{props.description}}
      </p>
    </div>
    <div class=" md:mx-auto mr-10">
      <div class="h-full w-6 flex items-center justify-center">
        <div class="h-full w-1 bg-primary pointer-events-none"></div>
      </div>
      
    </div>
  </div>
</template>

<script setup>

const props =  defineProps(['title', 'subtitle', 'description'])

</script>