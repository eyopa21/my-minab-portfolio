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
  title: 'title1',
  subTitle: 'subtitle1',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
  title: 'title2',
  subTitle: 'subtitle2',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
{
  title: 'title3',
  subTitle: 'subtitle3',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}])



useHead({
  title: "ProjectsPage",
  meta: [{
    name: 'Projects page',
    content: 'Eyob nigussie projects page'
  }]
})
</script>