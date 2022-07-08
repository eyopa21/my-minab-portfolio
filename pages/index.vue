<template>
  <div
  v-if="homePage"
    id="home"
    class="
      font-serif
      flex
      md:flex-row
      ml-2
      md:ml-8
      xl:ml-16
      px-2
      mx-auto
      mt-0
      text-primary
      
    "
  >
    <div class="flex flex-col mb-32 space-y-4 w-full">
      <headers name="<h1>" />
      <h1
        
        class="
          text-3xl
          sm:text-[46px]
          md:text-[80px]
          font-bold
          text-left
          md:leading-[70px]
        "
      >
        <alphabets :name="heading[0]" /><alphabets
          :name="heading[1]"
        /><alphabets :name="heading[2]" /><br />
        <alphabets :name="heading[4]" /><alphabets
          :name="heading[5]"
        /><alphabets :name="heading[6]" class="mr-4" />
        <alphabets :name="heading[8]" class="lg:text-8xl font-test2" /><alphabets
         :name="heading[9]"
        /><alphabets :name="heading[10]" /><alphabets :name="heading[11]" /><alphabets :name="heading[12]" /><br />
        <alphabets :name="heading[14]" /><alphabets :name="heading[15]" /><alphabets
          :name="heading[16]"
        /><alphabets :name="heading[17]" /><alphabets
          :name="heading[18]"
        /><alphabets :name="heading[19]" /><alphabets :name="heading[20]" />
        <alphabets :name="heading[21]" class="mr-4"/><alphabets :name="heading[23]" /><alphabets :name="heading[24]" /><alphabets
         :name="heading[25]"
        /><alphabets :name="heading[26]" /><alphabets :name="heading[27]" /><alphabets
          :name="heading[28]"
        /><alphabets :name="heading[29]" /><alphabets :name="heading[30]" />
      </h1>

      <headers name="</h1>" />

      <p class="text-left tracking-widest text-blue-600">
        <headers name="<p>" /> {{homePage.description}}<headers
          name="</p>"
        />
      </p>

      <div class="pt-16">
        <headers name="<button>" /><Button
          class="pt-4 pb-4"
          name="Contact me!"
          to="/contact"
        /><headers name="</button>" />
      </div>
    </div>

    <div class="flex justify-end mb-32 mt-64 mr-2">
      <SocialLinks />
    </div>
  </div>
</template>
<script setup>
const homePage = useHomePage();
const heading = ref("");
heading.value = homePage.value.header;

useHead({
  title: "Home page",
  meta: [
    {
      name: " Home page",
      content: "Eyob nigussie Home page",
    },
  ],
});
</script>