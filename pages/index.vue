<template>
  <section
    id="hero"
    class="
      font-serif
      flex
      md:flex-row
      ml-2
      md:ml-8
      xl:ml-16
      px-2
      mx-auto
      mt-16
      text-primary
      mb-32
    "
  >
    <div class="flex flex-col mb-32 space-y-4 w-full">
    
      <h1
        class="
          text-3xl
          sm:text-[46px]
          md:text-7xl
          lg:text-8xl
          font-bold
          text-left
          leading-[46px]
        "
      >
        Hi,<br />
        I'm Eyob <br />
        Software engineer
      </h1>
      <p class="text-left tracking-widest text-blue-600">
        Website developer and UI/UX designer
      </p>

      <div class="pt-16">
        <Button name="Contact me!" to="/contact" />
      </div>
    </div>

    <div class="flex justify-end mb-32 mt-64">
      <SocialLinks />
    </div>

    
  </section>

  
</template>
<script setup>

useHead({
  title: "Home page",
  meta: [
    {
      name: " home page",
      content: "Eyob nigussie Home page",
    },
  ],
});
</script>