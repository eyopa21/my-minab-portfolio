<template>
  <div
    class="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-4
     
      
    "
  >
    <div v-for="project in projects" :key="project">
      <Card :projects="project" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

/*
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_PROJECTS } from '@/gql/queries.js'


*/
const projects = ref([
  {
    title: "GBI App",
    subTitle: "Social media application for University students",
    description:
      "Gbi app is one of my projects aimed specifically for university student for chatting with thier beloved ones, and to get thier future wives!! This application works for all cross platforms as well",
    link: "https://gbi-date.web.app",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fgbi-date.png?alt=media&token=37accb22-ef8b-4f4f-a7d5-0f5be031d8c2",
  },
  {
    title: "My instagram",
    subTitle: "Instagram clone",
    description:
      "This is my other project which is The clone version of Instagram. I have been working on this when I started programming it does not have that much functionality, but I think it is worth doing for exprerience purposes",
    link: "https://my-instagram-dd374.web.app",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fmy-insta.png?alt=media&token=996d7046-1dfa-4856-9a45-d4393865bf54",
  },
  {
    title: "Gbi journal",
    subTitle: "Journal publishing application for universities",
    description:
      "I think this project is really problem solving for our community, it can be customized to be digital library or online book store, but I planned it to be for collages to make them publish thier graduates journal paper.",
    link: "https://gbi-journal.web.app",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fgbi-journal.png?alt=media&token=0bd1bcaf-a414-40ed-a075-debd04f4b557",
  },
  {
    title: "Minab food recipe",
    subTitle: "Food recipe application",
    description:
      "Food recipe application, made as an assignment for MINAB tech company assignment",
    link: "https://minab-food-recipe.web.app",
    image:
      "https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Fminab-food.png?alt=media&token=dbadf4c8-f412-45bf-97de-b64ace83bf8f",
  },
]);

/*
const { loading, result, error } = useQuery(GET_PROJECTS)
console.log(result, "from hasura")
console.log(error, "hasura")
*/
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