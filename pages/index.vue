<template>
  <section
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
      mb-32
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
          leading-[70px]
        "
      >
        <alphabets name="H" /><alphabets name="i" />,<br />
        <alphabets name="I" />'<alphabets name="m" class="mr-4" />
        <alphabets name="E" class=" text-5xl lg:text-8xl font-test2" /><alphabets name="y" /><alphabets
          name="o"
        /><alphabets name="b" /> <br />
        <alphabets name="S" /><alphabets name="o" /><alphabets
          name="f"
        /><alphabets name="t" /><alphabets name="w" /><alphabets
          name="a"
        /><alphabets name="r" /><alphabets name="e" class="mr-4" />
        <alphabets name="e" /><alphabets name="n" /><alphabets
          name="g"
        /><alphabets name="i" /><alphabets name="n" /><alphabets
          name="e"
        /><alphabets name="e" /><alphabets name="r" />
      </h1>

      <headers name="</h1>" />

      <p class="text-left tracking-widest text-blue-600">
        <headers name="<p>" /> Website developer and UI/UX designer<headers
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
  </section>
</template>
<script setup>
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