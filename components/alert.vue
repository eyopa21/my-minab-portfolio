<template>
  <div v-if="alert != ''" class="z-60">
    <div
      class="
        alert-toast
        fixed
        bottom-0
        right-0
        m-4
        w-5/6
        md:w-full
        max-w-sm
        animate-bounce
      "
    >
      <label
        class="
          close
          cursor-pointer
          flex
          items-start
          justify-between
          w-full
          p-2
          bg-green-500
          h-16
          rounded
          shadow-lg
          text-white
        "
        title="close"
        for="footertoast"
      >
        {{ alert }}

        <svg
          @click="alert = ''"
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
      </label>
    </div>
  </div>
</template>

<script setup>
const alert = useAlert();

if (alert.value !== '') {
  setTimeout(() => {
    if (process.client) {
      alert.value = '';
    }
  }, 1000);
}


</script>