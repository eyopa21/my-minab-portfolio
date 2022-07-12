
<script setup>
const barLoading = useBarLoading();
const homePage = useHomePage()
if (process.client) {
  barLoading.value = true;
}

const { getHomePage, getAboutPage, getSkillsPage, getContactPage, getProjectsPage, getSocialLinks, getFooter } =
  useQueries();

getAboutPage();
getSkillsPage();
getHomePage();
getContactPage();
getProjectsPage();
getSocialLinks();
getFooter();
</script>

<template>
  <div class="bg-bg_color" v-if="homePage">
    <div id="main" class=" min-w-full bg-bg_color">
      <NuxtLayout name="default">
        <NuxtPage class="z-100" />
      </NuxtLayout>
    </div>
  </div>
  <alert />

  <Head>
    <Link rel="icon" href="image"></Link>
  </Head>
</template>
<style>
canvas {
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9999;
}
</style>