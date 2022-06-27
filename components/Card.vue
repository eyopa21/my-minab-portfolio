<template>
  <div class="mx-auto px-5 mb-3 mt-3">
    <div
      class="bg-bg_color rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        class="rounded-t-lg px-5 py-2 h-40 w-full"
        src="http://placeimg.com/640/480/sports"
        alt="image"
      />

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">
          {{props.projects.title}}
        </h5>

        <div class="text-xs font-bold uppercase text-white mt-1 mb-2">
          {{props.projects.subTitle}}
        </div>
        <p class="mb-3 font-normal text-secondary dark:text-gray-400">
          {{props.projects.description}}
        </p>
        <Button name="See more" to="www.google.com"/>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['projects'])

</script>

