<template>
  <div class="text-white text-sm">
    {{ props.skills.skill_name }}: {{ props.skills.level }}%
  </div>
  <div class="w-full max-w-md sm:w-96 h-1 bg-white relative rounded-full">
    <div
      class="h-full rounded-l-full absolute bg-green-400"
      :style="{ width: `${props.skills.level}%` }"
      
    ></div>
  </div>

  <br /><br />
</template>
<script setup>
const props = defineProps(["skills"]);
</script>