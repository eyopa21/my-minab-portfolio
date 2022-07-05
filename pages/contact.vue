<template>
  <div>
    <section id="skills" class="mb-32">
      <div class="flex flex-col md:flex-row justify-start mx-2 md:ml-16">
        <div class="flex flex-col mb-8 space-y-6 md:w-1/2">
          <headers name="<h2>" />
          <h1
            class="
              text-5xl
              md:text-7xl
              font-bold
              text-left
              md:text-left
              text-primary
              font-serif
            "
          >
            Contact me
          </h1>
          <headers name="</h2>" />
          <headers name="<p>" />
          <p class="text-left text-secondary md:mr-0">
            I'll be very pleased if you give a job opportunity for your software
            projects, and also Since feedbacks are the key to improvements I'll
            apprciated it if you leave your generous feedback over here.<br /><br />
            THANK YOU!!!!!
          </p>
          <headers name="</p>" />
        </div>
        <div class="md:ml-12">
        <headers name="<form>" />
          <VForm @submit="send" class="px-2 pt-6 pb-8 mb-4 bg-bg_color rounded">
            <div
              class="
                mb-2
                flex
                justify-start
                space-x-4
                md:flex md:justify-between
                w-full
                max-w-md
              "
            >
              <div class="mb-4 md:mr-2 md:mb-0 w-full">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="name"
                >
                  Name
                </label>

                <VField
                  class="
                    bg-bg_color
                    w-full
                    px-3
                    py-2
                    text-sm
                    leading-tight
                    text-white
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="name"
                  name="Name"
                  :rules="isRequired"
                  v-model="formData.name"
                  type="text"
                  placeholder="Your name here..."
                />

                <VErrorMessage
                  name="Name"
                  class="text-red-400 text-sm"
                ></VErrorMessage>
              </div>
              <div class="md:ml-2 w-full">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="lastName"
                >
                  Email
                </label>
                <VField
                  class="
                    bg-bg_color
                    w-full
                    px-3
                    py-2
                    text-sm
                    leading-tight
                    text-white
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="email"
                  rules="required|email"
                  v-model="formData.email"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <div>
                  <VErrorMessage
                    name="email"
                    class="text-red-400 text-sm"
                  ></VErrorMessage>
                </div>
              </div>
            </div>
            <div class="mb-2 max-w-md">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Subject
              </label>
              <VField
                class="
                  bg-bg_color
                  w-full
                  px-3
                  py-2
                  mb-3
                  text-sm
                  leading-tight
                  text-white
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                id="subject"
                name="Subject"
                :rules="isRequired"
                v-model="formData.subject"
                type="text"
                placeholder="Subject..."
              />
              <div>
                <VErrorMessage
                  name="Subject"
                  class="text-red-400 text-sm"
                ></VErrorMessage>
              </div>
            </div>
            <div class="mb-4 max-w-md">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Message
              </label>
              <VField
                class="
                  bg-bg_color
                  align-top
                  w-full
                  pb-32
                  px-3
                  py-2
                  mb-3
                  text-sm
                  leading-tight
                  text-white
                  border
                  rounded
                  shadow
                  appearance-none
                "
                id="message"
                name="Message"
                :rules="isRequired"
                v-model="formData.message"
                type="text"
                placeholder="The message here..."
                col="5"
              >
              </VField>
              <div>
                <VErrorMessage
                  name="Message"
                  class="text-red-400 text-sm"
                ></VErrorMessage>
              </div>
            </div>

            <div class="mb-6 text-left">
              <button>
                <nuxt-link
                  type="submit"
                  class="
                    mt-2
                    mb-2
                    p-3
                    px-6
                    pt-2
                    text-primary text-center
                    tracking-wider
                    bg-bg_color
                    border-2 border-primary
                    hover:text-black hover:bg-primary
                  "
                >
                  <svg
                    v-if="loading"
                    role="status"
                    class="
                      inline
                      w-6
                      h-6
                      mr-2
                      text-gray-200
                      animate-spin
                      dark:text-white
                      fill-primary
                    "
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    /></svg
                  >Send
                </nuxt-link>
              </button>
            </div>
          </VForm>

          <headers name="</form>" />
        </div>
      </div>
    </section>
  </div>
</template>

  
<script setup>
import { useForm, useField } from "vee-validate";
import axios from "axios";
import { ref } from "vue";
const alert = useAlert();
const loading = useLoading();

const formData = ref({
  name: "",
  subject: "",
  email: "",
  message: "",
});

const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return "This field is required!!";
};

const send = (value, { resetForm }) => {
  if (process.client) {
    loading.value = true;
  }

  axios({
    method: "post",
    url: "/api",
    data: formData.value,
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log(res);
      console.log("sent");

      if (process.client) {
        loading.value = false;
        alert.value = res.data;
        formData.value.email = "";
        formData.value.name = "";
        formData.value.subject = "";
        formData.value.message = "";
      }
      resetForm();
    })
    .catch((error) => {
      console.log("erri", error);
      if (process.client) {
        loading.value = false;
        alert.value = "Request not sent, please try again!!";
        formData.value.email = "";
        formData.value.name = "";
        formData.value.subject = "";
        formData.value.message = "";
      }
      resetForm();
    });
};

useHead({
  title: "Contact page",
  meta: [
    {
      name: "contact page",
      content: "Eyob nigussie contact page",
    },
  ],
});
</script>