<template>
  <div class="flex justify-start">
    <nuxt-link
      :to="`${props.to}`"
      class="
        p-3
        px-6
        pt-2
        text-primary text-center
        tracking-wider
        bg-bg_color
        border-2 border-primary
        hover:text-black hover:bg-primary
      "
      >{{ props.name }}</nuxt-link
    >
  </div>
</template>
<script setup>
const props = defineProps(["name", "to"]);
</script>
