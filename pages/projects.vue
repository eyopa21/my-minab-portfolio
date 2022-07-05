<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
  <div v-for="project in projects" :key="project">
  <Card :projects="project"/>
  </div>
  
</div>
        
   
</template>
<script setup>
import { ref } from 'vue';
const projects = ref([{
  title: 'GBI App',
  subTitle: 'Social media application for University students',
  description: "Gbi app is one of my projects aimed specifically for university student to chat with thier beloved ones, and to get thier future wives as well!!",
  link: 'https://gbi-date.web.app',
  image: '../assets/img/gbi-date.png'
},
{
  title: 'My instagram',
  subTitle: 'Instagram clone',
  description: "This is my other project which is The clone version of Instagram. I have been working on this when I started programming it does not have that much functionality, but I think it is worth doing for exprerience purposes",
  link: 'https://my-instagram-dd374.web.app',
  image: '../assets/img/my-insta.png'
},
{
  title: 'Gbi journal',
  subTitle: 'Journal publishing application for universities',
  description: "I think this project is really problem solving for our community, it can be customized to be digital library or online book store, but I planned it to be for collages to make them publish thier graduates journal paper.",
  link: 'https://gbi-journal.web.app',
  image: '../assets/img/gbi-journal.png'
},
{
  title: 'Minab food recipe',
  subTitle: 'Food recipe application',
  description: "Food recipe application, made as an assignment for MINAB tech company assignment",
  link: 'https://minab-food-recipe.web.app',
  image: '../assets/img/minab-food.png'
}
])




useHead({
  title: "ProjectsPage",
  meta: [{
    name: 'Projects page',
    content: 'Eyob nigussie projects page'
  }]
})
</script>