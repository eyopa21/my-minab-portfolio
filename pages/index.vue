<template>
  <div
    v-if="homePage && footer"
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
      h-screen
      text-primary
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
          md:leading-[70px]
        "
      >
        <alphabets :name="heading[0]" /><alphabets
          :name="heading[1]"
        /><alphabets :name="heading[2]" /><br />
        <alphabets :name="heading[4]" /><alphabets
          :name="heading[5]"
        /><alphabets :name="heading[6]" class="mr-4" />
        <alphabets
          :name="heading[8]"
          class="lg:text-8xl font-test2"
        /><alphabets :name="heading[9]" /><alphabets
          :name="heading[10]"
        /><alphabets :name="heading[11]" /><alphabets
          :name="heading[12]"
        /><br />
        <alphabets :name="heading[14]" /><alphabets
          :name="heading[15]"
        /><alphabets :name="heading[16]" /><alphabets
          :name="heading[17]"
        /><alphabets :name="heading[18]" /><alphabets
          :name="heading[19]"
        /><alphabets :name="heading[20]" />
        <alphabets :name="heading[21]" class="mr-4" /><alphabets
          :name="heading[23]"
        /><alphabets :name="heading[24]" /><alphabets
          :name="heading[25]"
        /><alphabets :name="heading[26]" /><alphabets
          :name="heading[27]"
        /><alphabets :name="heading[28]" /><alphabets
          :name="heading[29]"
        /><alphabets :name="heading[30]" />
      </h1>

      <headers name="</h1>" />

      <p class="text-left text-sm md:text-md tracking-widest text-blue-600">
        <headers name="<p>" /> {{ homePage.description }}<headers name="</p>" />
      </p>

      <div class="pt-16">
        <headers name="<button>" /><Button
          class="pt-4 pb-4"
          name="Contact me!"
          to="/contact"
        /><headers name="</button>" />
      </div>
    </div>

    <div class="flex justify-end mb-32 mt-64 mr-2" v-if="socialLinks[0]">
      <SocialLinks />
    </div>
  </div>
</template>
<script setup>
import { useQuery, useMutation } from "@vue/apollo-composable";
import { onBeforeMount, onMounted } from "vue";
import { gql } from "@apollo/client/core";
const homePage = useHomePage();
const footer = useFooter();
const heading = ref("");
const socialLinks = useSocialLinks();
const d = new Date();
const test = ref(100);
d.getMonth();

const view = ref(0);
if (homePage !== "") {
  heading.value = homePage.value.header;
}

const { mutate: update_views } = useMutation(gql`
  mutation ($id: Int!, $count: Int!) {
    update_viewers(where: { id: { _eq: $id } }, _set: { count: $count }) {
      returning {
        id
      }
    }
  }
`);


  const { loading, result, error } = useQuery(
    gql`
      query viewers($id: Int) {
        viewers(where: { id: { _eq: $id } }) {
          id
          count
        }
      }
    `,
    {
      id: d.getMonth(),
    }
  );
  watchEffect(() => {
    if (result.value) {
      console.log("result.value", result.value);
      view.value = result.value.viewers[0];

      update_views({ id: d.getMonth(), count: view.value.count+1 })
        .then((res) => {
          console.log("res", res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });

      console.log("views.value", view.value.count);
    } else if (error.value) {
      console.log("error.value", error.value);
    }
  });




onMounted(() => {});

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