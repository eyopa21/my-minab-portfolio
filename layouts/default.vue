
<script setup>
const barLoading = useBarLoading();
</script>

<template>
  <div>
    <Navbar />
    <headers name="<html>" /><br />
    <headers name="<body>"  />
    <div
      v-if="barLoading"
      class="mb-[660px] w-full text-center flex justify-center"
    >
      <loadingBar  />
    </div>
    <slot v-else class="min-h-screen" />

    <div :class="barLoading?'mt-128':'mt-0'">
      <headers name="</body>" /> <br />
      <headers name="</html>" />
    </div>

    <Footer :class="barLoading ? 'mt-128' : ''" />
  </div>
</template>
