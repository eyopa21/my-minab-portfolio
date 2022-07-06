<script setup>
const barLoading = useBarLoading();
</script>

<template>
  <div>
    <Navbar />
    <headers name="<html>" /><br />
    <headers name="<body>" />
    <div v-if="barLoading" class="mb-96 text-center flex justify-center">
      <loadingBar v-if="barLoading" />
    </div>
    <slot v-else />
    <headers name="</body>" /> <br />
    <headers name="</html>" />

    <Footer />
  </div>
</template>
