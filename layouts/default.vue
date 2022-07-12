<script setup>
const barLoading = useBarLoading();
</script>

<template>
  <div>
    <Navbar />
    <headers name="<html>" /><br />
    <headers name="<body>" class="mb-128"/>
    <div v-if="barLoading" class="mb-[660px] w-full text-center flex justify-center">
      <loadingBar v-if="barLoading" />
    </div>
    <slot v-else class="min-h-screen"/>
     
    <headers name="</body>" class="mt-96 pt-128" /> <br />
    <headers name="</html>" />

    <Footer :class="barLoading? 'mt-128' : ''"/>
   
  </div>
</template>
