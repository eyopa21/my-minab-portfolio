<template>
  <div class="container">
    <div class="flex justify-start md:justify-center mt-8 mb-8">
      <AcademicCapIcon class="w-16 h-16 text-primary" />
    </div>
    <div class="flex mr-2 flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50" v-for="time in aboutPage.timelines" :key="time.id">
  
   
      <!-- left -->
      <TimeLeft
      v-if="!time.right"
        :title="time.title"
        :subtitle="time.subtitle"
        :description="time.description"
      />

      <!-- right -->
      <TimeRight
        v-if="time.right"
        :title="time.title"
        :subtitle="time.subtitle"
        :description="time.description"
      />
      <!-- left -->
      
   
    </div>
    <div class="flex justify-start md:justify-center mt-8 mb-8">
      <HomeIcon class="w-16 h-16 text-primary" />
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/outline";
import { AcademicCapIcon } from "@heroicons/vue/solid";

const aboutPage = useAboutPage()
</script>