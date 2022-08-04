<template>
  <div class="mx-auto px-5 mb-3">
    <div
      class="
        bg-bg_color
        rounded-lg
        border border-gray-200
        shadow-md
        dark:bg-gray-800 dark:border-gray-700
      "
    >
    <div class="flex flex-row">
      <img
        class="rounded-t-lg px-5 py-2 h-64 w-2/3"
        :src="props.projects.pricture"
        alt="image"
      />
       <div class="flex flex-col mt-2 space-y-0 md:space-y-2 pr-2">
      <div class="text-white uppercase font-semibold mb-2">Skills used</div>
      <div v-for="skill in props.projects.project_skills" :key="skill.id">
      <badge :skill="skill" />
      
      </div>
      </div>
    </div>

      <div class="p-5">
        <h5
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-primary
            dark:text-white
          "
        >
          {{ props.projects.title }}
        </h5>

        <div class="text-xs font-bold text-white mt-1 mb-2">
          {{ props.projects.subtitle }}
        </div>
        <p class="mb-3 font-normal text-secondary dark:text-gray-400">
          {{ props.projects.description }}
        </p>
        <div class="flex justify-start">
          <NuxtLink
            :to="props.projects.link"
            target="_blank"
            class="
              p-3
              px-6
              pt-2
              text-primary text-center
              tracking-wider
              bg-bg_color
              border-2 border-primary
              hover:text-black hover:bg-primary
            "
            >See more</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["projects"]);

</script>

