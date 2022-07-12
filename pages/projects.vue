<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-32">
    <div v-for="project in projectsPage" :key="project">
      <Card :projects="project" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const projectsPage = useProjectsPage()

//console.log("pro", projectsPage.value)

useHead({
  title: "ProjectsPage",
  meta: [
    {
      name: "Projects page",
      content: "Eyob nigussie projects page",
    },
  ],
});
</script>