<template>
  <section
    id="about"
    class="mb-32 flex flex-col ml-2 md:ml-8 md:flex-row mx-auto"
  >
    <div class="flex flex-col mb-8 space-y-6 md:w-2/3 text-primary">
      <headers name="<h2>" />
      <h1
        class="
          text-5xl
          mr-8
          md:text-7xl
          xl:text-8xl
          font-bold
          text-left
          font-serif
        "
      >
        <alphabets name="M" /><alphabets name="e" />,<alphabets
          name="M"
        /><alphabets name="y" /><alphabets name="s" /><alphabets
          name="e"
        /><alphabets name="l" /><alphabets name="f" class="mr-4" /><alphabets
          name="&"
          class="mr-4"
        /><alphabets name="I" />
      </h1>
      <headers name="</h2>" />

      <headers name="<p>" />
      <p class="max-w-3xl mr-2 text-left text-secondary md:text-left">
        {{ aboutContent }}
      </p>
      <headers name="</p>" />
    </div>

    <div class="container mx-auto md:w-1/3">
      <headers name="<img>" />
      <img
        :src="image"
        alt="image"
        class="
          h-96
          w-full
          object-contain
          rounded-3xl
          mr-16
          pr-4
          hover:translate-y-4
          delay-100
          duration-1000
        "
      />
      <headers name="</img>" />
    </div>
  </section>
</template>
<script setup>
const aboutContent = useAboutContent();
const image = useImage();
</script>