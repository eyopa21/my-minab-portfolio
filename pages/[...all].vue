<template>
    <h1 class="text-4xl text-center mb-96">status 404, page not found <br>Redirecting...</h1>
</template>
<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()
    router.push('/')
</script>