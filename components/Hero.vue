<template>
  <div>
    <section id="hero" class="font-serif">
      <div
        class=" flex md:flex-row ml-2 md:ml-16  px-2 mx-auto mt-10 text-primary"
      >
        <div class="flex flex-col mb-32 space-y-4 w-full">
          <h1 class="text-3xl sm:text-[46px] md:text-7xl lg:text-8xl font-bold text-left leading-none">Hi,<br> I'm Eyob <br> Software engineer</h1>
          <p class=" text-left tracking-widest text-blue-600">Website developer and UI/UX designer</p>
          
          <div class="pt-8">
          <Button name="Contact me!" to="/contact"/>
          </div>
         
        </div>
         <div class="flex fixed w-full md:w-[93%] justify-end mb-32 pr-6">
         <SocialLinks/>
          </div>
      </div>
      
    </section>
  </div>
</template>
