<template>
  <div class="container">
    <div class="flex justify-start md:justify-center mt-8 mb-8">
      <AcademicCapIcon class="w-16 h-16 text-primary" />
    </div>
    <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
      <!-- left -->
      <TimeLeft
        title="BACHELOR DEGREE IN SOFTWARE ENGINEERING"
        subtitle="2011-Now E.C"
        description="Bahirdar Technology of institute"
      />
      <!-- right -->
      <TimeRight
        title="BACHELOR DEGREE IN Managment"
        subtitle="2012-Now E.C"
        description="Bahirdar University Collage of Business and Economics (Extension programme)"
      />
      <!-- left -->
      <TimeLeft
        title="Athletics/TableTennis"
        subtitle="2006-2012 E.C"
        description="10X Gold, 2X Silver and 3X Bronze medal champion"
      />
      <!-- right -->
      <TimeRight
        title="IT diploma"
        subtitle="2010 E.C"
        description="Bahirdar Academy, Bahirdar"
      />
      <!-- left -->
      <TimeLeft
        title="Kindergarten - HighSchool"
        subtitle="1996-1998 E.C"
        description="Bahirdar Academy"
      />
    </div>
    <div class="flex justify-start md:justify-center mt-8 mb-8">
      <HomeIcon class="w-16 h-16 text-primary" />
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/outline";
import { AcademicCapIcon } from "@heroicons/vue/solid";
</script>