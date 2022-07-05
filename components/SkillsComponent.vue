<template>
 
    <section id="skills" class="mb-64 flex flex-col lg:flex-row justify-start ml-2 md:ml-16 mx-auto">
      
        <div class="flex flex-col mb-16 space-y-6 lg:w-1/2 lg:ml-8">
          <h1 class="text-5xl md:text-7xl font-bold text-left md:text-left text-primary font-serif mr-8">
            Skills and Experience
          </h1>
          <p class="text-left text-secondary md:text-left mr-2">
           When I started University, I have tried to learn the basics of programming like C++, Object oriented programming,JAVA and Python. But when I give more time for programming I am starting prefer to use javascript language as a whole for the simplicity and Portablity of it.
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
  name: 'html,css & Javascript',
  level: 70,
  color: 'bg-green-600'
},
{
  name: 'Vue js',
  level: 80,
  color: 'bg-green-600'
},
{
  name: 'BackEnd/Node js',
  level: 65,
  color: 'bg-green-600'
},
{
  name: 'Quasar',
  level: 90,
  color: 'bg-green-600'
},
{
  name: 'Cordova/electron/tauri',
  level: 50,
  color: 'bg-green-600'
},
{
  name: 'P5 js',
  level: 70,
  color: 'bg-green-600'
},
{
  name: 'Game development',
  level: 50,
  color: 'bg-green-600'
},
])

</script>