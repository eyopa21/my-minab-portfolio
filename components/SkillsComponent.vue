<template>
 
    <section id="skills" class="mb-64 flex flex-col lg:flex-row justify-start ml-2 md:ml-16 mx-auto">
      
        <div class="flex flex-col mb-16 space-y-6 lg:w-1/2 lg:ml-8">
          <h1 class="text-5xl md:text-7xl font-bold text-left md:text-left text-primary font-serif mr-8">
            Skills and Experience
          </h1>
          <p class="text-left text-secondary md:text-left mr-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="ml-4 md:ml-12 mr-4 pr-4">
          <div v-for="skill in skills" :key="skill">
            <ProgressBar :skills= 'skill'/>
          </div>
        </div>
        
        

    </section>

</template>
<script setup>
import { ref } from 'vue';
const skills = ref([{
  name: 'html',
  level: 50,
  color: 'bg-green-600'
},
{
  name: 'css',
  level: 40,
  color: 'bg-green-600'
},
{
  name: 'js',
  level: 30,
  color: 'bg-green-600'
},
{
  name: 'vue',
  level: 90,
  color: 'bg-green-600'
},
])

</script>