
<script setup>
const barLoading = useBarLoading();
</script>

<template>
  <div class="bg-bg_color">
  <div class="fixed w-full  left-0 top-0">
    <Navbar/>
  </div>
    <div class="mt-16 pt-8">
    <headers class="mt-8" name="<html>" /><br />
    <headers name="<body>"  />
    </div>
    <div
      v-if="barLoading"
      class="mb-[660px] w-full text-center flex justify-center"
    >
      <loadingBar  />
    </div>
    <slot v-else class="min-h-screen" />

    <div :class="barLoading?'':'mt-0'">
      <headers name="</body>" /> <br />
      <headers name="</html>" />
    </div>

    <Footer :class="barLoading ? 'mt-128' : 'mt-0'" />
  </div>
</template>
