<template>
  <div class="text-white text-sm flex flex-row space-x-2 ml-2">
  <div class="w-8 h-8 mb-2" v-html="props.skills.iconSvg.svg"></div>
  <div class="pt-1">
    {{ props.skills.skill_name }}: {{ props.skills.level }}%
  </div>
  </div>
  <div class="w-full max-w-md sm:w-96 h-1 bg-white  rounded-full">
    <div
      class="h-full rounded-l-full bg-green-400"
      :style="{ width: `${props.skills.level}%` }"
      
    ></div>
  </div>

  <br /><br />
</template>
<script setup>
const props = defineProps(["skills"]);
console.log("sk", props.skills)
</script>