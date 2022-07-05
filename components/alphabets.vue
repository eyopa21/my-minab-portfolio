<template>
  <span class="hover:animate-ping duration-75">{{ props.name }}</span>
</template>

<script setup>
const props = defineProps(["name"]);
</script>