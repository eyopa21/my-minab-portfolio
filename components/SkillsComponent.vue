<template>
  <div>
    <section id="skills" class="mb-32 flex flex-col lg:flex-row justify-start ml-2 md:ml-16 mx-auto mt-10">
      
        <div class="flex flex-col mb-32 space-y-6 lg:w-1/2">
          <h1 class="text-4xl md:text-7xl font-bold text-left md:text-left text-primary font-serif mr-8">
            Skills and Experience
          </h1>
          <p class="text-left text-secondary md:text-left mr-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="ml-4 md:ml-12 mr-2">
          <div v-for="skill in skills" :key="skill">
            <ProgressBar :skills= 'skill'/>
          </div>
        </div>
        
        

    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const skills = ref([{
  name: 'html',
  level: 50,
  color: 'bg-gray-300'
},
{
  name: 'css',
  level: 40,
  color: 'bg-green-300'
},
{
  name: 'js',
  level: 30,
  color: 'bg-blue-300'
},
{
  name: 'vue',
  level: 90,
  color: 'bg-red-300'
},
])

</script>