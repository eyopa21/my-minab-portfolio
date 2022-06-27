<template>
  <div>
    <section id="skills" class="mb-32">
      <div class="flex flex-col md:flex-row justify-start ml-4 md:ml-16 mx-auto mt-10">
        <div class="flex flex-col mb-8 space-y-6 md:w-1/2">
          <h1
            class="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-left md:text-left text-primary font-serif"
          >
            Contact me
          </h1>
          <p class="text-left text-secondary mr-8 md:mr-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div class="md:ml-12">
          <form class="px-2 pt-6 pb-8 mb-4 bg-bg_color rounded">
            <div class="mb-4 flex justify-start space-x-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                  First Name
                </label>
                <input
                  class="bg-bg_color focus:bg-secondary w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  v-model="formData.firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="md:ml-2">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                  Last Name
                </label>
                <input
                  class="bg-bg_color focus:bg-secondary w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  v-model="formData.lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="mb-2 max-w-md">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                Email
              </label>
              <input
                class="bg-bg_color focus:bg-secondary w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-4 max-w-md">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                Message
              </label>
              <textarea
                class="bg-bg_color focus:bg-secondary w-full h-32 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="message"
                v-model="formData.message"
                type="text"
                placeholder="The message here..."
                
              ></textarea>
              
            </div>

            <div class="mb-6 text-center">
              <Button name="Send!" @click="send()"/>
            </div>
            
            

          </form>
        </div>
           <div class="flex fixed w-full md:w-[93%] justify-end md:justify-start mb-32 pr-6 md:-ml-[50px]">
         <SocialLinks/>
          </div>
      </div>
    </section>
  </div>
</template>
<script setup>
  import axios from "axios";
  import { ref } from "vue";
  const alert = useAlert()

  alert.value = true;
  console.log(alert.value)
  


const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: '',

})
const test = (() => {
  console.log(formData.value)
})

const send = (() => {


console.log("port",process.env.PORT)
const options = {
  method: 'POST',
  url: process.env.SEND_GRID_URL,
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': process.env.SEND_GRID_API_KEY,
    'X-RapidAPI-Host': process.env.SEND_GRID_HOST_NAME
  },
  data: `{"personalizations":[{"to":[{"email":"jobtennis21@gmail.com"}],"subject":"Feedback from: ${formData.firstName} + ${formData.lastName}"}],"from":{"email":"${formData.email}"},"content":[{"type":"text/plain","value":"${formData.message}"}]}`
};

axios.request(options).then(function (response) {
	console.log(response.data);

}).catch(function (error) {
	console.error(error);
});

})
</script>