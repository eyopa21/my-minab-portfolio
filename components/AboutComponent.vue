<template>
  <section
  v-if="aboutPage"
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
            <div class="flex flex-row">
              <div
                class="flex flex-row"
                v-for="i in aboutPage.header"
                :key="i"
              >
                <div v-if="i >= 'A' && i <= 'Z' || i == '&'">&nbsp;</div>
                <alphabets :name="i" />
              </div>
            </div>
      </h1>
      <headers name="</h2>" />

      <headers name="<p>" />
      <p class="max-w-3xl mr-2 text-left text-secondary md:text-left">
        {{ aboutPage.description }}
      </p>
      <headers name="</p>" />
    </div>

    <div class="container mx-auto md:w-1/3">
      <headers name="<img>" />
      <img
        :src="footer[0].picture"
        alt="image"
       loading="lazy" 
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
const aboutPage = useAboutPage();
const footer = useFooter()
</script>