<template>
    <div>
        <div class="relative bg-black w-32 text-white text-center text-xs rounded py-1 px-4 right-0 bottom-full">
      {{props.name}}
      
    </div>
    </div>
</template>

<script setup>

const props = defineProps(['name'])

</script>