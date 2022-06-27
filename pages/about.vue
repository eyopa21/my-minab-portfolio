<template>
    <div>
        <AboutComponent/>
    </div>
</template>
<script setup>

const alert = useAlert()
console.log("the composable", alert.value)

</script>