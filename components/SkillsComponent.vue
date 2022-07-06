<template>
  <section
    id="skills"
    class="mb-64 flex flex-col lg:flex-row justify-start ml-2 md:ml-16 mx-auto"
  >
    <div class="flex flex-col mb-16 space-y-6 lg:w-1/2 lg:ml-8">
      <headers name="<h2>" />
      <h1
        class="
          text-5xl
          md:text-7xl
          font-bold
          text-left
          md:text-left
          text-primary
          font-serif
          mr-8
        "
      >
        <alphabets name="S" /><alphabets name="k" /><alphabets
          name="i"
        /><alphabets name="l" /><alphabets name="l" /><alphabets
          name="s"
          class="mr-4"
        /><alphabets name="a" /><alphabets name="n" /><alphabets
          name="d"
          class="mr-4"
        /><br /><alphabets name="e" /><alphabets name="x" /><alphabets
          name="p"
        /><alphabets name="e" /><alphabets name="r" /><alphabets
          name="i"
        /><alphabets name="e" /><alphabets name="n" /><alphabets
          name="c"
        /><alphabets name="e" /><alphabets name="s" />
      </h1>
      <headers name="</h2>" />
      <headers name="<p>" />
      <p class="text-left text-secondary md:text-left mr-2">
       {{skillsContent}}
      </p>
      <headers name="</p>" />
    </div>
    <div>
     
      <div class="ml-4 md:ml-12 mr-4 pr-4">
        <div v-for="skill in skills" :key="skill">
          <ProgressBar :skills="skill" />
        </div>
      </div>
      
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const skills = useSkills()
const skillsContent = useSkillsContent()
</script>