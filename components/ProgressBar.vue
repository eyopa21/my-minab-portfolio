<template>
    <div class="text-white">
        {{props.skills.name}}: {{props.skills.level}}%
    </div>
  <div class="w-96 h-1 bg-gray-400 relative rounded-full">
    <div
      class="h-full rounded-l-full absolute "
      :style="{'width': `${props.skills.level}%`}"
      :class="[props.skills.color ? `${props.skills.color}`: 'bg-primary']"
    ></div>
  </div>

  <br /><br />
</template>
<script setup>
const props = defineProps(['skills'])

</script>