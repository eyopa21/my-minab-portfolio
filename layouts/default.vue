<script setup>
const barLoading = useBarLoading();
</script>

<template>
  <div>
    <Navbar />
    <headers name="<html>" /><br />
    <headers name="<body>" />
    <div v-if="barLoading" class="mb-[560px] text-center flex justify-center">
      <loadingBar v-if="barLoading" />
    </div>
    <slot v-else class="min-h-screen"/>
    <headers name="</body>" /> <br />
    <headers name="</html>" />

    <Footer :class="barLoading? 'mt-128' : ''"/>
  </div>
</template>
